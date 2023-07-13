function oddOrEven(array) {
    if(!array.length) return 'even'
    return array.reduce((acc, val) => acc + val, 0) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))

