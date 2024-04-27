
//#####----- JavaScript Numbers  -------------------------------------------------------------------------------------------------------#####

const myArr = ["I","am",1,"Defined","Array"]    // Defining an Array

console.log(myArr);                         // Logging whole array.

console.log(myArr[3]);                      // Logging valur of 3rd position (0,1,2,3). Array count start from 0.

console.log(myArr.push("AddedLast"));       // Adding a new element at end of array, gives array total length as output
console.log(myArr);

console.log(myArr.pop());                   // Removing last element of array, gives removed element as output 
console.log(myArr);

console.log(myArr.unshift("AddedStart"));   // Ading a new element at start of array, gives array total length as output 
console.log(myArr);

console.log(myArr.shift());                 // Removing an element at start of array, gives array total length as output 
console.log(myArr);

console.log(myArr.includes(1));             // Checking an element if its there in array or not, gives true/false as output 
console.log(myArr);

console.log(myArr.indexOf(1));              // Checking an element index in array, gives index number as output
console.log(myArr);

const newArr = myArr.join();                // Copy the array as a comma seperated string to a new varible  
console.log(myArr);
console.log(newArr);

console.log("Slice and Splice");
console.log(myArr);

const arr1 = myArr.slice(0,3);              // Slice the array part and save the elements as copy, no change in original array
console.log(arr1);
console.log(myArr);

const arr2 = myArr.splice(0,3);             // Splice the array part and save the original elements, spliced elements removed from original array
console.log(arr2);
console.log(myArr);