// var request = require('./node_modules/request');
const request = require('request');
const fs = require('fs');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
// 请求一个路径，把数据请求到node端显示
// response响应头
// body    响应体
request('http://www.umei.cc/p/gaoqing/cn/', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // fs.writeFile('./index.html', body, (err, data) => {
    //     if (err) throw err;
    //     console.log("写入成功");
    // })

    const {
        window
    } = new JSDOM(body);
    const $ = require("jquery")(window);
    $('img').each((index, ele) => {
        let src = $(ele).attr('src')
        console.log(src)
        request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./imgs/${index}.png`))
        // if (src.indexOf('/') == 0) {
        //     console.log(src);
        //     request('http:' + $(ele).attr('src')).pipe(fs.createWriteStream(`./imgs/${index}.png`))
        // } else {
        //     console.log(src);
        //     request($(ele).attr('src')).pipe(fs.createWriteStream(`./imgs/${index}.png`))
        // }
    })
    // console.log($('img'));
});