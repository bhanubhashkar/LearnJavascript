
//#####----- JavaScript For Loop ----------------------------------------------------------------------------------------------------#####

// forof loop   -   iterate some data type easily. object cannot be iterable using forof
const superHero =['Hulk', 'Thor', 'Strange','Wanda','Iron Man'];

for (const hero of superHero) {
    console.log(hero);
}

const userGreet ='Hello Bhanu, Welcome !';

for (const greet of userGreet) {
    console.log(greet);
}


// Maps -   It hold unique value in key pair format and remeber the sequence of data inside, its not iterable in loop.

const countryMap = new Map();
countryMap.set('IN', 'India');
countryMap.set('FR', 'France');
countryMap.set('AU', 'Austrailia');

console.log(countryMap);

for (const country of countryMap) {
    console.log(country);
}

for (const [country, code] of countryMap) {
    console.log(country + ' - ' + code);
}


// forin loop 
// Loop on Object

const pinCode ={
    'BGP' : '854311',
    'MGR' : '813201',
    'TRP' : '813221',
    'PRN' : '854301',
    'KOL' : '700135'
}

for (const key in pinCode) {
        console.log(`Obj Key : ${key}, Value : ${pinCode[key]}`);
}

const code =['854311','813201','813221','854301','700135'];


for (const key in code) {
    console.log(`Arr Key : ${key}, Value : ${code[key]}`);
}


// foreach loop - it  does not returns any value
// If the value under function is not returned in same line then it needs to be returned explicitly using return keyword under new scope.
// Loop on Array

const pCode =['BGP:854311','MGR:813201','TRP:813221','PRN:854301','KOL:700135'];

// different way to iterate
pCode.forEach( function (code) {
    console.log(code);
})

pCode.forEach((code) => {
    console.log(code);
})

function printThis(item){
    console.log('-> '+item);
}

pCode.forEach(printThis);

pCode.forEach( (item,index, arr) =>{
    console.log(index);
    console.log(item);
    console.log(arr);
})


const arrObj =[
    {
        name    :   'Bhanu',
        add     :   'BGP'
    },
    {
        name    :   'Bhashkar',
        add     :   'MGR'
    },
    {
        name    :   'Tuttu',
        add     :   'TRP'
    }
]


arrObj.forEach( (key) =>{
    console.log(key.name);
    console.log(key.add);
})


arrObj.forEach( function (code) {
    for (const key in code) {
        console.log(`Key : ${key}, Value : ${code[key]}`);
    }
    
})