# 个人主页项目

这是一个基于 React + TypeScript + Vite + MDX 的个人主页项目，用于展示学术成果和研究经历。

## 功能特性

- ✅ React + TypeScript 开发
- ✅ Vite 构建工具
- ✅ MDX 支持，可以在 Markdown 中嵌入 React 组件
- ✅ 学术成果展示组件
- ✅ 朴素美观的样式设计
- ✅ 响应式布局

## 项目结构

```
src/
├── components/
│   ├── AcademicPaper.tsx    # 学术成果展示组件
│   └── AcademicPaper.css    # 组件样式
├── pages/
│   └── Home.mdx            # 主页内容（MDX 格式）
├── App.tsx                 # 主应用组件
├── App.css                 # 应用样式
└── index.css               # 全局样式
```

## 学术成果组件使用

`AcademicPaper` 组件支持以下属性：

- `image`: 论文/项目图片路径
- `title`: 论文/项目标题
- `authors`: 作者列表
- `institution`: 发表机构
- `paper`: 论文链接（可选）
- `page`: 项目页面链接（可选）
- `code`: 代码仓库链接（可选）

### 使用示例

```jsx
<AcademicPaper
  image="/path/to/image.jpg"
  title="论文标题"
  authors="作者1, 作者2"
  institution="发表机构"
  paper="https://example.com/paper.pdf"
  page="https://example.com/project"
  code="https://github.com/example/repo"
/>
```

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 自定义内容

1. 编辑 `src/pages/Home.mdx` 文件来修改主页内容
2. 在 MDX 文件中可以直接使用 `AcademicPaper` 组件
3. 修改 `src/components/AcademicPaper.css` 来自定义组件样式
4. 修改 `src/index.css` 来自定义全局样式

## 部署

构建完成后，将 `dist` 目录部署到任何静态网站托管服务即可。