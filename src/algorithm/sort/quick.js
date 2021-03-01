const quickSort = function(arr, begin, end) {
  if (end - begin < 2) return
  const pivotIndex = getPivotIndex(arr, begin, end)
  quickSort(arr, begin, pivotIndex)
  // 右侧区间从上一个轴点元素位置 + 1开始
  quickSort(arr, pivotIndex + 1, end)
  return arr
}

const getPivotIndex = function(arr, begin, end) {
  const temp = arr[begin]
  end--
  while(begin < end) {
    while(begin < end) {
      if (arr[end] <= temp) {
        arr[begin] = arr[end]
        begin++
        break
      } else {
        end--
      }
    }
    while(begin < end) {
      if (arr[begin] >= temp) {
        arr[end] = arr[begin]
        end--
        break
      } else {
        begin++
      }
    }
  }
  arr[begin] = temp
  return begin
}

// 单边循环
const quickSort2 = function(arr, begin, end) {
  if (end - begin < 2) return
  const pivotIndex = getPivotIndex2(arr, begin, end)
  quickSort(arr, begin, pivotIndex)
  // 右侧区间从上一个轴点元素位置 + 1开始
  quickSort(arr, pivotIndex + 1, end)
  return arr
}

getPivotIndex2 = function(arr, begin, end) {
  let mark = begin
  let pivot = arr[begin]
  for(let i = begin + 1; i < end; i++) {
    if (arr[i] < pivot) {
      mark ++
      const temp = arr[i]
      arr[i] = arr[mark]
      arr[mark] = temp
    }
  }
  arr[begin] = arr[mark]
  arr[mark] = pivot
  return mark
}
const arr = [1,3,9,11,4,7,6,5,3,2,8,1]
console.log(quickSort2(arr, 0, arr.length))