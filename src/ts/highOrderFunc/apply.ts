const max = Math.max(1,3,4,3,46,6)
const min = Math.min(1,3,4,3,46,6)
console.log([min, max])

const arr = [1,3,4,3,46,6]
const iMax = Math.max.apply(null, arr)
const iMin = Math.min.call(null, 1,3,4,3,46,6)
console.log(iMin, iMax)