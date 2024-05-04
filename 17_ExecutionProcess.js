
//#####----- JavaScript IIFE Functions -------------------------------------------------------------------------------------------------#####

// JavaScript Execution Context

/*

1 - Exection/Environment Context 
    GEC {} will be created and allocated under "this", First and mandatory action to run js code.
    There are Three types of Execution context in JS
    A - Global Exection/Environment Context
    B - Function Exection Context
    C - val Exection Context

    As soon we give a js file file for execution global execution context is created "{}". Which is stored/referred in "this" variable.
    Browser GEC is different and Node, Bun, Dino Env GEC is different. In browser the default value is window objects.
    The GEC is executed in a thread. JS is a single threaded language.

2 - Memory Creation Phase or Creation Phase
    All varibles and function of js will be created in memory.
    With default value for all variable as "undefined" and function defiition in function variable/memory.

3 - Executon Phase
    All variables are assigned with the values from top. 
    Nothing will happen where function is defined as its already taken care in memory creation phase.
    On each funtion call New Execution Context is created, which is consist of new variable env sandbox and execution thread.
    As new Execution Context is created so again memory creation Phase and Execution phase will be created fot that function only.
    If any other funcyion is defined/called within a function then again Exectution context creation, Memory phase and execution phase will be craeted.

*/


// Example
let num1 = 10;
let num2 = 23;

function add(x,y){
    let sum = x + y ;
    return sum;
}

let res1 = (add(num1,num2));
let res2 = (add(4,5));

console.log(res1);
console.log(res2);

/*
1 - Global Exection/Environment Context 
    GEC {} will be created

2 - Memory Creation Phase or Creation Phase

    Procedure :
    num1    -> undefined
    num2    -> undefined
    add     -> function definition
    res1    -> undefined
    res2    -> undefined

3 - Executon Phase
    All variables are assigned with the values from top. 
    Nothing will happen where function is defined as its already taken care in memory creation phase.
    On each funtion call New Execution Context is created, which is consist of new variable env sandbox and execution thread.
        As new Execution Context is created so again memory creation Phase and Execution phase will be created fot that function only.
        It will be deleted after function execution when value is returned.

    Procedure  :
    num1  -> 10
    num2  -> 23
    add() -> New Execution context is created, so again memory creation and Execution phase will be repeated for add function.
        Memory Creation for Function
            x    -> undefined
            y    -> undefined
            sum  -> undefined
        Execution Phase for function
            x    -> 10
            y    -> 23
            sum  -> 33 (After Calculation)
            return -> It will return the value to global/parent executionl Context. 
                    In our case to glibal execution context where the value will be assigned in res1 variable
    res1  -> 33
    add() -> New Execution context is created, so again memory creation and Execution phase will be repeated for add function as it called again and prev EC was deleted from memory.
        Memory Creation for Function
            x    -> undefined
            y    -> undefined
            sum  -> undefined
        Execution Phase for function
            x    -> 4
            y    -> 5
            sum  -> 9 (After Calculation)
            return -> It will return the value to global/parent executionl Context. 
    res2  -> 9

    log value of res1
    log value of res2

    End;
*/


// Call Stack

// In JS call stack are LIFO 

/*

|                   |
| FunctionTWo       |   ^
| FunctionOne       |   |  
| Global Exec Cont  |   |
---------------------

*/