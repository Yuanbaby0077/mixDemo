const http2 = require('http')

const server2 = http2.createServer((req, res) => {
  console.log(res)
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.write('<p>1</p>')
  res.write('<p>2</p>')
  res.write('<p>3</p>')
  res.write('<p>4</p>')
  res.write('<p>5</p>')
  console.log('reload')
  res.end() // 必须有end 否则浏览器一直处于请求状态
})

server2.listen(3001)