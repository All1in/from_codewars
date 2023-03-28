const uniTotal = (string) => string.split('').reduce((acc, val) => acc + val.charCodeAt(), 0)

console.log(uniTotal(''))
console.log(uniTotal('a'))
console.log(uniTotal('b'))
console.log(uniTotal('Mary Had A Little Lamb'))
