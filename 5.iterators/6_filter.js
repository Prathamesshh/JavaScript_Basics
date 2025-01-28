const books=[
    {name:'book1',price:110},
    {name:'book2',price:120},
    {name:'book3',price:130},
    {name:'book4',price:140},
    {name:'book5',price:150}
]

const expensiveBooks=books.filter((bk) => bk.price>125);
console.log(expensiveBooks);