
//#####----- JavaScript Control Flow ----------------------------------------------------------------------------------------------------#####


// Condition
/*
    >   Greater Than
    <   Less Than
    >=  Greater Than Equals to
    <=  Less Than Equals to
    ==  Equals To (value)
    !=  Not Equals to (value)
    === Equals to (Value with Data Type)
    !== Not Equals to (Value with Data Type)
*/

// If Statement, if the condition is true then only the code under IF block will be executed.
if(true){
    console.log("The condition is true under if statement so printing this log.");
}

if(2==2){
    console.log("The condition is true, 2 equals to 2.");
}

if(false){
    console.log("The log is not going to be printed as the condition value in IF is false.");
}

// If Else Statement, Only one block of code will be executed as per condition true/false

let marks = 71;

if(marks > 70){
    console.log("The condition is true, as the value of marks is greater than to 70.");
}else {
    console.log("TThis block code will not executed.");
}

if(marks < 70){
    console.log("This block code will not executed.");
}else {
    console.log("The condition is false, as the value of marks is not less than to 70");
}

// Nested If Else Statement, Only one block of code will be executed as per condition true/false

let userName = "Bhashkar";

if(userName === "Bhanu"){
    console.log("Hi, Bhanu");
}
else if(userName === "Bhashkar"){
    console.log("Hi, Bhashkar"); 
}
else if(userName === "Tuttu"){
    console.log("Hi, Tuttu"); 
}
else{
    console.log("Hi, User"); 
}

// Switch case
// Matches key values with cases and execute the codes for the caes which matches the key.
// Once case is matched all the code below that will be executed including other case mentioned after except default case. 
// The code execution stops as soon any break statement comes in flow, after that exection stops for the whole case block.
// If no case matches then default case will be executed.


var month = 10;

switch (month) {
    case 1:
        console.log("Januray");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Month");
        break;
}

// Truthy Falsy Value

let user = "Bhanu";
let admin ;
let moderator = [];

if(user){
    console.log("This is truthy value, as user variable have something assigned.");
}
else{
    console.log("This is falsy value, as user variable have nothing assigned.");
}

if(admin){
    console.log("This is truthy value, as admin variable have something assigned.");
}
else{
    console.log("This is falsy value, as admin variable have nothing assigned.");
}

if(moderator){
    console.log("This is truthy value, as moderator array have something assigned.");
}
else{
    console.log("This is falsy value, as moderator array have nothing assigned.");
}

/*
##  Truthy Values :
" "         -   Space in quotes/string
"0"         -   Zero in quotes/string
[]          -   Empty Array
{}          -   Empty Object
"false"     -   Anything in quotes/string
function(){}-   Empty Function

##  Falsy Values :
0
-0
""
Nan
null
undefined
BigInt 0n

*/


// Nullish Coalescing Operator (??): null undefined
// Assign the truthy value from multiple inputs.
// If multiple value are used First value will be treated assigned to that variable. 

let newVal = 5 ?? 10;
console.log(newVal);

let newVal1 = null ?? 10;
console.log(newVal1);

let newVal2 = undefined ?? 10 ?? 15;
console.log(newVal2);

let newVal3 = undefined ?? null ?? 15;
console.log(newVal3);


// Logical Operators

/*
&&  -   and -   All condition should be true for execution of the block.
||  -   or	-   Any one condition should be true for execution of the block.
!   -   not -   Change the value to false if true and true if false.
*/

let x = 10;
let y = 10;
let z = 20;

if (x == 10 && y == 10) {
    console.log("X and Y are 10.");
}
else {
    console.log("X and Y are not 10.");
}

if (x == 10 || z == 10) {
    console.log("X or z any one is 10.");
}
else {
    console.log("X or z none are 10.");
}

if (!(x == 10 && y == 10)) {
    console.log("X and Y are 10.");
}
else {
    console.log("X and Y are not 10.");
}

if (z !== 10 && y == 10) {
    console.log("Z is not 10 and Y is 10.");
}
else {
    console.log("False condition.");
}


// Terniary Operator 
// Synatx   -   condition ? true value : false value;
// Ecvaluate inline and execute the code after "?" if true, execute the code after ":" if false.


const checkUser = "Bhanu";
checkUser == "Bhanu" ? console.log("Hi, User") : console.log("Please login.");


