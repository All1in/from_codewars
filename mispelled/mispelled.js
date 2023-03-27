const mispelled = (w1, w2) => {
    let count = 0

    if(Math.abs(w1.length - w2.length) === 1)
        return w1.includes(w2) || w2.includes(w1)

    for(let i = 0; i < w1.length; i++) {
        if(w1[i] !== w2[i]) count++
    }

    return count <= 1
}


console.log(mispelled('versed', 'xersed'))
console.log(mispelled('versed', 'applb'))

console.log(mispelled('versed', 'v5rsed'))
console.log(mispelled('1versed', 'versed'))
console.log(mispelled('versed', 'versed1'))

console.log(mispelled('versed', 'aversed'))
console.log(mispelled('aaversed', 'versed'))
console.log(mispelled('versed', 'aaversed'))

