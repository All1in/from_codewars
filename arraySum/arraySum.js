const arraySum = arr => {
    let tempArr = arr.sort((a, b) => {
        return a - b
    })

    // const firstIndex = tempArr[0]
    // let lastIndex = tempArr[tempArr.length - 1]
    let lastIndex = tempArr.pop()
    let number = 0

    tempArr.forEach(item => number += item)

    return lastIndex === number
}


console.log(arraySum([1, 2, 4, 6, 13]))
console.log(arraySum([1, 2, 4, 34, 22]))
