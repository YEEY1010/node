# mongodb

在js比较流行，[官网下载地址](https://www.mongodb.com/download-center/community)

安装

<img src="1.png">

进入mongodb的安装目录的bin文件夹，里面有mongodb的命令

> D:\Program Files\MongoDB\Server\4.0\bin

你可以在这里打开cmd

```bash
mongo --version
```

<img src="2.png">

你可以在环境变量里面设置这个变量

<img src="3.png">

进去选高级->环境变量->系统变量->Path->新建您的mongo bin路径

# 可视化工具

[Robo 3T](https://studio3t.com/download-thank-you/?OS=win64)

# 新建数据库

所以在bin文件夹下找到mongod.exe命令，然后通过管理员执行`mongod --dbpath x`路径x，路径可以是任何地方，我这里选择在D盘的MongoDB目录下，当然路径不要包含特殊的字符串，比如Program Files (x86)也不行

```
mongod --dbpath D:\mongodb\data\db\database
```

这句命令用于创建数据库，并且打开端口27017，然后

> http://localhost:27017

<img src="4.png">

用compress的可视化界面，连接

<img src="5.png">

mongodb是有库的概念，也有集合的概念，集合相当于mysql中的表

先设计表结构，设计name字段，数据类型

但是在mongodb里面，集合是不需要设计，它可以用任意的类似json结构表示，数据结构是可以混合的，不一定按照唯一的数据结构

<img src="6.png">

# node 连接 mongodb


[mongodb的官网](https://www.npmjs.com/package/mongodb)

安装mongodb模块
```bash
npm install mongodb --save
```

实现最基本的CRUD增删改查操作

新建一份app.js
```js
const MongoClient = require('mongodb').MongoClient;
// 踊跃测试
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'test';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if(err!==null) throw err;
  assert.equal(null, err);
  console.log("Connected successfully to server");
  // 选中需要连接的库
  const db = client.db(dbName);
  // 选中表
  const collection = db.collection('students');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
  });
  // 关闭连接
  client.close();
});
```
运行代码
```bash
node app.js
```

# 断言的测试模块 assert


[assert](https://nodejs.org/dist/latest-v10.x/docs/api/assert.html)是node的原生模块，用于代码测试

判断1是否完全等于2，如果错误的话，抛出错误
```js
var assert = require('assert');
// 如果这里判断有问题，会在这里中断
assert.strictEqual(1, 1);
```


