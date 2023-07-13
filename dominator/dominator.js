function dominator(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const count = map.get(arr[i]) || 0;

        map.set(arr[i], count + 1);

        if (count + 1 > arr.length / 2) {
            return arr[i];
        }
    }

    return -1;
}

console.log(dominator([3,4,3,2,3,1,3,3]))
console.log(dominator([1,2,3,4,5]))
console.log(dominator([1,1,1,2,2,2]))
console.log(dominator([1,1,1,2,2,2,2]))
