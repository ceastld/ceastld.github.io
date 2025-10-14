@echo off
echo 正在提交并推送到 GitHub...
git add .
git commit -m "feat: update homepage content"
git push origin main
echo 部署完成！GitHub Actions 将自动构建并部署到 GitHub Pages
echo 请访问 https://ceastld.github.io 查看部署结果
pause
