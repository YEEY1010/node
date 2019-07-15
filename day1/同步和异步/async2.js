var step = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000)
    })
}

var step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 2000)
    })
}

var step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)
            resolve(55555)
        }, 1000)
    })
}

// step()
//     .then(step2)
//     .then(step3)

(async () => {
    console.log(0)
    // 该异步会被等待
    await step();
    await step2();
    console.log(2.5)
    var num = await step3();
    console.log(4)
    console.log(num)
})()