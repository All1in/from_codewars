function charToAscii(string) {
    if (string === '') return null

    let map = {}
    for (let c of string) {
        if (c >= "A" && c <= "Z" || c >= "a" && c <= "z") {
            map[c] = c.charCodeAt(0)
        }
    }

    return map
}

console.log(charToAscii(''))
console.log(charToAscii('a'))
console.log(charToAscii('aaa'))
console.log(charToAscii('hello world'))
