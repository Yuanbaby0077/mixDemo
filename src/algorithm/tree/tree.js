const TreeTable = function() {
  let root = null
  const Node = function(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  const insertNode = (node, newNode) => {
    // 新节点小于父节点
    if (newNode.value <= node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = function(value) {
    const newNode = new Node(value)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  const findMinNode = function(node) {
    if (node === null) return null
    while(node && node.left) {
      node = node.left
    }
    return node
  }

  const removeTree = function(node, value) {
    if (node === null) return null
    if (value < node.value) {
      node.left = removeTree(node.left, value) // 待删节点在节点的左侧
      console.log('left', node)
      return node
    } else if (value > node.value) {
      node.right = removeTree(node.right, value) // 待删节点在节点的右侧
      console.log('right', node)
      return node
    } else {
      console.log('出栈顺序')
      if (node.left === null && node.right === null) {
        console.log(node.value + '叶子节点')
        node = null
        return node
      }

      if (node.right && node.left == null) {
        return node.right
      }

      if (node.left && node.right == null) {
        return node.left
      }
      // 查找右子树最小节点
      const minNode = findMinNode(root.right)
      node.value = minNode.value
      node.right = removeTree(node.right, minNode.value)
      return node      
    }
  }

  this.remove = function(value) {
    root = removeTree(root, value)
  }
  this.search = function(value) {

  }

  const treeTraversal = function(node, cb) {
    if (node === null) return
    
    treeTraversal(node.left, cb)
    
    treeTraversal(node.right, cb)
    cb(node.value)
  }

  this.traversal = function() {
    treeTraversal(root, (value) => {
      console.log(value)
    })
  }

  this.getRoot = function() {
    return root
  }

  const min = function(node) {
    if (node === null) return
    let minVal = node.value
    while(node && node.left) {
      minVal = node.left.value
      node = node.left
    }
    return minVal
  }

  this.getMin = function() {
    return min(root)
  }

  const max = function(node) {
    if (node === null) return
    let maxVal = node.value
    while(node && node.right) {
      maxVal = node.right.value
      node = node.right
    }
    return maxVal
  }
  this.getMax = function() {
    return max(root)
  }
}

const treeTable = new TreeTable()

treeTable.insert(8)
treeTable.insert(2)
treeTable.insert(3)
treeTable.insert(11)
treeTable.insert(9)
treeTable.insert(10)
treeTable.remove(8)
