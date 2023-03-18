function bandNameGenerator(str) {
    const spl = str.split('')
    let newStr = ''

    if(spl[0] === str[str.length - 1]) {
       spl.shift()
       return newStr = str.charAt(0).toUpperCase() + str.slice(1) + spl.join('')
    } else {
       return 'The ' + str.charAt(0).toUpperCase() + str.slice(1)
    }
}

console.log(bandNameGenerator('knife'))
console.log(bandNameGenerator('tart'))
console.log(bandNameGenerator('sandles'))
console.log(bandNameGenerator('bed'))
