
//#####----- JavaScript For Loop ----------------------------------------------------------------------------------------------------#####

// For Loop -   Iterate the block of code for defined times.
// Multiple for loop can be nested inside
// Break keyword can be used to terminate the loop in between
// Continue keyword can be used to skip code execution under loop block for 1 time

for (let itr = 1; itr <=10; itr++) {
    const element = itr;
    console.log(itr);
}

for (let itr = 1; itr <=10; itr++) {
    if (itr==4) {
        console.log("reached 4");
        break;
    }
    console.log(itr);
}

for (let itr = 1; itr <=10; itr++) {
    if (itr==4) {
        console.log("reached 4");
        continue;
    }
    if (itr==8) {
        console.log("reached 6");
        continue;
    }
    console.log(itr);
}


// Table 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log( i + "*" + j + "=" + i*j);
        //console.log(`First ${i} Second ${j}`);
    }
}

// For Loop on Array

const heroArray = ['Hulk', 'Thor', 'Strange','Wanda','Iron Man']

for (let index = 0; index < heroArray.length; index++) {
    const element = heroArray[index];
    console.log(element);   
}




