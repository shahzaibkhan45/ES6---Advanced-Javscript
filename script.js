
//local and global scope
if (true) {
    let a = 10;// let is also a local scope only run in function and block loop ke andar chalega but bahir nahi chalega for loop me bhi chalta hai
}
console.log(a);
if (true) {
    const a = 10;// const is also local scope only run in function and block loop ke andar chalega but bahir nahi chalega for loop me nahi chalega
}
console.log(a);
if (true) {
    var a = 10;// var is global scope run in function and also in outside of function loop ke bahir/andar bhi chaega 
}
console.log(a);
// =======
// let var const 
//var 
var a = 10;
var a = 20;// in var we can redeclare and reassign the value
console.log(a);

//let
let b = 30;
b = 40;// in let we can reassign the value but we cannot redeclare the variable
console.log(b);

//const
const c = 60;// in const we cannot redeclare and reassign the value
console.log(c);
//>>>>>>> var/let/const



//template literals
let name = "raffay";
let age = 30;
let city = "karachi";

let fullmessage =` My friend name is ${name} and his age is ${age} and he lives in ${city}`;
console.log(fullmessage);

//template literals in functions 
function all(name, age , city){

    return ` My friend name is ${name} and his age is ${age} and he lives in ${city}`;
}
let message =`this is new message ${all("raffy", 49 , "lahore")}`;
console.log(message);

//arrow function
//simple function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
//in variable Simple function
let add1 = function (a, b) {
    return a + b;
}
console.log(add1(5, 10));

//arrow function
//without parameter
let add2 = () =>{
return "hello world";
}
console.log(add2());


//with parameter
let add3 = (a, b) => {
    return a + b;
}
console.log(add3(115, 10));

//with one parameter
let add4 = a => `Value is ${a}`;
console.log(add4(100));

//single line code with template literals
let add5 = (name , age) =>`my name is ${name} and age is ${age}`;
console.log(add5("raffay", 30));



//rest operators

//without rest operators
function sum( name, num1 , num2) {
    let array = [num1, num2];
    let sum = 5;
    for(let i in array){
        console.log(sum + array[i]);//direct i index deta hai for in loop me 
    }
    console.log(sum + ` Hello ${name}`);
//      console.log(num1 + num2 +  Hello ${name}`);
 }
sum("raffay", 10, 20);// ab isme ye problem hai me or value as a arrugment do woh kam nahi karengi
function sum(){

    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
        console.log(sum);
    }
}
sum(10, 20, 30, 40, 50);

//with rest operators
let rest = (name , ...nums) =>{
let sum = 10;
for(let i in nums){
    console.log(sum + nums[i]);
}

}
console.log(rest("raffay", 10, 20, 30, 40, 50));

let rest1 = (name , ...nums) =>{
    let sum = 10;
    for(let i in nums){
        sum += nums[i];
    }
    console.log(`name is ${name} and sum is ${sum}`);

}
rest1("raffay", 10, 20, 30, 40, 50);