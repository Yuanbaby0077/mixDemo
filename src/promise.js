// new Promise((resolve, reject) => {
//   resolve('1')
// })
// .then(res => {
//   console.log(res)
// })
// .then(() => {
//   console.log('resolve')
// })
// .then(() => {
//   console.log('2')
// })


// new Promise((resolve, reject) => {
//   console.log('init')
//   resolve('1')
// })
// .then(res => {
//   throw new Error('error')
//   console.log(res)
// })
// .catch(() => {
//   console.log('catch')
// })
// .then(() => {
//   console.log('2')
// })


const timeout = (delay) => new Promise(resolve => {
  setTimeout(resolve, delay)
})

timeout(2000)
  .then(res=> {
    console.log(res, '111111')
  })

const interval = ()