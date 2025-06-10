# 侗韵蓝染项目部署脚本
# PowerShell 部署脚本

Write-Host "开始部署侗韵蓝染项目..." -ForegroundColor Green

# 1. 清理旧的构建文件
Write-Host "清理旧的构建文件..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
}
if (Test-Path "out") {
    Remove-Item -Recurse -Force out
}

# 2. 安装依赖
Write-Host "安装项目依赖..." -ForegroundColor Yellow
npm install

# 3. 构建项目
Write-Host "构建项目..." -ForegroundColor Yellow
npm run build

# 4. 导出静态文件（如果需要静态部署）
Write-Host "导出静态文件..." -ForegroundColor Yellow
npx next export

# 5. 创建部署包
Write-Host "创建部署包..." -ForegroundColor Yellow
$deployDate = Get-Date -Format "yyyyMMdd_HHmmss"
$deployPackage = "lanran_deploy_$deployDate.zip"

# 压缩必要文件
if (Get-Command Compress-Archive -ErrorAction SilentlyContinue) {
    Compress-Archive -Path ".next", "public", "package.json", "next.config.ts" -DestinationPath $deployPackage
    Write-Host "部署包已创建: $deployPackage" -ForegroundColor Green
} else {
    Write-Host "请手动压缩以下文件夹到 $deployPackage:" -ForegroundColor Yellow
    Write-Host "  - .next"
    Write-Host "  - public"
    Write-Host "  - package.json"
    Write-Host "  - next.config.ts"
}

Write-Host "部署准备完成！" -ForegroundColor Green
Write-Host "接下来请将文件上传到服务器..." -ForegroundColor Cyan
