const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    const rotated = source[0].map(_ => [])

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
           rotated[j][source.length - 1 - i] = source[i][j]
        }
    }
    
    return rotated
}

function rotate180(source) {
    return rotate(rotate(source))
}

function rotate270(source) {
    return rotate(rotate180(source))
}

function rotate360(source) {
    return rotate(rotate270(source))
}

function print(array) {
    array.forEach(i => console.log(i))
}

print(rotate(matrix))
console.log("-----")
print(rotate180(matrix))
console.log("-----")
print(rotate270(matrix))
console.log("-----")
print(rotate360(matrix))
