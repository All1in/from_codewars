function arraySubset(source, subset) {
    if(source.length  < subset.length) {
        return false
    }

    for (let i = 0; i < subset.length; i++) {
        // console.log('subset[i]', subset[i])
        // console.log('7 lef: ', source.indexOf(subset[i]))
        const index = source.indexOf(subset[i])

        if(index === -1) {
            return false
        }
        // console.log('source[index]', source[index])
        delete source[index]
    }

    return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false