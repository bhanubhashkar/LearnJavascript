
//#####----- JavaScript Operation -----------------------------------------------------------------------------------------------------------#####

// Whatever data type comes first in an operation all will be considered as that data type only.
// Like str + str + num => First is str so all will be treated as str.
// Like num + num + str => First is num so all will be treared as num.

// Addition
// Substraction
// Mupltiplication
// Power
// Division
// Remainder


console.log("### Operations on Number :");
let num1 = 5;
let num2 = 3;

console.log("Value of Number 1 : ",num1);
console.log("Value of Number 2 : ",num2);
console.log("Add        : ",num1+num2);
console.log("Subtract   : ",num1-num2);
console.log("Multiply   : ",num1*num2);
console.log("Power      : ",num1**num2);
console.log("Divide     : ",num1/num2);
console.log("Remainder  : ",num1%num2);


console.log("### Operations on String :");
let str1 = "Bhanu";
let str2 = "Bhashkar";
let num = 12345;

console.log("Value of String 1 : ",str1);
console.log("Value of String 2 : ",str2);
console.log("Add        : ",str1+str2);
console.log("Add        : ",str1+num);
console.log("Subtract   : ",str1-str2);
console.log("Multiply   : ",str1*str2);
console.log("Power      : ",str1**str2);
console.log("Divide     : ",str1/str2);
console.log("Remainder  : ",str1%str2);


console.log("### Operations on Multiple Data Types :");

let str3 = "Bhanu";
let str4 = "Bhashkar";
let num3 = 100;
let num4 = 100

console.log("Adding str str num num : ",str3+str4+num3+num4);
console.log("Adding num num str str : ",num3+num4+str3+str4);

console.log("### Boolean coversion; Not recommended.");

let bool1 = true;
let bool2 = true;
let bool3 = false;
let bool4 = false;

console.log("Initial value              : ",bool1);
console.log("Initial value              : ",bool2);
// Converted into Number
console.log("Increament in true         : ",+bool1); 
console.log("Decreamnet in true         : ",-bool2); 

console.log("Initial value              : ",bool3);
console.log("Initial value              : ",bool4);
// Converted into Number
console.log("Increament in true         : ",+bool3); 
console.log("Decreamnet in true         : ",-bool4); 


console.log("### Increament & Decrement Operator.");

let score1 = 100;
let score2 = 100;

console.log("Initial value          : ",score1);
// Pre increament
console.log("Increament then print  : ",++score1);
console.log("Post                   : ", score1);

console.log("Initial value          : ",score2);
// Post increament
console.log("Print then Increament  : ",score2++);
console.log("Post                   : ", score2);










