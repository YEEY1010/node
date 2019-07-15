// 引入第一个原生模块
var fs = require('fs');
// 导出很多同步和异步方法
// console.log(fs);
console.log(1)
// 异步读取文件
// 异步不阻塞我们的程序
// fs.readFile('../text.txt', {
//     encoding: 'utf8',
//     flag: 'r'
// }, (err, data) => {
//     console.log(data)
// })
// 同步读
var data = fs.readFileSync('../text.txt', {
    encoding: 'utf8',
    flag: 'r'
})
// console.log(data)

console.log(data)