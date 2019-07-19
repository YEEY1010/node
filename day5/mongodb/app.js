const MongoClient = require('mongodb').MongoClient;
// 踊跃测试
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';
// Use connect method to connect to the server
MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, client) {
    if (err !== null) throw err;
    assert.equal(null, err);
    console.log("Connected successfully to server");
    // 选中需要连接的库
    const db = client.db(dbName);
    // 选中表
    const collection = db.collection('students');
    // Find some documents
    collection.find({
        name: 'yao'
    }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
    });
    // 关闭连接
    client.close();
});