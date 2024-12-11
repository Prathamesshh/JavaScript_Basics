// object made by constructor is always a singleton.
// Object.create

// object litreals

const js_user = {
    name: "yash",
    age : 20,
    city : "Nagpur",
}

console.log(js_user["name"]);

js_user.greetings = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(js_user.greetings());
