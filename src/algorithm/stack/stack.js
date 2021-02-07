function Stack() {
  this.items = []
  items = []
  this.push = (node) => {
    items.push(node)
  }

  this.pop = () => {
    items.pop()
  }

  this.clear = () => {
    items.length = 0
  }

  this.isEmpty = () => {
    return !items.length
  }

  this.getSize = () => {
    return items.length
  }

  // 检查栈顶
  this.peek = () => {
    return items[items.length ? items.length -1 : 0]
  }

  this.getItems = () => {
    return items
  }

  this.reverse = (n) => {
    const res = []
    while(items.length) {
      res.push(items.pop())
    }
    items = res
  }
}

const transform10To2 = (n) => {
  var stack = new Stack()
  let remain = 0
  while(n > 0) {
    remain = n % 2
    stack.push(remain) 
    n = Math.floor(n / 2)
  }
  const items = stack.getItems()
  let str = ''
  while(items.length) {
    str += items.pop()
  }
  return str
}