const HashTable = function() {
  let items = []

  const transformKeyToHash = function(key, base = 37) {
    let res = 0
    for (let i = 0; i < key.length; i++) {
      res += key[i].charCodeAt()
    }
    return res % base
  }

  this.put = (key, value) => {
    const pos = transformKeyToHash(key)
    items[pos] = value
    return items
  }
}

const hashTable = new HashTable()
hashTable.put('0110', 'kkk')
hashTable.put('0111', 'zzz')
hashTable.put('1000', 'kkccck')
hashTable.put('0100', 'eeee')