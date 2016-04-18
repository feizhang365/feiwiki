## centos7 jdk install.md

1. Check the current RPM package name:

$ rpm -qa | grep openjdk
java-1.6.0-openjdk-1.6.0.0-5.1.13.3.el6_5.x86_64

2. yum remove -y java-1.6.0-openjdk

3. yum install 