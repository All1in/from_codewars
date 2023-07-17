function removeDuplication(arr) {
    const map = new Map();
  
    for (let num of arr) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    const result = [];
  
    for (let num of arr) {
      if (map.get(num) === 1) {
        result.push(num);
      }
    }
  
    return result;
  }
  
console.log(removeDuplication([1,2,3,2,4,6,2,6,7]))
console.log(removeDuplication([1,2,1,2,1,1,2,2]))
console.log(removeDuplication([2,5,6,7,5,2,6]))