var express = require('express');
var fs = require('fs');
// 解析请求体的模块
var bodyParser = require('body-parser');
var app = express();
// 该app对象调用其他模块来去处理请求和响应
// app.use全局使用
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use((req, res, next) => {
    // 全局添加
    res.append('Access-Control-Allow-Origin', '*');
    next();
})
app.get('/login', (req, res) => {
    res.send('hello world');
})



app.get('/list', async (req, res) => {
    let data = await new Promise((resolve, reject) => {
        fs.readFile('./list.json', (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
    res.send(data);
})



app.post('/login', (req, res) => {
    // 原生写法，是基于http事件驱动
    // let body = '';
    // req.on('data', (chunk) => {
    //     body += chunk;
    // })
    // req.on('end', () => {
    //     console.log(body);
    // })
    // CORS
    res.append('Access-Control-Allow-Origin', '*');
    // 前端给后端 request
    console.log(req.body);
    let {
        username,
        password
    } = req.body;
    if (username === 'yao' && password === '123') {
        res.send('登陆成功');
    } else {
        res.send('登陆失败');
    }

})
app.listen(9999);
console.log('启动服务器');