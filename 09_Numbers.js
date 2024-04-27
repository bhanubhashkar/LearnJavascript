
//#####----- JavaScript Numbers  -------------------------------------------------------------------------------------------------------#####

const myBalance = 100;              // JS automatically defines as number.
const newBalance = new Number(123456); // We are exlpicitly defining it as number.
const floatNumb = new Number(123.456)

console.log(myBalance);
console.log(newBalance);


// Number               :   Constructor of Number type data

// toString()           :   Convert Number to string
console.log(newBalance.toString());

// toFixed(int)         :   Add decimal precision to number as per given parameter
console.log(newBalance.toFixed(3));

// toPrecision(int)     :   Give precised value as per given parameter, round off to the given number
console.log(floatNumb.toPrecision(5));

// toLocaleString(region):   Give foramtted comma seperated value
console.log(newBalance.toLocaleString('en-IN'));


//#####----- JavaScript Maths --------------------------------------------------------------------------------------------------------#####

console.log(Math);

console.log(Math.PI);               // Gives value of PI

console.log(Math.abs(-123.45));     // Change to absolute value -ve number to +ve

console.log(Math.round(123.4567));  // Round the value to nearest ones

console.log(Math.ceil(990.11));     // Round the value to highest ones
console.log(Math.floor(990.99));    // Round the value to lowest ones

console.log(Math.sqrt(25));         // Gives the square root
console.log(Math.pow(5,2));         // Gives the power as per given value

console.log(Math.min(1,2,3,4,5));   // Gives the minumum value from an array 
console.log(Math.max(5,6,7,8,9));   // Gives the maximum value from an array 

console.log(Math.random());         // Gives values between 0 - 1

console.log((Math.random() * 10) + 1);              // Gives values between 0 - 9 with decimal

console.log(Math.floor((Math.random() * 10) + 1));  // Gives values between 1 - 9 

const min = 100;
const max = 999;
console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // Formula





// E
// : 
// 2.718281828459045
// LN2
// : 
// 0.6931471805599453
// LN10
// : 
// 2.302585092994046
// LOG2E
// : 
// 1.4426950408889634
// LOG10E
// : 
// 0.4342944819032518
// PI
// : 
// 3.141592653589793
// SQRT1_2
// : 
// 0.7071067811865476
// SQRT2
// : 
// 1.4142135623730951
// abs
// : 
// ƒ abs()
// acos
// : 
// ƒ acos()
// acosh
// : 
// ƒ acosh()
// asin
// : 
// ƒ asin()
// asinh
// : 
// ƒ asinh()
// atan
// : 
// ƒ atan()
// atan2
// : 
// ƒ atan2()
// atanh
// : 
// ƒ atanh()
// cbrt
// : 
// ƒ cbrt()
// ceil
// : 
// ƒ ceil()
// clz32
// : 
// ƒ clz32()
// cos
// : 
// ƒ cos()
// cosh
// : 
// ƒ cosh()
// exp
// : 
// ƒ exp()
// expm1
// : 
// ƒ expm1()
// floor
// : 
// ƒ floor()
// fround
// : 
// ƒ fround()
// hypot
// : 
// ƒ hypot()
// imul
// : 
// ƒ imul()
// log
// : 
// ƒ log()
// log1p
// : 
// ƒ log1p()
// log2
// : 
// ƒ log2()
// log10
// : 
// ƒ log10()
// max
// : 
// ƒ max()
// min
// : 
// ƒ min()
// pow
// : 
// ƒ pow()
// random
// : 
// ƒ random()
// round
// : 
// ƒ round()
// sign
// : 
// ƒ sign()
// sin
// : 
// ƒ sin()
// sinh
// : 
// ƒ sinh()
// sqrt
// : 
// ƒ sqrt()
// tan
// : 
// ƒ tan()
// tanh
// : 
// ƒ tanh()
// trunc
// : 
// ƒ trunc()
// Symbol(Symbol.toStringTag)
// : 
// "Math"
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()
