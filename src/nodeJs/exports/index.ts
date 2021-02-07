const circular = require('./circular')
const rectangle = require('./rectangle')
const a1 = circular.area(3)
const a2 = rectangle.area(5, 6)
console.log(a1, a2)

const p = require('./people')
const res = new p('zs', 18).sayHello()
console.log(res)