import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 使用环境变量或默认相对路径
  const base = process.env.VITE_BASE_PATH || '/'
  
  return {
    plugins: [
      react(),
      mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex],
      }),
    ],
    base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  }
})
