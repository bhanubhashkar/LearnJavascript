
//#####----- JavaScript Numbers  -------------------------------------------------------------------------------------------------------#####

// Singleton -> can be created using constructor
// Object.create -> constructor method

// Object Literals

const mySymbol = Symbol("Key")      // Symbol

// Declarating Objet
const userObj = {
    name : "Bhanu Bhashkar",
    email : "bhanu@mail.com",
    role : "Engineer",
    contact : 9988776655,
    address : ["Newtown","Kolkata","WB"],
    active : true,
    [mySymbol] : "MyKey",           // Declaring Symbol in Object
    greet : function(){
        console.log("Hi...");
    }
};

// Accessing Object
console.log(userObj);

// traditional method
console.log(userObj.name);

// New way to access
console.log(userObj["email"]);
console.log(userObj["role"]);
console.log(userObj["contact"]);
console.log(userObj["address"]);
console.log(userObj["active"]);

console.log(userObj[mySymbol]);     // Accessing Symbol

console.log(userObj.greet);         // Accessing Function
console.log(userObj.greet());       // Executing Function

// Adding function to existing Object
userObj.greetUser = function(){
    console.log(`Hi, ${this.name}`);
}
console.log(userObj.greetUser());   // Executing Function

// Change Object values
userObj["email"] = "bhashkar@mail.com";
console.log(userObj);

// Freezing the Object
Object.freeze(userObj);

// Change Object values after freeze, it will not change
userObj["email"] = "bhanubhashkar@mail.com";
console.log(userObj);


