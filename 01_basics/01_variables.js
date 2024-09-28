const accountId = 144553        // not changeable , something should not change
let accountEmail = "nosuch@mail.com"    // changeable
var accountPassword = "1235456"
accountCity = "Jaipur"      // not a good pracitce
let accountState;           // undefined

// accountId = 2        // not allowed to change a const variable
accountEmail = "adf@f.com"
accountPassword = "65465465"
accountCity = "Gaya"

console.log(accountId);

console.table([accountState, accountId, accountPassword, accountCity])


/*
Prefer not to use var
becuasee of issue in block scope and functional scope
*/