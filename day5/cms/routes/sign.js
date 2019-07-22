var express = require('express');
var router = express.Router();
var {
    find
} = require('../libs/db');
var {
    createToken,
    decodeToken,
    checkToken
} = require('../libs/token');
/* GET users listing. */
router.post('/login', async function (req, res, next) {
    let data = await find('students', {})
    // res.send(JSON.stringify(data));
    res.json(data);
});

router.post('/token', async function (req, res, next) {
    console.log(req.cookies)
    let {
        username,
        password,
    } = req.body;
    // 先去数据库查询是否存在该用户，如果有就发牌
    let token = createToken({
        username
    }, 300)
    res.json({
        status: 'success',
        token
    })
});

router.post('/checkToken', async function (req, res, next) {
    console.log(req.cookies)
    let {
        token
    } = req.cookies;
    console.log(token);
    let detail = decodeToken(token)
    res.json({
        detail
    })
});

module.exports = router;