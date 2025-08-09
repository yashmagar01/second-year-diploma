'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CodeBracketIcon, XMarkIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import FileTree from './FileTree';
import type { FileNode, FolderData } from '@/types/subject';

interface SubjectPageProps {
  subjectName: string;
  folderData: FolderData;
}

export default function SubjectPage({ subjectName, folderData }: SubjectPageProps) {
  const router = useRouter();
  const [activeFile, setActiveFile] = useState<FileNode | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isMobileTreeOpen, setIsMobileTreeOpen] = useState(false);
  const [cursor, setCursor] = useState<FileNode | null>(null);
  const [data, setData] = useState<any>(folderData.root);
  
  // Function to update node active state
  const updateNodeActiveState = (nodes: FileNode[], path: string): FileNode[] => {
    return nodes.map(node => {
      const isActive = node.path === path;
      const children = node.children ? updateNodeActiveState(node.children, path) : undefined;
      return {
        ...node,
        active: isActive,
        children,
      };
    });
  };

  const filters = [
    { id: 'all', name: 'All Files' },
    { id: 'lab', name: 'Lab Manual Codes' },
    { id: 'self-study', name: 'Self Study' },
    { id: 'youtube', name: 'YouTube Learning' },
    { id: 'classwork', name: 'College Classwork' },
  ];

  // Function to filter the tree based on the active filter
  const filterTree = useCallback((node: FileNode): FileNode | null => {
    if (!node) return null;
    if (activeFilter === 'all') return node;
    if (node.type === 'file' && node.tags?.includes(activeFilter)) return node;
    if (node.children) {
      const filteredChildren = node.children
        .map(child => filterTree(child))
        .filter((child): child is FileNode => child !== null);
      if (filteredChildren.length > 0) {
        return { ...node, children: filteredChildren };
      }
    }
    return null;
  }, [activeFilter]);

  const handleFileClick = (node: FileNode) => {
    if (node.type === 'file') {
      setActiveFile(node);
      setIsMobileTreeOpen(false);

      // Update active state in the tree
      if (data?.root) {
        const updatedRoot = {
          ...data.root,
          children: updateNodeActiveState(data.root.children || [], node.path)
        };
        setData({ root: updatedRoot });
      }
    }
  };

  const getBreadcrumbs = useCallback((): { name: string; path: string }[] => {
    if (!activeFile) return [];
    const parts = activeFile.path.split('/').filter(Boolean);
    return parts.map((part, index) => ({
      name: part,
      path: '/' + parts.slice(0, index + 1).join('/'),
    }));
  }, [activeFile]);

  const renderFileContent = () => {
    if (!activeFile) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Select a file to view its content</p>
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col">
        <nav className="border-b border-gray-200 p-4">
          <div className="flex items-center text-sm text-gray-500">
            {getBreadcrumbs().map((crumb, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <ChevronRightIcon className="h-4 w-4 mx-1" />}
                <span className="hover:text-gray-700">{crumb.name}</span>
              </div>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeFilter === filter.id
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex h-full bg-white rounded-lg shadow overflow-hidden">
            {/* Folder Tree */}
            <div 
              className={`w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 bg-gray-50 overflow-y-auto transition-all duration-300 ${
                isMobileTreeOpen ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
                <h2 className="text-lg font-semibold text-gray-800">Files</h2>
                <button 
                  onClick={() => setIsMobileTreeOpen(false)}
                  className="md:hidden text-gray-500 hover:text-gray-700"
                  aria-label="Close file tree"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-2">
                {data?.root?.children && (
                  <FileTree 
                    node={data.root} 
                    onFileClick={handleFileClick}
                  />
                )}
              </div>
            </div>

            {/* File Viewer */}
            <div className="flex-1 flex flex-col bg-white">
              {activeFile ? (
                <>
                  <div className="border-b border-gray-200 p-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      {activeFile.name}
                    </h2>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <SyntaxHighlighter
                      language={activeFile.language || 'text'}
                      style={vscDarkPlus}
                      showLineNumbers
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        height: '100%',
                        backgroundColor: '#1E1E1E',
                      }}
                    >
                      {activeFile.content || ''}
                    </SyntaxHighlighter>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <CodeBracketIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No file selected
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Select a file from the tree to view its contents.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  };

  // Toggle mobile tree view
  const toggleMobileTree = () => {
    setIsMobileTreeOpen(!isMobileTreeOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileTreeOpen(!isMobileTreeOpen)}
              className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
              aria-label="Toggle file tree"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{subjectName}</h1>
          </div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Subjects
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            {getBreadcrumbs().map((crumb, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <ChevronRightIcon className="h-4 w-4 mx-1" />}
                <span className="hover:text-gray-700">{crumb.name}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">{subjectName}</h1>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeFilter === filter.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full bg-white rounded-lg shadow overflow-hidden">
        {/* Folder Tree */}
        <div 
          className={`w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 bg-gray-50 overflow-y-auto transition-all duration-300 ${
            isMobileTreeOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
            <h2 className="text-lg font-semibold text-gray-800">Files</h2>
            <button 
              onClick={() => setIsMobileTreeOpen(false)}
              className="md:hidden text-gray-500 hover:text-gray-700"
              aria-label="Close file tree"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-2">
            {data?.root?.children && (
              <FileTree 
                node={data.root} 
                onFileClick={handleFileClick}
              />
            )}
          </div>
        </div>

        {/* File Viewer */}
        <div className="flex-1 overflow-hidden">
          {renderFileContent()}
        </div>
      </div>
    </div>
  );
}
