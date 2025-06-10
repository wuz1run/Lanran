# 侗韵蓝染项目部署指南

## 项目概述
侗韵蓝染是一个展示侗族传统蓝染工艺的数字化非遗平台，基于 Next.js 15 构建。

## 部署选项

### 方案一：传统服务器部署（推荐）

#### 1. 系统要求
- Linux 服务器（Ubuntu 18.04+ / CentOS 7+）
- Node.js 18+
- npm 或 yarn
- Nginx（可选，用于反向代理）
- PM2（生产环境进程管理）

#### 2. 部署步骤

##### 本地准备
```bash
# 1. 构建项目
npm run build

# 2. 运行部署脚本（Windows）
powershell -ExecutionPolicy Bypass -File deploy.ps1

# 3. 将生成的部署包上传到服务器
```

##### 服务器部署
```bash
# 1. 上传文件到服务器
scp lanran_deploy_*.zip user@your-server:/tmp/

# 2. 登录服务器
ssh user@your-server

# 3. 运行服务器部署脚本
chmod +x deploy-server.sh
sudo ./deploy-server.sh

# 4. 检查应用状态
pm2 status
pm2 logs lanran
```

#### 3. 配置域名
编辑 `/etc/nginx/sites-available/lanran`，将 `your-domain.com` 替换为您的实际域名。

### 方案二：Docker 部署

#### 1. 构建和运行
```bash
# 构建 Docker 镜像
docker build -t lanran .

# 使用 Docker Compose 部署
docker-compose up -d

# 查看日志
docker-compose logs -f
```

#### 2. 管理容器
```bash
# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 更新应用
docker-compose pull && docker-compose up -d
```

### 方案三：静态文件部署

如果您的项目主要是静态内容，可以导出为静态文件：

```bash
# 1. 配置 next.config.ts 添加 output: 'export'
# 2. 构建并导出
npm run build
npx next export

# 3. 将 out 目录内容上传到 Web 服务器
```

## 配置文件说明

### 1. ecosystem.config.js
PM2 进程管理配置，包含：
- 多进程集群模式
- 自动重启机制
- 日志管理
- 内存限制

### 2. nginx.conf
Nginx 反向代理配置，包含：
- 静态文件缓存
- Gzip 压缩
- 安全头设置
- 负载均衡

### 3. docker-compose.yml
Docker 容器编排配置，包含：
- 应用容器
- Nginx 代理
- 卷挂载
- 网络配置

## 性能优化

### 1. 静态资源优化
- 图片压缩和格式优化
- 字体文件本地化
- CDN 加速（可选）

### 2. 缓存策略
- 浏览器缓存
- Nginx 缓存
- Next.js 构建缓存

### 3. 监控和日志
```bash
# 查看应用日志
pm2 logs lanran

# 监控资源使用
pm2 monit

# 查看 Nginx 日志
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

## 安全建议

### 1. 服务器安全
- 定期更新系统
- 配置防火墙
- 使用 SSH 密钥认证
- 禁用 root 登录

### 2. 应用安全
- 启用 HTTPS
- 设置安全头
- 定期更新依赖包
- 监控异常访问

### 3. SSL 证书配置
```bash
# 使用 Let's Encrypt 申请免费证书
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 备份和恢复

### 1. 数据备份
```bash
# 备份应用代码
tar -czf lanran_backup_$(date +%Y%m%d).tar.gz /var/www/lanran

# 备份配置文件
cp /etc/nginx/sites-available/lanran /backup/nginx-lanran.conf
```

### 2. 自动备份脚本
```bash
#!/bin/bash
# 添加到 crontab: 0 2 * * * /path/to/backup.sh

BACKUP_DIR="/backup/lanran"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/lanran_$DATE.tar.gz /var/www/lanran

# 保留最近 7 天的备份
find $BACKUP_DIR -name "lanran_*.tar.gz" -mtime +7 -delete
```

## 故障排除

### 1. 常见问题
- 端口被占用：`sudo lsof -i :3000`
- 权限问题：检查文件所有者和权限
- 内存不足：调整 PM2 配置或服务器规格

### 2. 日志分析
```bash
# 应用错误日志
pm2 logs lanran --err

# Nginx 错误日志
sudo tail -f /var/log/nginx/error.log

# 系统日志
sudo journalctl -f -u nginx
```

## 联系信息
如需技术支持，请联系项目维护者。

---
最后更新时间：2025年6月10日
