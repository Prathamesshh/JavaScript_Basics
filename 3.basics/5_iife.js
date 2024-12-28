// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created.


(function sayHello() {
  console.log('Hello');
}) ()
// here 1st paranthesis is for function and 2nd paranthesis is for calling the function.

// why IIFE is used? => IIFE is used to avoid polluting the global scope.

/*
example 2
( (name)=>{
    console.log('Hello ' + name);
})('John');
*/