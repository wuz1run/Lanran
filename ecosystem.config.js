# PM2 生态系统配置文件
# 用于生产环境应用管理

module.exports = {
  apps: [
    {
      name: 'lanran',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/lanran',
      instances: 'max', // 使用所有CPU核心
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '/var/log/pm2/lanran-error.log',
      out_file: '/var/log/pm2/lanran-out.log',
      log_file: '/var/log/pm2/lanran-combined.log',
      time: true,
      // 自动重启配置
      watch: false,
      max_memory_restart: '1G',
      // 健康检查
      min_uptime: '10s',
      max_restarts: 10
    }
  ]
};
