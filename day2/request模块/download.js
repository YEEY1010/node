const request = require('request');
const fs = require('fs');

request('http://i1.whymtj.com/uploads/tu/201901/10002/0002/caodq91_看图王.jpg').pipe(fs.createWriteStream(`./imgs/2.png`))