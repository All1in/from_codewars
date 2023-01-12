function isStringRotated(source, test) {
    if(source.length !== test.length) {
        return false
    }

    for (let i = 0; i < source.length; i++) {
        const rotate = source.slice(i, source.length) + source.slice(0, i)

        console.log('source   ', source.slice(i, source.length) )
        console.log('slice', source.slice(0, i))

        if(rotate === test) {
            return true
        }
    }

    return false
}

function another(source, test) {
    console.log(source + source)
    return (source + source).includes(test) && source.length === test.length
}

console.log(isStringRotated("javascript", "scriptjava"))
console.log(isStringRotated("javascript","iptjavasrc"))
console.log(isStringRotated("javascript", "java"))


console.log(another("javascript", "scriptjava"))
console.log(another("javascript","iptjavasrc"))
console.log(another("javascript", "java"))
