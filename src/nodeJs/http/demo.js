const http = require('http')

const server = http.createServer((req, res) => {
  console.log(res)
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end("111") // 只输出第一行
  res.end('你好世界2，hello world')
  res.end('你好世界3，hello world')
  res.end('你好世界4，hello world')
  res.end('你好世界5，hello world')
})

server.listen(3001)