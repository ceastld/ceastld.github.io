# 自动部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

## 部署流程

1. **推送代码到 main 分支**
   ```bash
   git add .
   git commit -m "feat: update homepage content"
   git push origin main
   ```

2. **自动触发部署**
   - GitHub Actions 会自动检测到 main 分支的推送
   - 自动安装依赖、构建项目
   - 将构建结果部署到 GitHub Pages

## 部署配置

### GitHub Actions 工作流
- 文件位置: `.github/workflows/deploy.yml`
- 触发条件: 推送到 main 分支
- 构建命令: `cd personal-homepage && pnpm build`
- 部署目录: `./personal-homepage/dist`

### GitHub Pages 设置
1. 进入仓库的 Settings 页面
2. 找到 "Pages" 部分
3. 设置 Source 为 "GitHub Actions"
4. 确保仓库是公开的（或你有 Pro 账户）

## 本地测试部署

在推送之前，可以在本地测试构建：

```bash
cd personal-homepage
pnpm build
pnpm preview
```

## 自定义域名

如果需要使用自定义域名，可以：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名，例如：`yourdomain.com`
3. 在 DNS 设置中添加 CNAME 记录指向 `ceastld.github.io`

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 `personal-homepage/package.json` 中的依赖
   - 确保所有 TypeScript 类型错误已修复

2. **部署失败**
   - 检查 GitHub Actions 日志
   - 确保仓库有正确的权限设置

3. **页面无法访问**
   - 检查 GitHub Pages 设置
   - 确认域名配置正确

### 查看部署状态

1. 进入仓库的 "Actions" 标签页
2. 查看最新的工作流运行状态
3. 点击具体的工作流查看详细日志
