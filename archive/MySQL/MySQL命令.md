# MySQL 命令

#### * 创建新用户授权

CREATE USER 'user'@'%' IDENTIFIED BY 'pass';

GRANT SELECT,CREATE,UPDATE,INSERT,DELETE  ON DB.* TO 'user'@'%';

flush privileges;


#### * 更改用户密码

set password for 'user'@'127.0.0.1' = PASSWORD('1111');


#### * 数据库备份

mysqldump -uUser -pPassword DBName > %curdir%\FILENAME.sql


#### * 数据库状态

show status

#### * 查看连接数

如果是root帐号，你能看到所有用户的当前连接。如果是其它普通帐号，只能看到自己占用的连接。

show processlist

show full processlist; 






