
//#####----- JavaScript Scopes  -------------------------------------------------------------------------------------------------------#####

let num1 = 100;
const num2 = 200;
var num3 = 300;
num4 = 400;

// Log all values 
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

function numbers(){

    let num1 = 111;
    const num2 = 222;
    var num3 = 333;
    num4 = 444;

    // Log all values inside function after redeclraing changing the value
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    // all variables under this scope should not have to acceesed from outside this block, but var is causing issue here
}

console.log(numbers());

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

function user(){
    let userName = "Bhanu";

    function innerUser() {
        let innerUser ="Bhashkar";

        console.log(userName);
        console.log(innerUser);
    }
    innerUser();
}

// console.log(userName);       // can not be accessed after the user function scope.
user();



console.log(addOne(3));         // Direct declared function can be used even before declaration

function addOne(num){
    return(num+1);
}


// Function declared in a variable cannot be used before declaration
const addTwo = function(num){
    return(num+2);
}

console.log(addTwo(4));

