
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


// New Section - Object 
console.log("New Section - Object");

// const newUser = new Object();     // Way of defining singleton objects

newUser = {}                        // Way of defining non-singleton objects
console.log(newUser);   

newUser.id = "ID-12-AZ";
newUser.name = "Bhanu Bhashkar";
console.log(newUser); 

// Nested Objects
otherUser = {
    userId : "ID-23-UT",
    email : "otheruser@mail.com",
    name : {
        fullName : {
            firstName : "Bhanu",
            lastName : "Bhashkar"
        },
        nickName: "Tuttu"
    }
}
console.log(otherUser); 

// Accessing nested object values
console.log(otherUser["name"]);
console.log(otherUser["name"]["fullName"]);
console.log(otherUser.name.fullName.firstName);


// Combining two objects
heroObj = {
    hero1 : "Thor",
    hero2 : "Hulk"
}
villianObj ={
    vill1 : "Thanos",
    vill2 : "Joker"
}

// const combinedObj = {heroObj,villianObj};                    // This will create a new object which consists of 2 objects

// all the object under paranthesis will be added in the fisrt object so, giving an empty object, it will work without that also
const combinedObj1 = Object.assign({},heroObj,villianObj);      // It will return a new object afer combining all objects
console.log(combinedObj1);

// Widely used
const combinedObj2 = {...heroObj,...villianObj};                // It will return a new object afer spreading all objects into a new object
console.log(combinedObj2);
