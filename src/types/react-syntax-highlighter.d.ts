declare module 'react-syntax-highlighter' {
  import { ComponentType, CSSProperties } from 'react';
  
  interface SyntaxHighlighterProps {
    language?: string;
    style?: Record<string, CSSProperties>;
    customStyle?: CSSProperties;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    wrapLongLines?: boolean;
    lineNumberStyle?: CSSProperties;
    lineProps?: (lineNumber: number) => { style?: CSSProperties };
    children?: string;
  }

  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
  
  export const Prism: any;
  export const PrismLight: any;
  
  export function Light(props: SyntaxHighlighterProps): JSX.Element;
  
  export function registerLanguage(
    name: string,
    language: () => any
  ): void;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  import { CSSProperties } from 'react';
  
  interface PrismStyle {
    [key: string]: CSSProperties;
  }
  
  export const vscDarkPlus: PrismStyle;
  export const atomDark: PrismStyle;
  export const darcula: PrismStyle;
  export const dracula: PrismStyle;
  export const ghcolors: PrismStyle;
  export const gruvboxDark: PrismStyle;
  export const materialDark: PrismStyle;
  export const materialLight: PrismStyle;
  export const nord: PrismStyle;
  export const okaidia: PrismStyle;
  export const prism: PrismStyle;
  export const solarizedlight: PrismStyle;
  export const tomorrow: PrismStyle;
  export const twilight: PrismStyle;
}
