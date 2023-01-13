function highestFrequency(array) {
    const map = {}
    let maxFreq = 0
    let maxFreqStr = array[0]

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if(map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }

        if(map[current]) {
            maxFreq = map[current]
            maxFreqStr = current
        }
    }

    return maxFreqStr
}

console.log(highestFrequency(['a', 'b', 'c', 'd', 'e']))
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc']))
console.log(highestFrequency(['abc', 'def']))

