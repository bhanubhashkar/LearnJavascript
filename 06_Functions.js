// #####------------------------------------------------------------------------------------------------------#####
// #####----- Functions --------------------------------------------------------------------------------------#####

/*
A function is a reusable block of code designed to perform a particular task. Functions can take inputs, process them, and return a result.
Its defined once and can run (or “call”) whenever same task needs to be done in program.

*/

// Simple Function
function welcomeUser(){
    console.log("welcomeUser function executed.");
    return(`Hey welcome.`);
}

let welcome = welcomeUser();
console.log(welcome);


// Function with argument
function greetUser(user,msg){
    console.log("greetUser function executed.");
    return(`Hey ${user}, Good ${msg}...`);
}

let greet = greetUser("Bhanu","Morning");
console.log(greet);

// Function with function in return
function userLog(log){
    function user(){
        return(`User : ${log}`)
    }
    return user();
}

let log = userLog("logged in");
console.log(log);

// Arrow Function 
const newGreetUser = (user,msg) => {
    console.log("newGreetUser function executed.");
    return(`Hey ${user}, Good ${msg}...`);
}

let newGreet = newGreetUser("Bhashkar","Evening");
console.log(newGreet);

// Single line Arrow Function 
const newWelcome = (user) => `Welcome ${user}.`

let msg = newWelcome("Bhanu")
console.log(msg);

// #####------------------------------------------------------------------------------------------------------#####