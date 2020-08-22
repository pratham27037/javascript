const path = require('path');

var pathobj = path.parse(__filename);

console.log(pathobj);

const os = require('os');

var k = os.totalmem();
var j = os.freemem();

console.log(k);
console.log(j);