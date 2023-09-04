 const accountId = 101;
let accountEmail = "ashu@123gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur"

let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId, accountPassword, accountCity, accountState]);