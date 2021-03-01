const selectionSort = function(arr) {
  let temp = null
  let end = arr.length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = 0
    for(let j = 1; j <= end; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j
      }
    }
    temp = arr[maxIndex]
    arr[maxIndex] = arr[end]
    arr[end] = temp
    end --
    console.log(arr)
  }
  return arr
}

selectionSort([4,9,7,6,3,11,23,12])
