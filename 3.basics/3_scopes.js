if(true) {
    const username = "John";
    if(username === "John") {
        const website = " www.john.com";
        console.log(username + website);
    }

    // console.log(website);
    // this line will not get execute as website is a block scoped variable and cannot be accessed outside the block.
}

// console.log(username); // ReferenceError: username is not defined
// this line will not get execute as username is a block scoped variable and cannot be accessed outside the block.