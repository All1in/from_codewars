const squareOrSquareRoot = array => array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : Math.pow(e,2) )

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]))
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]))

