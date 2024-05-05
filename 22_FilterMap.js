
//#####----- JavaScript Filter Map & Reduce ------------------------------------------------------------------------------------------------------#####


// with for each loop array can be accessed but conditional and other operation cant be done inside foreach loop.
const code =['C','C++','Java','Python','Ruby','Swift']

code.forEach( (lang) => {
    console.log(lang);
})

const myNum =[1,2,3,4,5,6,7,8,9,10];

let newNum = myNum.filter( (num) => num >= 4);
console.log(newNum);


newNum = myNum.filter( (num) =>{
    return num > 7;
})
console.log(newNum);


newArr =[];
newNum.forEach( (num) => {
    if (num > 7) {

        newArr.push(num)
    }
})
console.log(newArr);


// Filter array of object using fiter method
const employee =[
    {   name : 'Bhanu', id : 101, doby : '1998', ctc : '900000'  },
    {   name : 'Bhashkar', id : 203, doby : '1999', ctc : '610000'  },
    {   name : 'Shashank', id : 411, doby : '2002', ctc : '710000'  },
    {   name : 'Shekhar', id : 513, doby : '2002', ctc : '650000'  },
    {   name : 'Niket', id : 319, doby : '1997', ctc : '887700'  },
    {   name : 'Aryan', id : 217, doby : '1995', ctc : '998800'  },
]

let newEmp = [];
newEmp = employee.filter( (emp) =>{
    return emp.id > 200;
})
console.log(newEmp);

let newEmp1 = [];
newEmp1 = employee.filter( (emp) =>{
    return emp.id > 100 && emp.ctc >= 900000;
})
console.log(newEmp1);

let newEmp2 = [];
newEmp2 = employee.filter( (emp) =>{
    return emp.id > 400 && emp.doby >= 2000;
})
console.log(newEmp2);


// filter array of number using map method
const newNumArr = [1,2,3,4,5,6,7,8,9,10];

const newNumber = newNumArr.map( (val) => {
    return val = val + 10;
})
console.log("Old Arr :");
console.log(newNumArr);
console.log("New Arr :");
console.log(newNumber);


// Multiple map chaining

const otherNumArr = [1,2,3,4,5,6,7,8,9,10];

const otherNum = otherNumArr.map( (num) => num * 10).map ( (num) => num + 1). map( (num) => num / 2);

console.log(otherNum);

const otherNum2 = otherNumArr.map( (num) => num * 10).map ( (num) => num + 1). filter((num) => num > 50);

console.log(otherNum2);

// Reduce
const score = [1,2,3,4,5];

let totalScore = score.reduce( function (acc, cval) {
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    return acc + cval;

},0)

console.log(totalScore);

let totalScore1 = score.reduce(  (acc, cval) => {
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    return acc + cval;

},0)

console.log(totalScore1);


const cart =[
    {
        item : 'JavaScript',
        price : 999
    },
    {
        item : 'Python',
        price : 999
    },
    {
        item : 'ANGular',
        price : 999
    },
    {
        item : 'JAVA',
        price : 999
    },
]

let totalprice = cart.reduce((acc, cval) => {
    console.log(`Accumulator : ${acc}, CurrentVal : ${cval}`);
    price = cval.price
    return acc + price;

},0)

console.log(totalprice);

