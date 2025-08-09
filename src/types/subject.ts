export interface FileNode {
  id?: string;
  name: string;
  type: 'file' | 'directory';
  path: string;
  toggled?: boolean;
  active?: boolean;
  children?: FileNode[];
  content?: string;
  output?: string;
  language?: string;
  [key: string]: any; // For any additional properties
}

export interface FolderData {
  root: FileNode;
}

export interface SubjectPageProps {
  subjectName: string;
  folderData: FolderData;
}

export interface TreeHeaderProps {
  node: FileNode;
  style: React.CSSProperties;
  prefix?: React.ReactNode;
  onClick?: () => void;
}

export interface TreeToggleProps {
  style: React.CSSProperties;
  node: FileNode;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
