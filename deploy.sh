#!/bin/bash

# 构建项目
echo "开始构建项目..."
pnpm docs:build    

# 检查构建是否成功
if [ $? -ne 0 ]; then
    echo "构建失败，退出部署"
    exit 1
fi

# 定义服务器信息
SERVER_USER="blog"
SERVER_IP="1.94.239.72"
REMOTE_PATH="/home/blog"

# 传输构建文件到服务器
echo "开始传输文件到服务器..."
scp -r docs/.vitepress/dist/* $SERVER_USER@$SERVER_IP:$REMOTE_PATH/dist/

# 连接到服务器并更新 nginx 中的文件
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    # 确保 nginx 容器存在
    if docker ps | grep -q my-nginx; then
        echo "更新 Nginx 内容..."
        # 复制新的构建文件到 Nginx 容器
        docker cp /home/blog/dist/. my-nginx:/usr/share/nginx/html/
        echo "部署完成！"
    else
        echo "未找到 Nginx 容器！"
        exit 1
    fi
EOF
