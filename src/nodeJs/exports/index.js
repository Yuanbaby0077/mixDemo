var circular = require('./circular');
var rectangle = require('./rectangle');
var a1 = circular.area(3);
var a2 = rectangle.area(5, 6);
console.log(a1, a2);
var p = require('./people');
var res = new p('zs', 18).sayHello();
console.log(res);
