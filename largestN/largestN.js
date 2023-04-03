const largest = (n, array) => array.sort((a,b) => b - a).slice(0, n).reverse();

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]))
