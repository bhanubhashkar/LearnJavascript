
//#####----- JavaScript Arrow Functions -------------------------------------------------------------------------------------------------#####

const user = {
    userName : "Bhanu",
    greetUser : function(){
        console.log(`Hi, ${this.userName}`);

        console.log(this);          // refer to current scope context, this usually refer to use in objects only
    }
}

console.log(user.greetUser());
user.userName="Bhashkar";
console.log(user.greetUser());

console.log(this);                  //  under node env retuen empty object, in broser returns window elements


function newFun(){
    userName = "Bhanu",
    console.log(this);
    //console.log(this.userName);
}

newFun();



// Simple Funtion 
const addNum = function(num1,num2){
    let ans = num1+num2;
    //console.log(ans);
    return ans;

}
console.log(addNum(5,2));

// () => {}
// Basic Arrow Function
const subNum = (num1,num2) => {
    let ans = num1-num2;
    //console.log(ans);
    return ans;
}
console.log(subNum(5,2));

// Inplicit retuen Arrow Function
// remove curly braces and in same line write return statement witho return keyword
const mulNum = (num1,num2) => num1*num2;
console.log(mulNum(5,2));

// the return statement can be wrapped in paranthesis, object can also be returned using this method
const divNum = (num1,num2) => (num1/num2);
console.log(divNum(5,2));

const myName = (num1,num2) => ({name:"Bhanu Bhashkar"});
console.log(myName());


