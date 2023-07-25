function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);
   
    return (Number.isInteger(result)) ? result : null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
console.log(firstNonConsecutive([1,2,3,4]))