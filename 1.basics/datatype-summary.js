/* Javascript is a dynamically typed language ,This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.
*/

// Primitive

// 7 types : String , BitInt , Number , Boolen , Undefined , Null , Symbol ,

// Reference(non-primitive)
// Arrays , Objects , Functions 

const heros =["shaktiman","doga"]

let obj ={
    name : "pk",
    age : 20,
}

const myfunction = function(){
    console.log("Welcome");
    
}
myfunction()

console.log(typeof heros);
