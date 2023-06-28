#!/bin/bash

if [ $# -eq 0 ]; then
  echo "请输入要传送的文件"
  exit 1
fi

file=$1
full_path=$(readlink -f $file)
echo "文件的完整路径是：$full_path"


adb push $full_path "/sdcard/脚本/"
read -p "按回车关闭窗口"

# adb push xx /sdcard/脚本/
