const keepOrder = (ary, val) => {
    ary.push(val)
    ary.sort((a,b) => a-b)
    return ary.indexOf(val)
}

console.log(keepOrder([1, 2, 3, 4, 7], 5))
console.log(keepOrder([1, 2, 3, 4, 7], 0))
console.log(keepOrder([1, 1, 2, 2, 2], 2))
console.log(keepOrder([1, 2, 3, 4], 5))
