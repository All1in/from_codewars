function removeDupes(str) {
    const result = []
    const map = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if(!map[char]) {
           map[char] = true
            result.push(char)
        }
    }

    return result.join("")
}

function removeDupes2(str) {
    return Array.from(new Set(str)).join("")
}


console.log(removeDupes("abcd"))
console.log(removeDupes("aabbccdd"))
console.log(removeDupes("abcddbca"))
console.log(removeDupes("abababcdcdcd"))

console.log(removeDupes2("abcd"))
console.log(removeDupes2("aabbccdd"))
console.log(removeDupes2("abcddbca"))
console.log(removeDupes2("abababcdcdcd"))