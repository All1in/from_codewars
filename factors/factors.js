const factors = (n) => {
    if (n <= 0 || typeof n !== 'number' || n % 1 !== 0) return -1
    const factors = [];
    for (let i = n; i > 0; i--) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

console.log(factors(54))
console.log(factors(9))