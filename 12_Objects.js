
//#####----- JavaScript Objects  -------------------------------------------------------------------------------------------------------#####

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
    },
    mobile : 8877665544
}
console.log(otherUser); 

// Accessing nested object values
console.log(otherUser["name"]);
console.log(otherUser["name"]["fullName"]);
console.log(otherUser.name.fullName.firstName);


// Segregating all keys of an object
console.log(Object.keys(otherUser));

// Segregating all values of an object
console.log(Object.values(otherUser));

// Segregating all entries of an object
console.log(Object.entries(otherUser));

// Chcek if the object has the given key in there or not, return boolean value
console.log(otherUser.hasOwnProperty("mobile"));
console.log(otherUser.hasOwnProperty("phone"));


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




// Array Object with multiple object inside
bigObj = [
    {
        id : "AA-123",
        name : "Bhanu"
    },
    {
        id : "AB-234",
        name : "Bhashkar"
    },
    {
        id : "AC-345",
        name : "Tuttu"
    }
]

// Accessing the Array object
console.log(bigObj[1].id);          // Object with index and key to access the value


// New Section - JSON Object 
console.log("New Section - JSON Object");

bookObj = {
    bookName : "This is Book Name",
    author : "writer",
    price : 999,
    edition : 1.6
}

console.log(bookObj.bookName);          // Logging bookName with dot operator

const {bookName} = bookObj              // Destructuring the object
console.log(bookName);                  // Logging bookname using object destructured 

const {bookName:book} = bookObj         // Destructuring the object and refering the book name balue to book now
console.log(book);                      // Logging bookname using book destructured object



// Check if object is empty
const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object have some values.");
    
}


// JSON
// const oneJSON = {
//     "name" : "Bhanu Bhashkar",
//     "role" : "engineer",
//     "mobile" : 8877665544
// }

// console.log(oneJSON);