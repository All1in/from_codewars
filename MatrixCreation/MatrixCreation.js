const getMatrix = number => {
    const matrix = []
    for (let i = 0; i < number; i++) {
        matrix[i] = Array(number).fill(0)
        matrix[i][i] = 1;
    }
    return matrix
}

console.log(getMatrix(1))
console.log(getMatrix(2))
console.log(getMatrix(5))
