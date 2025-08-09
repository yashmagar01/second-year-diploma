'use client';

import { useState } from 'react';
import { FolderIcon, DocumentIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import type { FileNode } from '@/types/subject';

interface FileTreeProps {
  node: FileNode;
  onFileClick: (node: FileNode) => void;
  level?: number;
}

export default function FileTree({ node, onFileClick, level = 0 }: FileTreeProps) {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.children) {
      setIsExpanded(!isExpanded);
    } else {
      onFileClick(node);
    }
  };

  const handleFileClick = () => {
    if (node.type === 'file') {
      onFileClick(node);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="pl-4">
      <div 
        className={`flex items-center py-1 px-2 rounded hover:bg-gray-100 cursor-pointer ${node.active ? 'bg-blue-50' : ''}`}
        onClick={handleFileClick}
      >
        {node.children && (
          <button 
            onClick={handleToggle}
            className="mr-1 text-gray-500 hover:text-gray-700"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>
        )}
        {!node.children && <div className="w-5" />}
        
        {node.type === 'directory' ? (
          <FolderIcon className="h-5 w-5 text-yellow-500 mr-2" />
        ) : (
          <DocumentIcon className="h-5 w-5 text-blue-500 mr-2" />
        )}
        <span className="truncate">{node.name}</span>
      </div>
      
      {node.children && isExpanded && (
        <div className="border-l-2 border-gray-200 ml-2">
          {node.children.map((child) => (
            <FileTree 
              key={child.path} 
              node={child} 
              onFileClick={onFileClick}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
