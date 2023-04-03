

const updateLight = current => {
    const states = ['green', 'yellow', 'red'];
    let nextStateIndex = (states.indexOf(current) + 1) % states.length;
    console.log('nextStateIndex', nextStateIndex)
    return states[nextStateIndex];
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))
