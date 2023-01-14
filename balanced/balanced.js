function isBalanced(string) {
    const start = '{[('
    const end = '}])'

    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    }

    const queue = []

    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if(start.includes(char)) {
            queue.push(char)
        } else if(end.includes(char)) {
           const last = queue.pop()
           if(map[char] !== last) {
                return false
           }
        }
    }

    return !queue.length
}

console.log(isBalanced('(x + y) - (4)'))
console.log(isBalanced('(((10 ) ()) ((?)(:)))'))
console.log(isBalanced('[{()}]'))
console.log(isBalanced('(50)('))
console.log(isBalanced('[{]}'))