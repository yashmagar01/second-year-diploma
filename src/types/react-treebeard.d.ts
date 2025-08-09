declare module 'react-treebeard' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  interface TreeNode {
    id?: string | number;
    name: string;
    toggled?: boolean;
    active?: boolean;
    loading?: boolean;
    children?: TreeNode[];
    [key: string]: any;
  }

  interface TreeProps {
    data: TreeNode | TreeNode[];
    onToggle?: (node: TreeNode, toggled: boolean) => void;
    style?: TreeStyle;
    animations?: TreeAnimations | boolean;
    onMouseOver?: (node: TreeNode) => void;
    onMouseOut?: (node: TreeNode) => void;
    onClick?: (node: TreeNode) => void;
    decorators?: TreeDecorators;
    nodeMarginLeft?: number;
    nodeContentRenderer?: ComponentType<{ node: TreeNode; style: any; onClick: () => void }>;
  }

  interface TreeStyle {
    tree?: CSSProperties;
    header?: CSSProperties;
    subtree?: CSSProperties;
    loading?: CSSProperties;
    loadingCircle?: CSSProperties;
    toggle?: CSSProperties;
    toggleWrapper?: CSSProperties;
    toggleBase?: CSSProperties;
    toggleWrapperFill?: CSSProperties;
  }

  interface TreeAnimations {
    toggle?: (props: { node: TreeNode; duration: number }) => any;
    drawer?: (props: { node: TreeNode; duration: number }) => any;
  }

  interface TreeDecorators {
    Loading?: ComponentType<{ style: CSSProperties }>;
    Toggle?: ComponentType<{ style: CSSProperties; node: TreeNode }>;
    Header?: ComponentType<{ node: TreeNode; style: CSSProperties }>;
    Container?: ComponentType<{ style: CSSProperties; node: TreeNode }>;
  }

  const Tree: ComponentType<TreeProps>;
  export default Tree;

  export const decorators: {
    Loading: ComponentType<{ style: CSSProperties }>;
    Toggle: ComponentType<{ style: CSSProperties; node: TreeNode }>;
    Header: ComponentType<{ node: TreeNode; style: CSSProperties }>;
    Container: ComponentType<{ style: CSSProperties; node: TreeNode }>;
  };

  export const animations: TreeAnimations;
  export const theme: {
    tree: TreeStyle;
    header: TreeStyle;
  };
}
