const {
    MongoClient,
    ObjectId
} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                reject(err);
                throw err;
            } else {
                // 得到连接端
                resolve(client);
            };

        });
    })
}
// 查找
const find = (col, params) => {
    return new Promise(async (resolve, reject) => {
        // 连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(params).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }

        });
        // 关闭连接
        client.close();
    })
}

module.exports = {
    connect,
    find,
    // 根据id查找
    ObjectId
}