/*
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
console.log(message);*/

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



