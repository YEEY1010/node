var express = require('express');
var router = express.Router();
var {
    find
} = require('../libs/db');

router.get('/find', function (req, res, next) {
    // 在数据库查找数据并响应到前端
    find('students', null, (results) => {
        console.log(results);
        res.send(JSON.stringify(results));
    });
    // console.log('results', results)
    // 再找views里面index.jade
    // 接收到前端发来的请求，我需要查找数据库

});

module.exports = router;