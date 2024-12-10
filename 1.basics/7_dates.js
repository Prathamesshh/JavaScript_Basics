// Date is an Object in Javascript

/*
let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
*/

 let mycreatedate = new Date(2023, 0, 25)
// console.log(mycreatedate.toLocaleDateString());

let myTimeStamp = Date.now()

/*
console.log(myTimeStamp);
console.log(mycreatedate.getTime());
*/
let myDate = new Date()
console.log(myDate.getMonth()+1);

myDate.toLocaleDateString('default' ,{
    calendar :"2024",
    weekday :"long"
})