
//#####----- JavaScript Comparision -----------------------------------------------------------------------------------------------------------#####

// Returns True or False Boolean Value

// >    Greater Than
// >=   Greater Than Equals to
// <    Less Than
// <=   Less Than Equals to
// ==   Equals to
// !=   Not Equals to
// ===  Strict Check (Same Data Type)

console.log("### Coparision :");
let num1 = 5;
let num2 = 3;
let num3 = 3;
let str1 = "5";
let str2 = "5";

console.log("Value of Number 1 : ",num1);
console.log("Value of Number 2 : ",num2);
console.log("Value of Number 3 : ",num3);

// Only Numbers
console.log("Greater Than           : ",num1>num2);
console.log("Greater Than Equals to : ",num1>=num3);
console.log("Less Than              : ",num1<num2);
console.log("Less Than Equals to    : ",num3<=num2);
console.log("Equals to              : ",num1==num2);
console.log("Not Equals to 1        : ",num3!=num2);
console.log("Not Equals to 2        : ",num1!=num2);

// Charaters & Numbers
console.log("Double Equals to char num     : ",num1==str1);
console.log("Double Equals to char char    : ",str1===str2);
console.log("Triple Equals to char num     : ",num1===str1);
console.log("Triple Equals to char char    : ",str1===str2);

// null & undefined
console.log("Greater Than           : ",null>0);
console.log("Less Than              : ",null<0);
console.log("Equals to              : ",null==0);

console.log("Greater Than           : ",undefined>0);
console.log("Less Than              : ",undefined<0);
console.log("Equals to              : ",undefined==0);


