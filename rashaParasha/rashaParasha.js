function countBy(x, n) {
    let rashaParasha = [];
    let mult = x * n

    for (let i = 1; i <= n; i++) {
        rashaParasha.push(x * i)             
    }

    return rashaParasha;
}

console.log(countBy(1,10));
console.log(countBy(2,5));