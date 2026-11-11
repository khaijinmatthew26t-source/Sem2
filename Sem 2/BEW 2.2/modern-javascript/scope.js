// Variable Scope and Definitions

// 2 different types of scope (technically 3)
// - Function Scope
// - Block Scope
// - Global Scope (By default)

// Keywords to declare a variable
/*
    var - Function Scope
    let - Block Scope
    const - Block Scope
*/

// What is a Scope?
// Scope is the area of code in which a variable is relevant
// Commonly defined by curly brackets
// Most commonly used by if/else, loops, and functions

var name = 'jack';

if(true){
    var name = "John";
    console.log(name)
}

// printName();
console.log(name); // jack