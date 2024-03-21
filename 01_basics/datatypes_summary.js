// ************ primitive

// 1 type => String
// 2 type => Number
// 3 type => Boolearn
// 4 type => Bigint
// 5 type => Null
// 6 type => undefined
// 7 type => Symbol

// Exp of primitive datatypes
const name = "Sohaib" // => String 
const score = 100 // => number 
const isloogedIn = false // => Boolearn 
const bignumber = 2321343254n // => bigint

const outsideTemp = null  // => null 
let username; // => undefined 
// Symbol
const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid);




// ******************* non-primitive (Reference)

// 1 type = Array
// 2 type = Objects
// 3 type = Fuctions

// Exp of non-primitive datatype

const heros = ["Spider-Man", "batman", "Iron Man"]; //  Array

const MyObj = {
    name: "dani",
    age: 32
} // Objects

let myFuctions = function(){
    // console.log("hello World");
} // function

console.log(typeof name);
console.log(typeof score);
console.log(typeof isloogedIn);
console.log(typeof bignumber);
console.log(typeof outsideTemp);
console.log(typeof Symbol);
console.log(typeof heros);
console.log(typeof MyObj);
console.log(typeof myFuctions);




// Q1: Is Javascript Static or Dynamic Type Language?

// Ans: Javascript is a dynamically typed languages, the type of a variable is associated with run-time values.