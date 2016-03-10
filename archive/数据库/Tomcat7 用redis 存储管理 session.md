# Tomcat7 用redis 存储管理 session

### 1.拷贝以下jar到tomcat7下的lib目录中

 [tomcat-redis-session-manager-VERSION.jar](https://github.com/rmohr/tomcat-redis-session-manager/releases/download/2.0-tomcat-7/tomcat-redis-session-manager-2.0.0.jar)  

 [jedis-2.5.2.jar](http://search.maven.org/remotecontent?filepath=redis/clients/jedis/2.8.0/jedis-2.8.0.jar)

 [commons-pool2-2.2.jar](http://central.maven.org/maven2/org/apache/commons/commons-pool2/2.2/commons-pool2-2.2.jar)

### 2.将以下内容添加到tomcat context.xml文件中

`
<Valve className="com.orangefunction.tomcat.redissessions.RedisSessionHandlerValve" />
<Manager className="com.orangefunction.tomcat.redissessions.RedisSessionManager"
         host="localhost" <!-- optional: defaults to "localhost" -->
         port="6379" <!-- optional: defaults to "6379" -->
         database="0" <!-- optional: defaults to "0" -->
         maxInactiveInterval="60" <!-- optional: defaults to "60" (in seconds) -->
         sessionPersistPolicies="PERSIST_POLICY_1,PERSIST_POLICY_2,.." <!-- optional -->
         sentinelMaster="SentinelMasterName" <!-- optional -->
         sentinels="sentinel-host-1:port,sentinel-host-2:port,.." <!-- optional --> />
   `
         

##### 参考资源

[tomcat-redis-session-manager](https://github.com/jcoleman/tomcat-redis-session-manager)





