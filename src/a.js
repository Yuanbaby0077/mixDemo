import './promise'
console.log('hello world')

const a = (a, b) => a + b

console.log(a(5,3))

setTimeout(() => {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  resolve()
  console.log('promise')
}).then(value => console.log('then', value))

console.log('vip')
let i = 0
const interval = (delay = 1000, callback) => {
  return new Promise((resolve) => {
    let id = setInterval(() => {
      i++
      console.log(i, new Date())
      callback(id, resolve)
    }, delay)
  })
}
interval(2000, (id, resolve) => {
  if (i > 10) {
    clearInterval(id)
  }
  resolve(id)
}).then(res=> {
  console.log('kkkkk', res)
})
console.log('ending')