// 原生模块
const {
    writeFile
} = require('fs')

writeFile('../text.txt', 'hello world1213', (err, data) => {
    if (err) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
})