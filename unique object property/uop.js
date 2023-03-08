let products = [
    {
        title: 'Iphone 8',
        company: "Apple"
    },
    {
        title: 'Galaxy',
        company: 'Samsung'
    },
    {
        title: 'Iphone 7',
        company: 'Apple'
    },
    {
        title: 'Iphone XS',
        company: 'Apple'
    },
    {
        title: 'HTC phone',
        company: 'htc'
    }
]

const getUnique = arr => {
    let tempArr = arr.map(item => item.company)
    return [...new Set(tempArr)]
    // return [...arr.reduce((acc, curr) => {
    //     acc.add(curr.company);
    //     return acc
    // }, new Set()
    //     )
    // ]
}


console.log(getUnique(products))
