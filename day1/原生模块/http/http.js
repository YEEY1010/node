const http = require('http');
const fs = require('fs');
// console.log(http);
http.get('http://www.umei.cc/p/gaoqing/cn/', (res) => {
    res.setEncoding('utf8');
    // 初始化一个空的容器
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        console.log(rawData)
        fs.writeFile('../test.html', rawData, (err, data) => {})
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});