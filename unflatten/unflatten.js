const unflatten = arr => {
    let newarr = [];
    while (arr.length) {
      newarr.push(arr[0] < 3 ? arr.shift() : arr.splice(0, arr[0]));
    }
    return newarr;
};

console.log(unflatten([ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ]));