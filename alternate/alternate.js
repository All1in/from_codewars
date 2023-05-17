function alternate(n, firstValue, secondValue) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;
}


console.log(alternate(5, true, false))
console.log(alternate(20, 'blue', 'red'))
console.log(alternate(0, "lemons", "apples"))
