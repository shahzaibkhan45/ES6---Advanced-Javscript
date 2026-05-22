
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
let name_tmpl = "raffay";
let age = 30;
let city_tmpl = "karachi";

let fullmessage =` My friend name is ${name_tmpl} and his age is ${age} and he lives in ${city_tmpl}`;
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

//with rest operators ye function me jitne bhi value as a argument do woh kam karengi
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

// <<<<<<< HEAD
//spread operator ye array,object ke andar jitne bhi value hai unko as a argument me de deta hai

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let arr3 = [...arr1,56, ...arr2,90];// ye dono array ke value ko as a argument me de deta hai
console.log(arr3);

let obj1 = {
    name : "raffay",
    age : 30
}
let obj2 = {
    city : "karachi",
    country : "pakistan"
}
let obj3 = {...obj1, ...obj2};// ye dono object ke value ko as a argument me de deta hai
console.log(obj3);

let arr4 = [10, 20, 30];

arr6 = [...arr4];// ye arr4 ke value ko as a argument me de deta hai arr6 me
arr4.push(100);

console.log(arr4);
console.log(arr6);

function sum(a , ...nums){
      console.log(a);
    console.log(nums);
    
}
let y = [378,89476,8768979,89475897];
sum(10, 20, 30, 40, 50, ...y);
// =======
// object literal

// example 1
let name_obj1 = "raffay";
let city_obj1 = "karachi";
let objA = {
    name: name_obj1,
    age : 30,
    city: city_obj1
}
console.log(objA);

// example 2
let name_obj2 = "raffay";
let city_obj2 = "karachi";
let objB = {
    [name_obj2 + "name"]: "raffay",
    age : 30,
    city: city_obj2
}
console.log(objB);


// example 3
// old Method

let name_obj3 = "raffay";
let city_obj3 = "karachi";
let objC = {
    name : name_obj3,    
    city : city_obj3,
    getName : function(){
        return `my name is ${this.name} and i live in ${this.city}`;
    }
}
console.log(objC.getName());

// new method
let name_obj4 = "raffay";
let city_obj4 = "karachi";
let objD = {
   name_obj4,
   city_obj4,
    getName (){
        return `my name is ${this.name} and i live in ${this.city}`;
    }
}
console.log(objD.getName());

// new method with bracket notation
let name_obj5 = "raffay";
let city_obj5 = "karachi";
let objE = {
    name: name_obj5,
    city: city_obj5,
    'getName 1'(){
        return `my name is ${this.name} and i live in ${this.city}`;
    }
}
console.log(objE['getName 1']());// we can also access the function with this method but we cannot access the variable with this method because it will return undefined because it is not a function it is a variable 


// function return object

let fname = "raffay";
let lname = "khan";
let course = "javascript";
function object(fname ,lname ,course){
    let name = fname + " " + lname;
    return {name , course}
}
console.log(object(fname ,lname , course));
// >>>>>>> object-literals


//array destructuring
// example 0
let arr0 = [10, 20, 30, 40, 50];
let a0 = arr0[0];
let a01 = arr0[1];
console.log(a0, a01);
//example 1
let arr = [10, 20, 30, 40, 50];
let [a1, a2, a3, a4, a5] = arr;
console.log(a1, a2, a4, a5);

//example 2
let arr8 = [10,20,40];
let [a6,, a7] = arr8;
console.log(a6, a7);

//example 3
let arr5 = [10, 20, 30, 40, 50];
let [a8, a9, ...restArr] = arr5;
console.log(a8, a9);
console.log(restArr);

//example 4
let arr9 = [10, 20, 30, 40, 50];
let [a10 , ...restArr1] = arr9;
console.log(a10);
console.log(restArr1);

//example 5
let arr7 = [10];
let [a11, a12 = 20] = arr7;
console.log(a11);
console.log(a12);


//object destructuring
//example 1
let obj5 = {
    name : "raffay",
    age1 : 30,
    city : "karachi"
}
let {name, age1, city} = obj5;
console.log(name, age1, city);

//example 2
//rename variable
let obj6 = {
    name : "raffay",
    age2 : 30, 
}
let {name : name1, age2 : age3} = obj6;
console.log(name1, age3);

//example 3
let obj7 = {
    name : "raffay",
    age4 : 30,
    city : "karachi"
}
let {name : name2, ...restObj} = obj7;
console.log(name2);
console.log(restObj);

//example 4
let obj8 = {
    name : "raffay",
    age5 : 30,
    city : "karachi"
}
let {name : name3, age5 = 20} = obj8;
console.log(name3);
console.log(age5);

//example 5
let obj9 = {
    name : "raffay",
    age6 : 30,
}
let obj10 = {
    ...obj9,
    city : "karachi"
}
console.log(obj10);

//AJAX(Asynchronous Javascript And XML) ye ek technique hai jisse hum apne web page ko dynamically update kar sakte hain bina page ko reload kiye. Isme hum server se data fetch karte hain aur us data ko apne web page par display karte hain.

//XMLHttpRequest ye ek built-in object hai jisse hum AJAX request bhej sakte hain. Isme hum open() method se request ko initialize karte hain, send() method se request ko bhejte hain aur onreadystatechange event ke through response ko handle karte hain.

//in response   
//readyState 0: request not initialized
//readyState 1: server connection established
//readyState 2: request received
//readyState 3: processing request
//readyState 4: request finished and response is ready

// 3 response status code
// 200: OK
// 404: Not Found
// 500: Internal Server Error

//data types in AJAX
//XML Data
//Text data
//JSON Data

//practical example of AJAX

function fetdata(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById("demo").innerHTML = xhr.responseText;
        }else if(xhr.readyState === 4 && xhr.status === 404){
            console.log("data not found");
        }
    }
    xhr.open("GET","./data.txt" ,true);
    xhr.send();
}