// #####------------------------------------------------------------------------------------------------------#####
// #####----- JavaScript DataTypes ---------------------------------------------------------------------------#####


// ### Primitive and Non-Primitive

//Type	    typeof return value	    Object wrapper
//Number    "number"	            Number
//BigInt    "bigint"	            BigInt
//String    "string"	            String
//Boolean   "boolean"	            Boolean
//Null	    "object"	            N/A
//Undefined "undefined"	            N/A
//Symbol    "symbol"	            Symbol
//Object    "object"                Object

//Declaration initialization of difeferent data types
console.log("### Declearing and initializing the variables...");
let this_num = 42;              // This is a number
let this_int = BigInt(55);      // This is a bigint
let this_str = "I am a String"; // This is a string
let this_bool = true;           // This is a boolean
let this_null = null;           // This is null, its just empty nothing in there. (temp)
let this_undef = undefined;     // This is undefined, now dont have a definition but in future maybe.
let this_sym = Symbol("sym");        // This is symbol, 
let this_obj = {name: "Bhanu", address: "Kolkata"};   // This is object
let this_object = ["Cricket", "Baseball", "Hockey"]       // This is object
console.log("Completed declearation and initialization of the variables.");

//Logging value of difeferent data types in table
console.log("### Logging the variables in table.");
console.table([this_num, this_int, this_str, this_bool, this_null, this_undef, this_sym, this_obj, this_object])

//Logging typeof values of difeferent variables
console.log("### Logging the typeof value of variables...");
console.log(typeof(this_num));
console.log(typeof(this_int));
console.log(typeof(this_str));
console.log(typeof(this_bool));
console.log(typeof(this_null));
console.log(typeof(this_undef));
console.log(typeof(this_sym));
console.log(typeof(this_obj));
console.log(typeof(this_object));
console.log("Complete logging the typeof value of variables.");


//#####----- JavaScript DataTypes Summary ----------------------------------------------------------------------------------------------------#####

// Primitive
// String
// Number
// Boolean
// Null
// undefined
// symbol
// Big Int

let str ="Bhanu Bhashkar, Thsis is a string.";
let num = 1234567890;
let flo = 123.456789;
let boo = true;
let nul = null;
let und;
let sym = Symbol(123);
let big = 1234567891256789123456789n;

console.log("Type is : ", typeof(str),"Value : ",str);
console.log("Type is : ", typeof(num),"Value : ",num);

console.log("Type is : ", typeof(flo),"Value : ",flo);
console.log("Type is : ", typeof(boo),"Value : ",boo);

console.log("Type is : ", typeof(nul),"Value : ",nul);
console.log("Type is : ", typeof(und),"Value : ",und);

console.log("Type is : ", typeof(sym),"Value : ",sym);
console.log("Type is : ", typeof(big),"Value : ",big);


// Non Primitive/Reference Type
// All Non Primitive Data Types is called function.
// Function data type is called Object Function.
// Array
// Object
// Functions

const arr = ["This","is","an","Array,","We","are","the","elements." ];

const obj = {
    Name:"Bhanu Bhashkar",
    Role:"Engineer",
    Company:"TCS",
    Mobile:9534112233,
    ODC:["Ecospave","3H"],
    Available : true
}

const fun = function(){
    console.log("This log is from function.");
}

