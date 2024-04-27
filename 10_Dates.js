
//#####----- JavaScript Numbers  -------------------------------------------------------------------------------------------------------#####

let myDate = new Date();        // Creates a Date object of current Date and Time

console.log(myDate);                    

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toJSON());

console.log(myDate.toString());


console.log(myDate.getDate());      // Gives date of the current date

console.log(myDate.getMonth()+1);   // Gives month of the current date, adding +1 as it gives vales starting from 0

console.log(myDate.getFullYear());  // Gives year of the current date




// Some issues in converiosn so while concerting using any method cross check the behavior

let otherDate = new Date(1997, 9, 5, 15, 10, 10); // Creates a Date object of specified Date and Time
console.log(otherDate.toString());

let moreDate = new Date("05-10-1997"); // Creates a Date object of specified Date and Time
console.log(moreDate.toString());

let timeStamp =  Date.now();        // Gives total ms from 1st Jan 1970 to till now
console.log(timeStamp);

console.log(timeStamp.toString());

// Can customize the output format of any date  
console.log(otherDate.toLocaleString('default',{
    weekday: "long"
}));

