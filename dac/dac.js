const divCon = x => {
    const arrayStrings = []
    const arrayNumbers = []

    for(let i = 0; i < x.length; i++) {
        if(typeof x[i] === 'string') {
            arrayStrings.push(x[i])
        } else {
            arrayNumbers.push(x[i])
        }
    }

    const newNumbers = arrayStrings.map((el) => Number(el))

    const numbersSum = arrayNumbers.reduce((acc, num) => acc + num)

    const stringsSum = newNumbers.reduce((acc, num) => acc + num)

    return Math.abs(numbersSum - stringsSum)
}


console.log(divCon([9, 3, '7', '3']))
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
