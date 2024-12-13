@echo off
echo 正在清理...
rd /s /q node_modules
del package-lock.json

echo 正在清除 npm 缓存...
npm cache clean --force

echo 正在安装依赖...
npm install

echo 启动开发服务器...
npm run dev

pause