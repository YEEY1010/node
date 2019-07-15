function plus(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

// 导出建议写在代码最后一行
// 先把函数导出
// 导出一个函数
// module.exports = plus
// 导出一个对象，建议导出对象，面向对象编程
module.exports = { plus, sub }
// 导出一个数组
// module.exports = [plus]