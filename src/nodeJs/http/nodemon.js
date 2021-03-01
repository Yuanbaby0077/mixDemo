// import sanitizeHtml from 'sanitize-html'
const sanitizeHtml = require('sanitize-html')
console.log('1')
console.log('1')
const res = sanitizeHtml("<div>2333</div><img src=x onerror=alert('img') />", {
  allowedTags: ['div', 'img'],
  allowedClasses: false,
  allowedAttributes: false
})
console.log(res)
// console.log(sanitizeHtml("console.log('hello world')"));
// console.log(sanitizeHtml("<script>alert('hello world')</script>"));
