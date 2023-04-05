const  initials = n => {
    let finalInitials = '';

    let splitedStr = n.split(' ');
    console.log('splitedStr: ', splitedStr);

    let lastCh = '';

    for (let j = 0; j < splitedStr.length; j++) {
        if (j === splitedStr.length - 1) {
            lastCh = splitedStr[j].slice(1);
        }
    }

    for (let i = 0; i < splitedStr.length; i++) {
        let firstCh = splitedStr[i].slice(0,1).toUpperCase();
        finalInitials += firstCh;
        console.log('finalInitials: ', finalInitials);
    }

    return finalInitials.split('').join('.') + lastCh;
}

console.log(initials('code wars'))
console.log(initials('Barack hussain obama'))
console.log(initials('barack hussain Obama'))

