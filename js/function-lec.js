"use strict";

// A function is a reusable code that performs a specific task. Functions typically take in an input, and produces an
// output.

//Functions we have used so far;
// prompt();
// alert();
// Number();
// parseFloat();
// parseInt();
// .toFixed();
// .toUppercase();


//prompt is the name of the function, "what is your name" is the argument
// When executing a function, we call the name of the function following any in
//inside of the parenthesis known as arguments.

prompt("What is your name"); //returns a string;

// Function Structure

//function todaysDate(parameter 1, parameter 2, etc.) {
    // Do something
    // return something
// }

function todaysDate(greeting) {
    return greeting + Date();
}

// Execute function

var date = todaysDate("Today's date is: ");

console.log(date);

//function declaration

function echo(phrase) {
    return phrase + " " + phrase
}

//console.log(echo("hello!"))
console.log(echo(echo("hello!")));

//function expression /anonymous function

var sayBye = function (name) {
    return "Goodbye" + name;
}

console.log(sayBye(" Audrey"));

//Example:

//Create a function which takes in two number parameters to find the hypotenuse angle.

function findHypotenuse(a , b) {
    var result;
    result = Math.sqrt((a * a) + (b * b))
    return result;
}

// Have a triangle with the sides of 4 and 5
// Execute function to find hypotenuse

// parameters are the placeholders stated in the function definition
// areguments are the values that are put into the function when executes
console.log(findHypotenuse(4, 5));

//Function Scope

// Scope is a term to describe where a variable can be accessed

// With my global variable that exists in the HTML doc. I can console.log it's value

console.log(global);

function greeting() {
    var firstName = "David";
    var lastName = "Stephens";
    return "hello, " + firstName + lastName;
}

console.log(greeting());
console.log(firstName, lastName);

// Immediately Invoked Function Expression (IIFE)
// purpose is to wrap it in a local scope rather than a global scope to prevent errors or
// contamination from global scopes

(function () {
    var ifyVar = "I am local to the IIFE"
    var info = "hi";
    // var info can still be accessed here because it was defined "globally" (inside the iffee).
    return info;
})();

console.log(ifyVar);