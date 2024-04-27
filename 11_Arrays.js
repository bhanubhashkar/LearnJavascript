
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

const heroMarvel = ["Thor","Hulk","Loki","Wanda"];
const heroDc = ["Batman","Supenman","Flash"];

// const allHero = heroMarvel + heroDc;         // Add two array, but nor recommended as it merges the strings of two array.
// console.log(allHero); 

// heroMarvel.push(heroDc);                     // Push new array as new element to existing array, its not merging
// console.log(heroMarvel);

// const allHero = heroMarvel.concat(heroDc);   // Concatinate two array in one array.
// console.log(allHero);

const allHero = [...heroMarvel, ...heroDc]      // Spread multiple array in one array.
console.log(allHero);

const mixedArray = ['Bhanu', 98765, ['City','District'], ['Pin',['Home','Work',[998877,665544]]]];

console.log(mixedArray);

const claerArray = mixedArray.flat(3);          // Convert existing multi array elemensts in a single array as per given depth

console.log(claerArray);

console.log(Array.isArray(claerArray));         // Gives boolean result after chceking the passing element is array or not .

let = myName = "Bhanu Bhashkar";
let = myId = 98765;
let = myPhone = 8877665544;
console.log(myArr);

console.log(Array.from(myName));                //  Convert to an array, all passing element to an array.

console.log(myArr);

console.log(Array.of(myName,myId,myPhone));     //  Returns an array, all passing element to an array.




