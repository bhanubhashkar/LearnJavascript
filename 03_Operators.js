// #####------------------------------------------------------------------------------------------------------#####
// #####----- Operators --------------------------------------------------------------------------------------#####

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

/*
String Operators
The + can also be used to add (concatenate) strings.
The += assignment operator can also be used to add (concatenate) strings.
Adding two numbers, will return the sum, but adding a number and a string will return a string.
All the comparison operators can also be used on strings, strings are compared alphabetically.
*/

/*
Logical Operators
1. AND (&&) :   Logical and
2. OR (||)  :   Logical or
3. NOT (!)  :   Logical not
*/

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

/*
Ternary Operators
The ternary operator works with three parts:
Condition       : A statement that returns true or false.
Value if True   : What happens if the condition is true?
Value if False  : What happens if the condition is false?

Syntax  :   condition ? trueExpression : falseExpression
*/

let age1 = 28;
let res1 = (age1 < 18) ? "Child" : "Teen";
let res2 = (age1 > 35) ? "Teen" : "Adult";
console.log(res1);
console.log(res2);

/*
Type Operators
1. typeof	    :   Returns the type of a variable
2. instanceof   :   Returns true if an object is an instance of an object type
*/


// #####------------------------------------------------------------------------------------------------------#####