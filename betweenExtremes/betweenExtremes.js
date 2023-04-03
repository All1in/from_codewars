const betweenExtremes = numbers => {
    let num = numbers.sort((a,b) => a - b)
    return num[num.length-1]-num[0]
}

// const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);


console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))
console.log(betweenExtremes([-1, -41, -77, -100]))
