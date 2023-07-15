// function warnTheSheep(queue) {
//     const newQueue = queue.reverse()
//     console.log('newQueue', newQueue);
//     for (let index = 0; index < newQueue.length; index++) {
//         if(queue[0] === 'wolf') {
//            return "Pls go away and stop eating my sheep"
//         } else if(queue[index - 1] === 'wolf') {
//             return `Oi! Sheep number ${index - 1}! You are about to be eaten by a wolf`
//         } 
//     }
// }

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    console.log('position', position);
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));