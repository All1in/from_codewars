function position(letter){
    const map = new Map()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < alphabet.length; i++) {
        map.set(alphabet[i], i + 1)
    }

    return `Position of alphabet: ${map.get(letter)}`
}

console.log(position('a'))
console.log(position('z'))
console.log(position('e'))
