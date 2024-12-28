/*
const chai = function() {
  let username = "John";
  console.log(this.username);
};

chai(); 
*/

/*
const chai = () => {
    let username = "John";
    console.log(this.username);
  };
  
  chai(); 

*/

const add = (num1,num2) =>{
return num1 + num2;
}

console.log(add(2,3)); // 5

/*
2nd method 
const add = (num1,num2) => num1 + num2;
*/

// IF we dont use curly braces then we dont need to use return keyword as well.