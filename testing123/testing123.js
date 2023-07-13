let number = function(array){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(`${i + 1}: ${array[i]}`)
    }
    return newArr
}

console.log(number([]))
console.log(number(["a", "b", "c"]))
