#!/bin/bash
# Linux 服务器部署脚本

echo "开始部署侗韵蓝染项目..."

# 设置变量
PROJECT_NAME="lanran"
DEPLOY_DIR="/var/www/lanran"
SERVICE_NAME="lanran"
PORT=3000

# 1. 更新系统包
echo "更新系统包..."
sudo apt update

# 2. 安装 Node.js 和 npm（如果还没有安装）
if ! command -v node &> /dev/null; then
    echo "安装 Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# 3. 安装 PM2（生产环境进程管理器）
if ! command -v pm2 &> /dev/null; then
    echo "安装 PM2..."
    sudo npm install -g pm2
fi

# 4. 创建部署目录
echo "创建部署目录..."
sudo mkdir -p $DEPLOY_DIR
sudo chown $USER:$USER $DEPLOY_DIR

# 5. 解压项目文件（假设已上传）
echo "解压项目文件..."
cd $DEPLOY_DIR
# unzip lanran_deploy_*.zip

# 6. 安装依赖
echo "安装项目依赖..."
npm install --production

# 7. 启动应用
echo "启动应用..."
pm2 start npm --name "$SERVICE_NAME" -- start
pm2 save
pm2 startup

# 8. 配置 Nginx（可选）
echo "配置 Nginx..."
sudo tee /etc/nginx/sites-available/lanran > /dev/null << EOF
server {
    listen 80;
    server_name your-domain.com;  # 替换为您的域名

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # 静态文件缓存
    location /_next/static {
        alias $DEPLOY_DIR/.next/static;
        expires 365d;
        access_log off;
    }

    location /images {
        alias $DEPLOY_DIR/public/images;
        expires 365d;
        access_log off;
    }

    location /videos {
        alias $DEPLOY_DIR/public/videos;
        expires 365d;
        access_log off;
    }
}
EOF

# 启用站点
sudo ln -sf /etc/nginx/sites-available/lanran /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "部署完成！"
echo "应用运行在: http://localhost:$PORT"
echo "通过域名访问: http://your-domain.com"
