const binarySearch = function(v, arr) {
  let begin = 0
  let end = arr.length
  // end - begin 即范围内元素的数量
  while(begin < end) {
    // 防止溢出
    let mid = (end + begin) >> 1
    console.log(mid)
    if (v > arr[mid]) {
      begin = mid + 1
    } else if (v < arr[mid]) {
      end = mid
    } else {
      return mid
    }
  }
  console.log('没有找到对应的元素')
  return -1
}

console.log(binarySearch(54, [11,22,42,54,54,89,90,101,111,112]))

process.env.npm_config_env = 'ci'
console.log(process.env)