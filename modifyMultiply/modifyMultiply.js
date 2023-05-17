function modifyMultiply (str, loc, num) {
    const halfOf = str.split(' ')
    let newStr = ''
    for (let i = 0; i < num; i++) {
        newStr += `${halfOf[loc]}-`
    }
    const spl = newStr.split('')
    const removed = spl.pop('')
    return spl.join('')
}

console.log(modifyMultiply("This is a string",3 ,5))
console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1))

