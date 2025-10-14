/// <reference types="vite/client" />

declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
