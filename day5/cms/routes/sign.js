var express = require('express');
var router = express.Router();
var {
    find
} = require('../libs/db')
/* GET users listing. */
router.post('/login', async function (req, res, next) {
    let data = await find('students', {
        
    })
    // res.send(JSON.stringify(data));
    res.json(data);
});

module.exports = router;