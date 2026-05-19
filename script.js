
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
