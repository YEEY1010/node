# 原生模块

http

熟悉http协议，http有哪些常用请求方法，http常用状态码(200,304,404,502)

||||
|-|-|-|
|1xx|请求预备阶段，链接没终止|不分手的协议|
|2xx|成功||
|3xx|重定向，缓存|一般我们请求都是向服务端发起的，设置缓存，它会重新去其他地方拿|
|4xx|客户端出问题了，404，链接写错了，服务器上根本没有这个资源|前端出问题了|
|5xx|服务器出问题了|后端出问题了|

createServer方法用于创建服务器，让JS真正变成后端语言，因为服务器是后端的最大标志

创建第一个最简单的服务器，JS终于成为后端了
```php
header('Access-Control-Allow-Origin:*');
```
```js
var {
    createServer
} = require('http');
createServer((req, res) => {
    res.end('hello world!');
}).listen(12345);
console.log('启动服务器');
```

# https

[https的服务器搭建](https://github.com/Wscats/node-tutorial/tree/master/server/httpsServer)

# 微信防撤回

前端：浏览器微信客户端
后端：NodeJS

微信接受到信息，然后通过在控制台调用ajax转送信息到NodeJS的服务器，服务器记录微信的聊天信息，对方就算把信息撤回了，服务器还是存在你的聊天信息

http模块负责创建服务器接收前端的ajax发过来的聊天纪录

fs模块负责写入聊天信息记录

利用DOM获取最新聊天记录
```js
var messages = $(".js_message_plain");
var news = messages.eq(messages.length-1).text();
```

把信息利用ajax发送给nodejs
```js
$.ajax({
    url:`http://localhost:12345/?message=${news}`,
    success(data){
        console.log(data)
    }
})
```

```js

```
不断监听，判断信息的长度，如果长度变大，那就是有信息传入
```js
var origin = 0;
var messages = 0;
var news = '';
setInterval(()=>{

    messages = $(".js_message_plain");
    if(messages.length>origin){
        news = messages.eq(messages.length-1).text();
        $.ajax({
            url:`http://localhost:12345/?message=${news}`,
            success(data){
                console.log(data);
            }
        })
        origin = messages.length;
    }else{
        console.log("没获取到新消息");
    }
},1000)
```

服务器接收信息
```js
var {
    createServer
} = require('http');
// req对应是前端给我的后端
// req我后端给前端的
createServer((req, res) => {
    console.log(decodeURI(req.url.split('=')[1]));

    // 控制响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('name', 'yao');
    // 控制响应体
    res.write(`记录信息成功`)
    res.end();
}).listen(12345);
console.log('启动服务器');
```
并且写入本地文档
```js
var {
    createServer
} = require('http');
var {
    appendFile
} = require('fs');

var appendMessage = (url, data) => {
    return new Promise((resolve, reject) => {
        appendFile(url, `${data}<br/>`, (err) => {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve();
                console.log('数据已追加到文件');
            };
        });
    })
}
// req对应是前端给我的后端
// req我后端给前端的
createServer(async (req, res) => {
    let message = decodeURI(req.url.split('=')[1]);
    console.log(decodeURI(req.url.split('=')[1]));
    // 写入文档
    await appendMessage('./messages.html', message);
    // appendFile('messages.txt', message, (err) => {
    //     if (err) throw err;
    //     console.log('数据已追加到文件');
    // });
    // 控制响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('name', 'yao');
    // 控制响应体
    res.write(`记录信息成功`)
    res.end();
}).listen(12345);
console.log('启动服务器');
```