
//#####----- JavaScript IIFE Functions -------------------------------------------------------------------------------------------------#####

// Immedietly invoked function execution, to run any function immedietly and keep the safe from global scope pollution 

// Simple Function
function dbMySQL(){
    console.log("MySQL DB Connected...");
}
dbMySQL();

// IIFE Function - wrap whole function in an paranthesis and execute by giving paranthesis at the end with semicolon
// Named IIFE Function 
(function dbMongo(){
    console.log("Mongo DB Connected...");
})();

// IIFE Arrow Function 
( () => {
    console.log("Oracle DB Connected...");
})();

// IIFE Arrow Function with parameter
( (name) => {
    console.log(`Hi, ${name}`);
})("Bhanu");



