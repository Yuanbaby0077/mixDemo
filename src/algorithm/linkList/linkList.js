const LinkList = function() {
  let length = 0
  let head = null

  const Node = function(ele, next) {
    this.element = ele
    this.next = null
  }

  this.append = (ele) => {
    const node = new Node(ele)
    if (!head) {
      head = node
    } else {
      let curNode = head
      while(curNode.next) {
        curNode = curNode.next
      }
      curNode.next = node
    }
    length ++
  }


  this.insert = (pos, ele) => {
    if (pos > -1 || pos > length - 1) {
      new Error('出错了')
    }
    const insertedNode = new Node(ele)
    if (pos === 0) {
      const curHead = head
      head = insertedNode
      head.next = curHead
    } else {
      let index = 0
      let previous = null
      let curNode = head
      while(index < pos) {
        previous = curNode
        curNode = curNode.next
        index ++
      }
      previous.next = insertedNode
      insertedNode.next = curNode
    }
    length ++
  }

  this.getHead = () => {
    return head
  }

  this.update = (pos, ele) => {
    const uNode = new Node(ele)
    let index = 0
    let cn = head
    while(index < pos) {
      cn = cn.next
      index ++
    }
    cn.element = uNode.element
  }

  this.remove = (ele) => {
    return this.removeAt(this.indexOf(ele))
  }

  this.removeAt = (pos) => {
    if (pos < 0 || pos > length - 1) {
      throw Error('index out of range')
    }
    let currentNode = head
    if (pos === 0) {
      head = currentNode.next
    } else {
      let index = 0
      let previous = null
      while(index < pos) {
        previous = currentNode
        currentNode = currentNode.next
        index ++
      }
      previous.next = currentNode.next
    }
    length --
    return currentNode
  }

  this.indexOf = (ele) => {
    // const cNode = new Node(ele)
    let index = 0
    let currentNode = head
    while(index < length) {
      if (currentNode && currentNode.element == ele) {
        return index
      }
      currentNode = currentNode.next
      index ++
    }
    return index
  }

  this.find = (pos) => {
    let index = 0
    let cn = head
    while(index < pos) {
      cn = cn.next
      index ++
    }
    return cn
  }

  this.size = () => {
    return length
  }
}

var LinkedList = new LinkList()
LinkedList.insert(0, 1)
LinkedList.append(2)
LinkedList.append(3)
LinkedList.insert(2, 4)
LinkedList.insert(0, 5)
LinkedList.getHead()