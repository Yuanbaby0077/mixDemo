// 线性探查法
const HashTable3 = function() {
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

  const DJBHash = function(key) {
    let hash = 5381
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key[i].charCodeAt()
    }
    return hash % 1013
  }
  
  this.put = (key, value) => {
    const pos = transformKeyToHash(key)
    if (!table[pos]) {
      table[pos] = new Node(key, value)
    } else {
      let startIndex = pos + 1
      while(startIndex < table.length) {
        if (!table[startIndex]) {
          table[startIndex] = new Node(key, value)
          return
        }
        startIndex ++
      }
      table.push(new Node(key, value))
    }
    return table
  }

  this.getValue = (key) => {
    const pos = transformKeyToHash(key)
    if (table[pos]) {
      return table[pos].value
    }
    return undefined
  }

  this.getTable = () => {
    return table
  }
}

const hashTable3 = new HashTable3()
hashTable3.put('0110', 'kkk')
hashTable3.put('0111', 'zzz')
hashTable3.put('1000', 'kkccck')
hashTable3.put('0100', 'eeee')