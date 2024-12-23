// #####------------------------------------------------------------------------------------------------------#####
// #####----- Conditions -------------------------------------------------------------------------------------#####

/*
Loops execute a block of code repeatedly as long as a specified condition remains true.

There are different types of Loops:
1. for Loop - It contains initialization, condition, and inc/dec in one line to iterate block statements. 
2. while Loop - It is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.
3. do-while Loop - It checks for the condition after executing the statements, and therefore is an example of an Exit Control Loop.
4. for-in Loop - It is used to iterate over the properties of an object. The for-in loop iterates only on keys of an object which have their enumerable property set to “true”.
5. for-of Loop - used to iterate the iterable objects for example – array, object, set and map. It directly iterate the value of the given iterable object.
6. Labeled Statement - does not include a goto keyword. Can use the continue keyword with label statement. Can use break keyword to terminate the loop/block. 
7. Break Statement - used to terminate the execution of the loop or switch statement when the condition is true.
8. Continue Statement - used to break the iteration of the loop and follow with the next iteration.
9. Infinite Loop (Loop Error) - common mistakes while implementing any sort of loop is that it may not ever exit, i.e. the loop runs for infinite times.
*/

// for loop
let x;
for (x = 1; x <= 5; x++) {
    console.log("Value of x: " + x);
}

// while loop
let val = 1;
while (val < 6) {
    console.log("Value of val: " +val); 
    val += 1;
}

// do while loop
let test = 1;
do {
    console.log("Value of test: " + test);
    test++;
} while(test <= 5)

// for in loop
let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}

// for of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

// Labeled Statement
let sum = 0, a = 1; 
// Label for outer loop 
outerloop: while (true) { 
    a = 1; 
    // Label for inner loop 
    innerloop: while (a < 3) { 
        sum += a; 
        if (sum > 12) { 
            // Break outer loop from inner loop 
            break outerloop; 
        } 
        console.log("sum = " + sum); 
        a++; 
    } 
}


// Break Statement
for (let i = 1; i < 6; i++) {
    if (i == 4) {
        break;
    }
    console.log(i);
}

// Continue Statement
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0){
        continue;
    } 
    console.log(i);
}

// Infinite Loop 
// for (let i = 1; i != 0; i = 1) {
//     console.log(i);
// }

// #####------------------------------------------------------------------------------------------------------#####