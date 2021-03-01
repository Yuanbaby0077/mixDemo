function abs(x) {
  return Math.abs(x)
}

function getTotalSalary(month, salary) {
  return month * salary
}

function add(x, y, fn) {
  return fn(x) + fn(y)
}

var sum = [1, 2, 3, 4, 5].reduce((x, y) => {
  return add(x, y, abs)
}, 10);
console.log(sum)

const platArray = [[1,2], [3,4], [5,6]]
  .reduce((x, y) => {
    return x.concat(y)
  })

console.log(platArray)

const dropRepeatArray = [1, 2, 3, 4, 3, 4, 5, 6, 6, 5, 7]
  .reduce((accumulator, curValue) => {
    if (accumulator.indexOf(curValue) < 0) {
      accumulator.push(curValue)
    }
    return accumulator
  }, [])
console.log(dropRepeatArray)
