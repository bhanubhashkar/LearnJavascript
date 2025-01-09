// #####------------------------------------------------------------------------------------------------------#####
// #####----- Console Method ---------------------------------------------------------------------------------#####

/*
The console object provides access to the browser's debugging console.
The console object is a property of the window object.

Method	    :   Description
log()	    :   Outputs a message to the console
assert()	:   Writes an error message to the console if a assertion is false
clear()	    :   Clears the console
count()	    :   Logs the number of times that this particular call to count() has been called
error()	    :   Outputs an error message to the console
info()	    :   Outputs an informational message to the console
table()	    :   Displays tabular data as a table
time()	    :   Starts a timer (can track how long an operation takes)
timeEnd()	:   Stops a timer that was previously started by console.time()
trace()	    :   Outputs a stack trace to the console
warn()      :   Outputs a warning message to the console
group()	    :   Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
groupEnd()	:   Exits the current inline group in the console
groupCollapsed():	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it

*/

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










// #####------------------------------------------------------------------------------------------------------#####