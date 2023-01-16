function groupBy(array, fn) {
    const result = {}

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        const key = typeof fn === "function" ? fn(current) : current[fn]

        if(!result[key]) result[key] = []

        result[key].push(current)
    }

    return result
}

function anotherOne(array, fn) {
    return array.reduce((res, current) => {
        const key = typeof fn === 'function' ? fn(current) : current[fn]

        if (!res[key]) {
            res[key] = []
        }
        res[key].push(current)

        return res
    }, {})
}


console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(groupBy(['one', 'two', 'three'], 'length'))
console.log("-------")
console.log(anotherOne([6.1, 4.2, 6.3], Math.floor))
console.log(anotherOne(['one', 'two', 'three'], 'length'))
