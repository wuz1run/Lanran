# Docker 部署配置
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制应用代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 创建非 root 用户
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# 更改文件所有权
RUN chown -R nextjs:nodejs /app
USER nextjs

# 启动应用
CMD ["npm", "start"]
