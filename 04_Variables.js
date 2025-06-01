
//#####----- JavaScript Variables ----------------------------------------------------------------------------#####

//Const   -   Once initialised cant be changed during program execution/run time.
//Let     -   Globally used, Value can be changed during runtime. Solved block and functional scope issue. 
//Var     -   Not preferred, Scope issue, changed all values of that variable in all blokcks and functions.

//Variable Declaration
console.log("### Declearing and initializing the variables...");
const userName = "Bhanu Bhashkar";
let userPass = "Password@01";
var userEmail = "bhanu@email.com";
userCity = "City";
console.log("Completed declearation and initialization of the variables.");

//Looging the original value in console
console.log("### Logging the original value in console :");
console.log(userName);
console.log(userPass);
console.log(userEmail);
console.log(userCity);

//Log multiple variables in one go
console.log("### Logging the original value in console as table :");
console.table([userName, userEmail, userPass, userCity]);

//Changing the values
console.log("### Changing the values...");
//userName = "Shashank Shekhar"; //TypeError: Assignment to constant variable.
userPass = "NewPassword@09";
userEmail = "bhashkar@email.com";
userCity = "New City";
console.log("Value changed.");

//Logging after value change in console
console.log("### Logging the changed value in console :");
console.log(userName);
console.log(userPass);
console.log(userEmail);
console.log(userCity);

//Log multiple variables in one go
console.log("### Logging the changed value in console as table :");
console.table([userName, userEmail, userPass, userCity]);





//#####-------------------------------------------------------------------------------------------------------#####