
//#####----- JavaScript Memory -----------------------------------------------------------------------------------------------------------#####

// Two types of Memory
// Stack    -   Primitive       -   It gives a copy of the value, all vales will be changed in that copy not in actual.
// Heap     -   Non Primitive   -   It gives reference of original value, so any changes in any instance will change in the actual value.


// Stacck flow
let myName ="Bhanu Bhashkar";   // Actual Value
let nickNmae = myName;          // Creates a copy 
myName = "Tuttu";               // Changes in actual value, no change in copy

console.log(myName);
console.log(nickNmae);

// Heap Flow
let userOne ={
    name:"BhanuBhashkar",
};                              // Actual Value
let userTwo = userOne;          // Refer to actual value
userOne.name = "Tuttu";         // Change in Actual value, as both variable are refering to same reference so change in actual value

console.log(userOne);
console.log(userTwo);

