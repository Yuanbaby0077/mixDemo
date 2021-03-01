function countSort(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  const count = []
  const countLen = max + 1
  for (let j = 0; j < countLen; j++) {
    count[j] = 0
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1
    console.log(arr[i], count)
  }


  let index = 0
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      while(count[i]--) {
        arr[index ++] = i
      }
    }
  }
  return arr
}

console.log(countSort([4,5,2,2,3,4,5,6,3,1]))

function countSortOpt(arr) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  const count = []
  const countLen = max - min + 1
  for (let j = 0; j < countLen; j++) {
    count[j] = 0
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min] ++
  }

  // 累计count 
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  // 有序处理
  const newArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[--count[arr[i] - min]] = arr[i]
  }
  
  arr = newArray
  return arr
}

console.log(countSortOpt([7, 3,5,8,6,7,4,5]))