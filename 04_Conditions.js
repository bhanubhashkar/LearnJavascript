// #####------------------------------------------------------------------------------------------------------#####
// #####----- Conditions -------------------------------------------------------------------------------------#####

/*
JavaScript conditional statements allow you to execute specific blocks of code based on conditions. 
If the condition is met, a particular block of code will run; otherwise, another block of code will execute based on the condition.

There are different types of Conditional Statements:
1. if Statement - Executes a block of code if a specified condition is true.
2. if else Statement - Executes a block of code if the same condition of the preceding if statement is false.
3. else if Statement - Adds more conditions to the if statement, allowing for multiple alternative conditions to be tested.
4. Nested if…else - Allows for multiple conditions to be checked in a hierarchical manner.
5. Switch Case Statement - Evaluates an expression, then executes the case statement that matches the expression’s value.
6. Ternary Operator ( ?: ) - Provides a concise way to write if-else statements in a single line.
*/

// if statement
let num1 = 20;

if (num1 % 2 === 0) {
    console.log("Even");
}

// if else Statement
let age = 25;
if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Not an Adult")
};

// else if Statement
const x = 0;
if (x > 0) {
    console.log("Positive");
} else if (x < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
};

// Nested if…else 
let weather = "sunny";
let temperature = 25;
if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};

// Switch Case Statement
const marks = 85;
let division;
switch (true) {
    case marks >= 80:
        division = "Distinction";
        break;
    case marks >= 60:
        division = "First";
        break;
    case marks >= 45:
        division = "Second";
        break;
    case marks >= 30:
        division = "Third";
        break;
    default:
        division = "Fail";
        break;
}
console.log(`Student is ${division}.`);

// Ternary Operator
let myAge = 21;
const result = (myAge >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(result);





// #####------------------------------------------------------------------------------------------------------#####