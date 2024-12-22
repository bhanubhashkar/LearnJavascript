# Javascript Notes
[Checkout my Profile](https://github.com/bhanubhashkar)

## Basics
```javascript
// Single line comment

/*
Multi line comment
*/
```

## Console Method
```javascript
/*
The console object provides access to the browser's debugging console.
The console object is a property of the window object.

Method	    :   Description
log()	    :   Outputs a message to the console
assert()    :   Writes an error message to the console if a assertion is false
clear()	    :   Clears the console
count()	    :   Logs the number of times that this particular call to count() has been called
error()	    :   Outputs an error message to the console
info()	    :   Outputs an informational message to the console
table()	    :   Displays tabular data as a table
time()	    :   Starts a timer (can track how long an operation takes)
timeEnd()   :   Stops a timer that was previously started by console.time()
trace()	    :   Outputs a stack trace to the console
warn()      :   Outputs a warning message to the console
group()	    :   Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
groupEnd()	:   Exits the current inline group in the console
groupCollapsed():   Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it

*/
```

```javascript

console.log("This is a simple log statement.");

console.info("INFO : This is an info log.");

console.warn("WARN :This is a warning!");

console.error("ERROR : This is an error log.");

console.clear();

console.trace();

console.table(["HTML", "CSS", "SQL"]);
console.table({firstname:"Bhanu", lastname:"Bhashkar"});

console.time("start")
console.timeEnd("start");

console.assert(5 + 5 == 10, "Expression returned true.");
console.assert(0, "Expression returned false.");

console.count("myLabel");
console.count("myLabel");
console.count("myLabel");

console.count("newLabel");
console.count("newLabel");

console.group();
console.log("Hello again, this time inside a group!");
console.log("Hello again, this time inside a group!");
console.log("Hello again, this time inside a group!");
console.groupEnd();

console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.log("Hello again, this time inside a collapsed group!");
console.log("Hello again, this time inside a collapsed group!");
console.groupEnd();
```


## Datatypes
```javascript
/*
Each value in a JavaScript program is associated with a data type. A data type specifies the type of data Number, String, Boolean, Double, etc. 
Each data type requires different amounts of memory and has some specific operations which can be performed over it.

In JavaScript, we use var, let, and const to create variables. They control how and where variables can be accesed and manupulated in code.
var     :   The var is the oldest keyword to declare a variable in JavaScript. If declared globally, then can be used anywhere in code, If decalred inside a function, then can be used it within that function only. (Not being used)
let     :   The let variable is only available inside the block {} where it is define. The value can be changed infinitely after decalration. let is block-scoped.
const   :   const is similar to let, Only difference is once value is assigned to a const variable, we can’t change it later. const is block-scoped.
The data types in JavaScript can be categorized into two types.
```

### Primitive Datatypes
```javascript
/*
Primitive
1. Number      :   Numbers are always stored in double-precision 64-bit binary format IEEE 754.
2. String      :   Strings are made up of a list of characters, essentially an array of characters.
3. Boolean     :   Represents a logical entity and can have two values: true or false.
4. Big Int     :   BigInt is a built-in object providing a way to represent whole numbers larger than 253-1.
5. Undefined   :   A variable that has not been assigned a value is undefined.
6. Null        :   This type has only one value: null.
7. Symbol      :   Symbols return unique identifiers that can be used as property keys in objects without colliding with other keys.
*/
```

```javascript

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
```


### NonPrimitive Datatypes
```javascript
/*
Non Primitive/ Referemce Type/ Dynamically Typed
1. Array       :   An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.
2. Object      :   Objects are fundamental data structures used to store collections of data. It consist of key-value pairs and can be created using curly braces {} or the new keyword
3. Functions   :   A JavaScript function is a block of code designed to perform a particular task.
    
*All Non Primitive Data Types is called function.
*Function data type is called Object Function.
*/
```

```javascript

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

```


## Operators
```javascript
/*
Javascript operators are used to perform different types of mathematical and logical computations.
The numbers (in an arithmetic operation) are called operands.
The operation (to be performed between the two operands) is defined by an operator.
Whatever data type comes first in an operation all will be considered as that data type only. 
Like str + str + num => First is str so all will be treated as str. Like num + num + str => First is num so all will be treared as num.

There are different types of JavaScript operators:
1. Arithmetic Operators - used to perform arithmetic on numbers.
2. Assignment Operators - used to assign values to variables.
3. Comparison Operators - used to determine equality or difference between variables or values.
4. String Operators - used to cmanupulate strings.
5. Logical Operators - used to determine the logic between variables or values.
6. Bitwise Operators - used to convert numeric operand into a 32 bit number. The result is converted back to a JavaScript number.
7. Ternary Operators - a conditional operator that assigns a value to a variable based on some condition.
8. Type Operators - used to converte to a new variable and another data type.
*/
```

### Arithmetic Operators
```javascript
/*
Arithmetic Operators
1. Addition +           :   Add values
2. Subtraction -        :   Substract values
3. Multiplication *     :   Multiply values
4. Exponentiation **    :   Gives exponential values (3**3 = 3*3*3 = 27)
5. Division /           :   Gives quoitent values
6. Modulus/Remainder %  :   Gives remainder values
7. Increment ++         :   Increase value by 1
8. Decrement --         :   Decrease value by 1
*/
```

```javascript

let num1 = 5;
let num2 = 3;
let newNum1 = 10;
let newNum2 = 10;
let newNum3 = 10;
let newNum4 = 10;

console.log("Value of Number 1 : ",num1);
console.log("Value of Number 2 : ",num2);
console.log("Add        : ",num1+num2);
console.log("Subtract   : ",num1-num2);
console.log("Multiply   : ",num1*num2);
console.log("Power      : ",num1**num2);
console.log("Divide     : ",num1/num2);
console.log("Remainder  : ",num1%num2);
console.log("Increment  : ",newNum1++);
console.log("Increment  : ",++newNum2);
console.log("Decrement  : ",newNum3--);
console.log("Decrement  : ",--newNum4);

console.log("Assignment-: ",newNum1,newNum2,newNum3,newNum4);

```

### Assignemnt Operator
```javascript
/*
/*
Assignment Operators
1. Equals = (x = y)             :   Same as x = y
2. Add Equals += (x += y)       :   Same as x = x + y
3. Substract Equals -= (x -= y) :   Same as x = x - y
4. Multiply Equals *= (x *= y)  :	Same as x = x * y
5. Division Equals /= (x /= y)  :   Same as x = x / y
6. Remainder Equals %= (x %= y) :   Same as x = x % y
7. Power Equals **= (x **= y)   :   Same as x = x ** y
*/
```

### Comparison Operator
```javascript
/*
Comparison Operators
1. ==   :   equal to
2. ===  :   equal value and equal type
3. !=	:   not equal
4. !==	:   not equal value or not equal type
5. >	:   greater than
6. <	:   less than
7. >=	:   greater than or equal to
8. <=	:   less than or equal to
9. ?	:   ternary operator
*/
```

### String Operators
```javascript
/*
String Operators
The + can also be used to add (concatenate) strings.
The += assignment operator can also be used to add (concatenate) strings.
Adding two numbers, will return the sum, but adding a number and a string will return a string.
All the comparison operators can also be used on strings, strings are compared alphabetically.
*/
```

### Logical Operator
```javascript
/*
Logical Operators
1. AND (&&) :   Logical and
2. OR (||)  :   Logical or
3. NOT (!)  :   Logical not
*/
```

### Bitwise operator
```javascript
/*
Bitwise Operators
SNo Operator	Description	    Example	    Same as	        Result	Decimal
1.  &	        AND	            5 & 1	    0101 & 0001	    0001    1
2.  |	        OR	            5 | 1	    0101 | 0001	    0101    5
3.  ~	        NOT	            ~ 5	        ~0101	        1010    10
4.  ^	        XOR	            5 ^ 1	    0101 ^ 0001	    0100    4
5.  <<	        left shift	    5 << 1	    0101 << 1	    1010    10
6.  >>	        right shift	    5 >> 1	    0101 >> 1	    0010    2
7.  >>>	   unsigned right shift	5 >>> 1	    0101 >>> 1	    0010    2
*/
```

### Ternary operator
```javascript
/*
Ternary Operators
The ternary operator works with three parts:
Condition       : A statement that returns true or false.
Value if True   : What happens if the condition is true?
Value if False  : What happens if the condition is false?

Syntax  :   condition ? trueExpression : falseExpression
*/
```

```javascript

let age1 = 28;
let res1 = (age1 < 18) ? "Child" : "Teen";
let res2 = (age1 > 35) ? "Teen" : "Adult";
console.log(res1);
console.log(res2);

```

### Typeof operator
```javascript
/*
Type Operators
1. typeof	    :   Returns the type of a variable
2. instanceof   :   Returns true if an object is an instance of an object type
*/
```

##
```javascript
/*

*/
```

```javascript

```

##
```javascript
/*

*/
```

```javascript

```

##
```javascript
/*

*/
```

```javascript

```

##
```javascript
/*

*/
```

```javascript

```