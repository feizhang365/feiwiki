# linux命令

#### * 查看进程
ps -ef |grep  程序名

netstat -nltp |grep 端口号或服务名

####  * 杀死进程
killall name

kill pid
#### * 让linux程序在后台运行

nohup command {option} &

** Demo：**

nohup aria2c --enable-rpc=true --rpc-listen-all=true &


#### * python开启一个简单的服务器

python -m SimpleHTTPServer 8000


#### * 不同电脑之间文件拷贝

- Copy something from this machine to some other machine:

scp /path/to/local/file username@hostname:/path/to/remote/file

- Copy something from another machine to this machine:

scp username@hostname:/path/to/remote/file /path/to/local/file
# Centos7开启端口
开启端口
 
firewall-cmd --zone=public --add-port=80/tcp --permanent
 
命令含义：
 
--zone #作用域
 
--add-port=80/tcp  #添加端口，格式为：端口/通讯协议
 
--permanent   #永久生效，没有此参数重启后失效
 
重启防火墙
 
firewall-cmd --reload

[参考](http://stackoverflow.com/questions/24729024/centos-7-open-firewall-port)
