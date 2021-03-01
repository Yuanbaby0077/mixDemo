const LinkedList = function() {
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

// 链表： 分离链接法
const HashTable2 = function() {
  let table = []

  const Node = function(key, value) {
    this.key = key
    this.value = value
  }

  const transformKeyToHash = function(key, base = 37) {
    let res = 0
    for (let i = 0; i < key.length; i++) {
      res += key[i].charCodeAt()
    }
    return res % base
  }

  this.put = (key, value) => {
    const pos = transformKeyToHash(key)
    if (!table[pos]) {
      const link = new LinkedList()
      table[pos] = link
    }
    table[pos].append(new Node(key, value))
    return table
  }

  this.getValue = (key) => {
    const pos = transformKeyToHash(key)
    if (table[pos]) {
      let cn = table[pos].getHead()
      while(cn) {
        if (cn.element.key === key) {
          return cn.element.value
        }
        cn = cn.next
      }
    }
    return undefined
  }

  this.remove = (key) => {
    const pos = transformKeyToHash(key)
    if (table[pos]) {
      let cn = table[pos].getHead()
      while(cn) {
        if (cn.element.key === key) {
          const rNode = table[pos].remove(cn.element)
          if (!table[pos].getHead()) {
            table[pos] = undefined
          }
          return rNode
        }
        cn = cn.next
      }
    }
    return undefined
  }

  this.getTable = () => {
    return table
  }
}

const hashTable2 = new HashTable2()
hashTable2.put('0110', 'kkk')
hashTable2.put('0111', 'zzz')
hashTable2.put('1000', 'kkccck')
hashTable2.put('0100', 'eeee')