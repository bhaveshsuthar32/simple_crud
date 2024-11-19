// regExp :-
let str1 = /hello/;
console.log(str1.test("hello world"))
console.log("hello world".replace(str1, "hemllo"))

// string expriment :-

let str2 = "my name is bhavesh";
let revExp1 = str2.split("").reverse().join("")
console.log(revExp1)

// first letter upper case
let firstUpperExp2 = str2.split(" ").map((str)=>{
   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}).join(" ")
console.log(firstUpperExp2)

// add string number :-
let str3 = "10$20$30";
let addNumExp3 = str3.split("$").map(Number).reduce((a,b)=>{return a+b})
console.log(addNumExp3)
