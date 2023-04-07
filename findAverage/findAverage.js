const findAverage = nums => nums.reduce((acc, val) => acc + val) / nums.length

console.log(findAverage([1]))
console.log(findAverage([1, 3, 5, 7]))
