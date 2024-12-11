const tinderuser = new Object()  // singleton object
const tinderuser1 ={}         // not a singleton object

//  console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname : { 
        firstname : "yash",
        lastname: "kurekar"
        
    }
}
//  console.log(regularUser.fullname);


const obj1 = { 1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//  const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);


console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));

