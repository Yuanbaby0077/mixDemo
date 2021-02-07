// 从小到大排序
const bubbleSort = function(arr) {
  let temp = null
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
const optimizeBubbleSort = function(arr) {
  let temp = null
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i)
    let isSorted = true
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSorted = false
      }
    }
    // 完全有序才能触发，有可能没用
    if (isSorted) {
      console.log(isSorted)
      return arr
    }
  }
  return arr
}

// 优化
const optimizeBubbleSort2 = function(arr) {
  let temp = null
  let end = arr.length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true
    let sortIdx = arr.length - 1
    for(let j = 0; j < end; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        sortIdx = j
        isSorted = false
      }
    }
    end = sortIdx
    if (isSorted) break
  }                                         
  return arr
}
const bubbleRes = optimizeBubbleSort2([4,9,7,6,3,11,23,12])
console.log(bubbleRes)