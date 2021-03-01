// 从小到大排序
const insertSort = function(arr) {
  for (let begin = 1; begin < arr.length; begin ++) {
    for (let j = begin; j >= 0; j--) {
      if (arr[j] > arr[j - 1]) break
      if (arr[j] < arr[j-1]) {
        console.log('insertSort',j)
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
  return arr
}

// 逆序对 9 8 7 6 5 4 3 2 1 时间复杂度越高 o(n^2)
// 顺序对 1 2 3 4 5 6 7 8 9 时间复杂度为o(n)
// 优化
const insertSort2 = function(arr) {
  for (let begin = 1; begin < arr.length; begin ++) {
    let v = arr[begin]
    for (let j = begin; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        arr[j] = arr[j - 1]
      }
    }
    // arr[begin] = v
  }
  return arr
}
// console.log(insertSort([9,8,7,6,5,4,3,2,1]))
console.log(insertSort2([9,8,7,6,5,4,3,2,1]))