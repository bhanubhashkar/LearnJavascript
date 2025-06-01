
//#####----- JavaScript Conversion -----------------------------------------------------------------------------------------------------------#####
// To Number        -> Use 'Number()' method
// To String        -> Use 'String()' method
// To Boolean       -> Use 'Boolean()' method

// Convert to Number 
// String "33"      -> Converted to Number = 33         (Number Type)
// String "33aB"    -> Converted to Number = NaN        (Number Type)
// boolean true     -> Converted to Number = 1          (Number Type)
// boolean false    -> Converted to Number = 0          (Number Type)

// Convert to String 
// Number 33        -> Converted to String = "33"       (String Type)
// boolean true     -> Converted to String = "true"     (String Type)
// boolean false    -> Converted to String = "false"    (String Type)

// Convert to Boolean 
// Number 1         -> Converted to Boolean = true      (Boolean Type)
// Number 0         -> Converted to Boolean = false     (Boolean Type)
// Number NaN       -> Converted to Boolean = false     (Boolean Type)
// String "33"      -> Converted to Boolean = true      (Boolean Type)
// String "Bhanu"   -> Converted to Boolean = true      (Boolean Type)
// String ""        -> Converted to Boolean = false     (Boolean Type)



//Declaration initialization of difeferent data types
console.log("### Declearing and initializing the variables...");
let new_num = 1234567;
let new_flo = 123.456
let new_str1 = "123.456";
let new_str2 = "IamString";
let new_bool = true;
let new_null = null;
let new_undef = undefined;
let new_blank;

console.log("Completed declearation and initialization of the variables.");

console.log("### Logging default data types of the variables...");
console.log(new_num, typeof(new_num));          //Default number
console.log(new_flo, typeof(new_flo));          //Default number
console.log(new_str1, typeof(new_str1));        //Default string
console.log(new_str2, typeof(new_str2));        //Default string
console.log(new_bool, typeof(new_bool));        //Default boolean
console.log(new_null, typeof(new_null));        //Default null object
console.log(new_undef, typeof(new_undef));      //Default undefined
console.log(new_blank, typeof(new_blank));      //Default undefined

console.log("### Forced Conversion to Number.");

console.log("From Numeric String to Number :");
//Forced Conversion of Number String to Number, Return Number
console.log("Initially :", typeof(new_str1),  new_str1);
let op_num1 = Number(new_str1);
console.log("Converted to :", typeof(op_num1), op_num1);

console.log("From Alphabetic String to Number :");
//Forced Conversion of Alphabet String to Number, Return NaN (Data Loss)
console.log("Initially :", typeof(new_str2),  new_str2);
let op_num2 = Number(new_str2);
console.log("Converted to :", typeof(op_num2), op_num2);

console.log("From Boolean to Number :");
//Forced Conversion of Boolean to Number, Return Number : 1
console.log("Initially :", typeof(new_bool),  new_bool);
let op_num3 = Number(new_bool);
console.log("Converted to :", typeof(op_num3), op_num3);

console.log("From null to Number :");
//Forced Conversion of Alphabet String to Null, Return Number : 0
console.log("Initially :", typeof(new_null),  new_null);
let op_num4 = Number(new_null);
console.log("Converted to :", typeof(op_num4), op_num4);

console.log("From undefined to Number :");
//Forced Conversion of Alphabet String to Null, Return NaN
console.log("Initially :", typeof(new_undef),  new_undef);
let op_num5 = Number(new_undef);
console.log("Converted to :", typeof(op_num5), op_num5);


console.log("### Forced Conversion to String.");

console.log("From Number to String :");
//Forced Conversion of Number to String , Return String
console.log("Initially :", typeof(new_num),  new_num);
let op_str1 = String(new_num);
console.log("Converted to :", typeof(op_str1), op_str1);

console.log("From Float to String :");
//Forced Conversion of Float to String, Return NaN (Data Loss)
console.log("Initially :", typeof(new_flo),  new_flo);
let op_str2 = String(new_flo);
console.log("Converted to :", typeof(op_str2), op_str2);

console.log("From Boolean to String :");
//Forced Conversion of Boolean to String, Return Number : 1
console.log("Initially :", typeof(new_bool),  new_bool);
let op_str3 = String(new_bool);
console.log("Converted to :", typeof(op_str3), op_str3);

console.log("From null to String :");
//Forced Conversion of Alphabet String to Null, Return Number : 0
console.log("Initially :", typeof(new_null),  new_null);
let op_str4 = String(new_null);
console.log("Converted to :", typeof(op_str4), op_str4);

console.log("From undefined to String :");
//Forced Conversion of undefined to String, Return NaN (Data Loss)
console.log("Initially :", typeof(new_undef),  new_undef);
let op_str5 = String(new_undef);
console.log("Converted to :", typeof(op_str5), op_str5);


console.log("### Forced Conversion to Boolean.");

console.log("From Number to Boolean :");
//Forced Conversion of Number to Boolean , Return Boolean
console.log("Initially :", typeof(new_num),  new_num);
let op_bool1 = Boolean(new_bool);
console.log("Converted to :", typeof(op_bool1), op_bool1);

console.log("From Float to Boolean :");
//Forced Conversion of Float to Boolean, Return Boolean
console.log("Initially :", typeof(new_flo),  new_flo);
let op_bool2 = Boolean(new_flo);
console.log("Converted to :", typeof(op_bool2), op_bool2);

console.log("From String to Boolean :");
//Forced Conversion of Number to Boolean , Return Boolean
console.log("Initially :", typeof(new_str2),  new_str2);
let op_bool3 = Boolean(new_str2);
console.log("Converted to :", typeof(op_bool3), op_bool3);

console.log("From Blank to Boolean :");
//Forced Conversion of Float to Boolean, Return Boolean
console.log("Initially :", typeof(new_blank),  new_blank);
let op_bool4 = Boolean(new_blank);
console.log("Converted to :", typeof(op_bool4), op_bool4);








//#####-------------------------------------------------------------------------------------------------------#####