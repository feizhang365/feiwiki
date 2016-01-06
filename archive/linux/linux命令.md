### linux进程
ps -ef |grep  程序名

netstat -nltp |grep 端口号或服务名

###### 1.杀死进程
killall name

kill pid
###### 2.让linux程序在后台运行

nohup command {option} &

** Demo：**

nohup aria2c --enable-rpc=true --rpc-listen-all=true &



### Centos7开启端口
开启端口
 
firewall-cmd --zone=public --add-port=80/tcp --permanent
 
命令含义：
 
--zone #作用域
 
--add-port=80/tcp  #添加端口，格式为：端口/通讯协议
 
--permanent   #永久生效，没有此参数重启后失效
 
重启防火墙
 
firewall-cmd --reload

[参考](http://stackoverflow.com/questions/24729024/centos-7-open-firewall-port)