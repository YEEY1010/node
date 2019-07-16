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