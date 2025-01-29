const books=[
    {name:'book1',price:110},
    {name:'book2',price:120},
    {name:'book3',price:130},
    {name:'book4',price:140},
    {name:'book5',price:150}
]

const expensiveBooks=books.filter((bk) => bk.price>125);
console.log(expensiveBooks);
//filter is used to filter out the elements from the array based on the condition provided in the callback function.


const Books=books.map((bk) => bk.price+100).map((bk) => bk+10);
console.log(Books);
//map is used to transform the elements of the array based on the callback function provided.
/*Here, we are adding 100 to the price of each book and then adding 10 to the result of the previous operation.
this is called chaining of map functions.*/




const myarr=[1,2,3,4];
const sum=myarr.reduce((acc,curr) => acc+curr,0);
console.log(sum);
//reduce is used to reduce the array to a single value based on the callback function provided.

const shoppingCart=[
    {name:'book1',price:110},
    {name:'book2',price:120},
    {name:'book3',price:130},
    {name:'book4',price:140},
    {name:'book5',price:150}
]
const cost = shoppingCart.reduce((acc,current) => acc+current.price,0);
console.log(cost);