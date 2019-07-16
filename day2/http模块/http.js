var {
    createServer
} = require('http');
// req对应是前端给我的后端
// req我后端给前端的
createServer((req, res) => {
    console.log(req.url.split('=')[1]);
    // 控制响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('name', 'yao');
    // 控制响应体
    res.write(`
        <p style="color:red">123</p>
    `)
    res.end();
}).listen(12345);
console.log('启动服务器');