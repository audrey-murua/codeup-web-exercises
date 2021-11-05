"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(color) {
    if (color === "blue") {
        return "Blue is the color of the sky.";

            } else if (color === "red") {
                return "Strawberries are red.";

            } else {
        return "I dont know anything about " + color + ".";
    }
}

console.log(analyzeColor("red"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
    switch (color) {
        case "blue":
            return ("Blue is the color of the sky.");
            case "red":
            return ("Strawberries are red.");
            default:
                return ("I dont know anything about " + color);
    }
}

console.log(analyzeColor("red"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("cyan"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?").toLowerCase();
alert(analyzeColor(userColor));



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalBill) {
    if (luckyNumber === 5) {
        return "You get everything for free!"
    } else if (luckyNumber === 1) {
        return totalBill - (totalBill * 0.1)
    } else if (luckyNumber === 2) {
        return totalBill - (totalBill * .25)
    } else if (luckyNumber === 3) {
        return totalBill - (totalBill * .35)
    } else if (luckyNumber === 4) {
        return totalBill - (totalBill * .50)
    } else {
        return totalBill
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var promptBill = parseFloat(prompt("What is your total bill?"));
alert("Your lucky number was " + luckyNumber + "." + " Your total is " + promptBill + "." + " Your discounted total is: " + calculateTotal(luckyNumber, promptBill))



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



function userValue(num) {
    var userNum = parseFloat(num);
    if (!isNaN(userNum)) {
        if (userNum % 2 === 0) {
            alert(userNum + " is an even number.")
        } else {
            alert(userNum + " is an odd number.")
        }
        alert(userNum + " plus 100 is " + (userNum + 100))

        if (userNum < 0) {

        alert(" this is a negative number")
    } else if (userNum > 0) {
        alert(userNum + " is a positive number.")
    } else {
        alert ("This is a zero.")
    }
    } else {
    alert("You didn't give a number")
    }
}

if (confirm("Hi, would you like to enter a number?")) {
    var userResult = prompt("Ok, what number do you want to enter?")
    userValue(userResult)
} else {
    alert("That's okay")

}