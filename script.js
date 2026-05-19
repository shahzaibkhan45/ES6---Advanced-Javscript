//local and global scope
if(true){
    let a = 10;// let is also a local scope only run in function and block
}
console.log(a);
if(true){
    const a = 10;// const is also local scope only run in function and block
}
console.log(a);
if(true){
    var a = 10;// var is global scope run in function and also in outside of function
}
console.log(a);
