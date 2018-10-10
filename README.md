# MVideo


#### 新版本预告：
1. tp5.1重写
2. 新增后台
3. 兼容MacCmsV10采集规则
4. 程序大小3-4MB左右
5. 采用Sqlite数据库（无需配置）

但是由于最近遇到了版权狗，不想更新了，版权狗博客：https://blog.hidove.cn/

想了解更多 可发邮箱 mlooc@qq.com 进行了解，

多次警告无效，写一次盗一次，就连MVideoT也被盗了，

所以 新版本短期内不会开源。

## 简介
1. 自动采集影视资源
2. 在线播放功能
3. 搜索全网资源功能
4. 无需数据库

对接资源站点：zuida.me 做到实时更新

推荐配置：Nginx+PHP7.1

演示站点：[http://v.mlooc.cn](http://v.mlooc.cn)


## 伪静态配置规则

### Nginx

```
location / {
	rewrite ^/list/?([0-9]+)?/?$ /index.php?id=$1;
	rewrite ^/play/?([0-9]+)?/?$ /lib/play.php?id=$1;
	rewrite ^/search/([^/]+)/?$ /lib/search.php?key=$1;
	rewrite ^/zhibo.html /lib/zhibo.php;
	rewrite ^/password.html /lib/password.php;
}
```

### Apache

```
RewriteEngine On
RewriteRule ^list/?([0-9]+)?/?$ index.php?id=$1
RewriteRule ^play/?([0-9]+)?/?$ lib/play.php?id=$1
RewriteRule ^search/([^/]+)/?$ lib/search.php?key=$1
RewriteRule ^zhibo.html lib/zhibo.php
RewriteRule ^password.html lib/password.php
```
