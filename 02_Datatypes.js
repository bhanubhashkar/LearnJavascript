// #####------------------------------------------------------------------------------------------------------#####
// #####----- Datatypes --------------------------------------------------------------------------------------#####

/*
Each value in a JavaScript program is associated with a data type. A data type specifies the type of data Number, String, Boolean, Double, etc. 
Each data type requires different amounts of memory and has some specific operations which can be performed over it. 
The data types in JavaScript can be categorized into two types.
1. Primitive
    Number      :   Numbers are always stored in double-precision 64-bit binary format IEEE 754.
    String      :   Strings are made up of a list of characters, essentially an array of characters.
    Boolean     :   Represents a logical entity and can have two values: true or false.
    Big Int     :   BigInt is a built-in object providing a way to represent whole numbers larger than 253-1.
    Undefined   :   A variable that has not been assigned a value is undefined.
    Null        :   This type has only one value: null.
    Symbol      :   Symbols return unique identifiers that can be used as property keys in objects without colliding with other keys.

2. Non Primitive/ Referemce Type/ Dynamically Typed
    Array       :   An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.
    Object      :   Objects are fundamental data structures used to store collections of data. It consist of key-value pairs and can be created using curly braces {} or the new keyword
    Functions   :   A JavaScript function is a block of code designed to perform a particular task.
    
*All Non Primitive Data Types is called function.
*Function data type is called Object Function.

*/

// Difeferent types of Primitive datatypes examples:
let this_num = 42;              // This is a number
let this_str = "I am a String"; // This is a string
let this_bool = true;           // This is a boolean
let this_int = BigInt(55);      // This is a bigint
let this_big = 12345678901n;    // This is a bigint
let this_undef = undefined;     // This is undefined, now dont have a definition but in future maybe.
let this_null = null;           // This is null, its just empty nothing in there. (temp)
let this_sym = Symbol("sym");   // This is symbol, 

console.log("The datatype of", this_num, "is", typeof(this_num));
console.log("The datatype of", this_str, "is", typeof(this_str));
console.log("The datatype of", this_bool, "is", typeof(this_bool));
console.log("The datatype of", this_int, "is", typeof(this_int));
console.log("The datatype of", this_big, "is", typeof(this_big));
console.log("The datatype of", this_undef, "is", typeof(this_undef));
console.log("The datatype of", this_null, "is", typeof(this_null));
console.log("The datatype of", this_sym, "is", typeof(this_sym));


// Difeferent types of Non-Primitive datatypes examples:
let this_array = ["Cricket", "Baseball", "Hockey"];     // This is object
let this_obj = {name: "Bhanu", address: "Kolkata"};     // This is object
let this_fun = function(){console.log("I am a function.")};
const this_func = function(){
    console.log("This log is from function.");
}

console.log("The datatype of", this_array, "is", typeof(this_array));
console.log("The datatype of", this_obj, "is", typeof(this_obj));
console.log("The datatype of", this_fun, "is", typeof(this_fun));
console.log("The datatype of", this_func, "is", typeof(this_func));

console.log(this_fun());
console.log(this_func());



