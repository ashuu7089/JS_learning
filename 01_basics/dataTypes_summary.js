// Primtive Datatypes
//   7 types - String, Number Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.35;
const  id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// Reference datatypes 
// non primitive :- Array, Objects, Functions

const heros = ['shaktiman', "naagraj", "doga"]

let myObj = {
    name : "ashu",
    age : 24
}

const myfunction = function(){
    console.log("Hello ashu")
}