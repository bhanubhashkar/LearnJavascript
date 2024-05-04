
//#####----- JavaScript For Loop ----------------------------------------------------------------------------------------------------#####


// While Loop
// First check the condition, then execute the block of code. 
let count = 1;
while (count<=5) {
    console.log("Count is : " + count);
    count++;
}

const heroArray = ['Hulk', 'Thor', 'Strange','Wanda','Iron Man']
let num = 0;

while (num < heroArray.length) {
    console.log("Hero Name : " + heroArray[num]);
    num = num + 1;
}

// Do While Loop
// First execute the block of code, then check for the condition. 
let fourTable = 4;
let fiveTable = 2;

do {
    console.log(fourTable);
    fourTable = fourTable + 4;
    
} while (fourTable<=40);


do {
    console.log(fiveTable);
    fiveTable = fiveTable + 1;
    
} while (fiveTable<2);
