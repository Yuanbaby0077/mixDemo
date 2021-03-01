
const Queue = function() {
  const items = []
  this.enQueue = (item) => {
    items.push(item)
  }

  this.deQueue = () => {
    return items.shift()
  }

  this.front = () => {
    return items[0]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.size = () => {
    return items.length
  }

  this.getItems = () => {
    return items
  }
}
const Graph = function() {
  const vertices = []
  const edgeMap = {}

  this.addVertex = function(v) {
    vertices.push(v)
    edgeMap[v] = []
  }

  this.addEdge = function(a, b) {
    edgeMap[a].push(b)
    edgeMap[b].push(a)
  }

  this.getVertex = function() {
    return vertices
  }
  this.getEdgeMap = function() {
    return edgeMap
  }

  this.initStatus = function() {
    const res = {}
    for(let i = 0; i < vertices.length; i++) {
      res[vertices[i]] = 0
    }
    return res
  }
  this.bfs = function(v, callback) {
    const initStatus = this.initStatus()
    const quene = new Queue()
    quene.enQueue(v)
    let deEle = null
    while(!quene.isEmpty()) {
      deEle = quene.deQueue()
      const bian = edgeMap[deEle]
      for(let i = 0; i < bian.length; i++) {
        if (initStatus[bian[i]] === 0) {
          quene.enQueue(bian[i])
          initStatus[bian[i]] = 1
        }
      }
      initStatus[v] = 1
      if (callback) {
        callback(deEle)
      }
    }
  }

  this.initDistance = function() {
    const res = {}
    for(let i = 0; i < vertices.length; i++) {
      res[vertices[i]] = 0
    }
    return res
  }

  this.initPrevNode = function() {
    const res = {}
    for(let i = 0; i < vertices.length; i++) {
      res[vertices[i]] = null
    }
    return res
  }

  // 回溯点和点的路径探索
  this.pathBfs = function(v, callback) {
    const d = this.initDistance()
    const prev = this.initPrevNode()
    
    const initStatus = this.initStatus()
    const quene = new Queue()
    quene.enQueue(v)
    let deEle = null
    while(!quene.isEmpty()) {
      deEle = quene.deQueue()
      const bian = edgeMap[deEle]
      for(let i = 0; i < bian.length; i++) {
        if (initStatus[bian[i]] === 0) {
          quene.enQueue(bian[i])
          initStatus[bian[i]] = 1
          d[bian[i]] = d[deEle] + 1
          prev[bian[i]] = deEle
        }
      }
      initStatus[v] = 1
    }
    return {
      d,
      prev
    }
  }

  // 最短路径算法
  // 寻找回溯点
  // 顺序是FBA倒序，可以利用栈的特点来处理顺序
  this.shortestBfs = function(from, to) {
    var v = to
    const pathObj = this.pathBfs('A')
    while(v !== from) {
      console.log(v)
      v = pathObj.prev[v]
    }
    console.log(v)
  }

  // 深度优先算法
  this.dfs = function(v, status, callback) {
    const bian = edgeMap[v]
    status[v] = 1
    for(let i = 0; i < bian.length; i++) {
      if (status[bian[i]] === 0) {
        status[bian[i]] = 1
        this.dfs(bian[i], status, callback)
      }
    }
    if (callback) {
      callback(v)
    }
  }

  this.dfsTraversal = function(v, callback) {
    const status = this.initStatus()
    this.dfs(v, status, callback)
  }
}



const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')

graph.bfs('A', (v) => {
  console.log(v)
})

graph.dfsTraversal('A', (v) => {
  console.log(v)
})