var express = require('express');
const app = express();
// 异步
app.get('/home', (req, res) => res.send('home'));
app.post('/setting', (req, res) => {
    // CORS解决跨域的方法
    res.append('Access-Control-Allow-Origin', '*')
    res.send(
        JSON.stringify(['a', 'b', 'c'])
    )
});
app.put('/mine', (req, res) => res.send('mine')) // 监听一个端口
app.listen(12345);
console.log('启动服务器');