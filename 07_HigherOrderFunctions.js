// #####------------------------------------------------------------------------------------------------------#####
// #####----- Higher Order Functions -------------------------------------------------------------------------#####

/*
Higher-Order Functions or First-Class Functions are functions that can accept other functions as arguments, return functions, or both. 
They enable abstraction and flexibility in code, allowing to create reusable and modular functions for complex operations, making them essential in functional programming.

In oter words First-Class Functuins are treated like any variable and can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

*/

// Function taking function as argument
function user(msg){
    return(`user ${msg}`)
}

function processUser(userFun){
    let msg = userFun("Hi User,")
    return msg;
}

let msg = processUser(user)
console.log(msg);

// Function returning a function as result
function createUser(){
    return function(userName){
        return (`User created with username : ${userName}`)
    }
}

let userMsg = createUser();
let finalMsg = userMsg('BhanuBhashkar')
console.log(finalMsg);





// #####------------------------------------------------------------------------------------------------------#####