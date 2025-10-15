# LaTeX Resume Template

这是一个专业的LaTeX简历模板，适用于学术和工程背景的求职者。

## 功能特点

- 现代化的设计风格
- 清晰的层次结构
- 支持超链接（邮箱、GitHub、LinkedIn等）
- 包含学术成果展示
- 响应式布局
- 易于定制和修改

## 包含的章节

1. **个人信息** - 姓名、联系方式、社交媒体链接
2. **教育背景** - 学校、学位、GPA、相关课程
3. **工作经验** - 实习、研究经历等
4. **项目经历** - 个人和学术项目
5. **学术成果** - 论文发表
6. **技能** - 编程语言、框架、工具等
7. **奖项荣誉** - 奖学金、竞赛获奖等

## 使用方法

### 1. 安装LaTeX环境

**Windows:**
- 下载并安装 [MiKTeX](https://miktex.org/) 或 [TeX Live](https://www.tug.org/texlive/)

**macOS:**
```bash
brew install --cask mactex
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install texlive-full
```

### 2. 编译简历

在resume文件夹中运行：

```bash
# 使用pdflatex编译
pdflatex resume.tex

# 或者使用xelatex（支持更好的中文支持）
xelatex resume.tex
```

### 3. 自定义内容

编辑 `resume.tex` 文件，替换以下内容：

- 个人信息（姓名、联系方式）
- 教育背景
- 工作经验
- 项目经历
- 学术成果
- 技能列表
- 奖项荣誉

## 自定义选项

### 颜色主题
在文档开头修改颜色定义：
```latex
\definecolor{primarycolor}{RGB}{51, 51, 51}    % 主色调
\definecolor{secondarycolor}{RGB}{102, 102, 102} % 次要颜色
\definecolor{accentcolor}{RGB}{0, 123, 255}    % 强调色
```

### 字体大小
修改文档类选项：
```latex
\documentclass[11pt,a4paper]{article}  % 11pt, 12pt等
```

### 页面边距
调整geometry设置：
```latex
\geometry{margin=0.75in}  % 调整边距大小
```

## 依赖包

确保安装了以下LaTeX包：
- `geometry` - 页面布局
- `enumitem` - 列表格式
- `hyperref` - 超链接支持
- `xcolor` - 颜色支持
- `titlesec` - 标题格式
- `fontawesome` - 图标字体
- `multicol` - 多列布局

## 输出格式

编译后会生成 `resume.pdf` 文件，可以直接用于：
- 在线申请
- 邮件发送
- 打印输出

## 注意事项

1. 保持简历内容简洁明了
2. 根据申请职位调整相关内容
3. 定期更新联系方式和最新成果
4. 确保所有链接都是有效的
5. 检查拼写和语法错误

## 许可证

此模板基于MIT许可证开源，可以自由使用和修改。
