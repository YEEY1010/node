// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000);
//     }, 1000);
// }, 1000);

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
        }, 1000)
    })
}

var step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)
        }, 1000)
    })
}

step()
    .then(step2)
    .then(step3)