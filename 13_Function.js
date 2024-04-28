
//#####----- JavaScript Functions  -------------------------------------------------------------------------------------------------------#####


// Function Declaration
function myName(){
    console.log("Bhanu Bhashkar");
}

// Function Call
myName();

// Function with parameter
function addNum(num1,num2){
    let sum = num1+num2;
    console.log(sum);
    return sum;
}

// Calling function with arguments
addNum(5,5);

let ans = addNum(10,10);
console.log(ans);

// Passing default value in function parameter arguments
function greetUser(user="Sam"){
    let msg = `Hi, ${user}`;
    return msg;
}
console.log(greetUser())
console.log(greetUser("Bhanu"));

// Passing multiple parameter in a function
function cartPrice(...price){
    let total = price;
    return total;
}
console.log(cartPrice(100,200,300));

// Passing Object in a function
function objHandler(anyObj){
    let objName = anyObj.name;
    return objName;
}

user = {
    name : "Bhanu",
    role : "Engineer"
}
// Passing already existing object
console.log(objHandler(user));      

// Passing object on the go directly while function call
console.log(objHandler({
    name : "Bhashkar",
    role : "Engineer"
}));

let newArr = [100,"Bhanu"]

// Passing Array in a function
function arrHandler(anyArr){
    let getArr = anyArr;
    return getArr;          // Return whole array
    // return getArr[1];          // Return specified alement of array
}
// Passing already existing array
console.log(arrHandler(newArr)); 

// Passing array on the go directly while function call
console.log(arrHandler([200,"Bhashkar"]));
