function dropWhile(arr, pred) {
    const idx = arr.findIndex(elem => !pred(elem));
    return idx < 0 ? [] : arr.slice(idx);
}

console.log(dropWhile([], isEven))