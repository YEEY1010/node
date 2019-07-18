function getData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "",
            'success'(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

getData().then(getData).then(getData)

(async () => {
    let data = await getData()
    await getData()
    await getData()
})()

(async () => {
    let data = await new Promise((resolve, reject) => {
        $.ajax({
            url: "",
            'success'(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })()
    await getData()
    await getData()
})()


new Promise((resolve, reject) => {
    $.ajax({
        url: "",
        'success'(data) {
            resolve(data)
        },
        error(err) {
            reject(err)
        }
    })
}).then((data) => {

}).catch((err) => {

});


var data = {
    name: 'yao'
}

const fn = (params) => {
    return params
}

fn({
    name
} = data)

console.log()