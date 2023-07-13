let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

function sortArray(a1, a2) {
    return a1.map(word => a2.find(letter => word[0] === letter[0]));
}


console.log(sortArray(a1, a2))
