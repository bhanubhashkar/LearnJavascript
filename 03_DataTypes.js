
//#####----- JavaScript DataTypes -----------------------------------------------------------------------------------------------------------#####

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
let this_null = null;           // This is null
let this_undef = undefined;     // This is undefined
let this_sym = Symbol("sym");        // This is symbol
let this_obj = {Values: "Bhanu", address: "Kolkata"};   // This is object
console.log("Completed declearation and initialization of the variables.");

//Logging value of difeferent data types in table
console.log("### Logging the variables in table.");
console.table([this_num, this_int, this_str, this_bool, this_null, this_undef, this_sym, this_obj])

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
console.log("Complete logging the typeof value of variables.");

