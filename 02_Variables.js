
//Variable Declaration
const userName = "Bhanu Bhashkar";
let userPass = "Password@01";
var userEmail = "bhanu@email.com";
userCity = "City";

//Looging value in console
console.log(userName);
console.log(userPass);
console.log(userEmail);
console.log(userCity);

//Changing the values
// userName = "Shashank Shekhar"; //TypeError: Assignment to constant variable.
userPass = "NewPassword@09";
userEmail = "Bhashkar@email.com";
userCity = "New City";

//Logging after value change in console
console.log(userName);
console.log(userPass);
console.log(userEmail);
console.log(userCity);

//Log multiple variables in one go
console.table([userName, userEmail, userPass, userCity]);
