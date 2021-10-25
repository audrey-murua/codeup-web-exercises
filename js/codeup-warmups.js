
//10-13-21 Warm-up Exercise

(function() {


    function returnsSeven() {
        return 7;
    }

    console.log(returnsSeven());

//false if statement exercise
    var age = 60;
    var seniorDiscount = age >= 65;


    if (seniorDiscount) {
        console.log("Great! You get a discount!");
    } else {
        console.log("I'm sorry, you don't get a senior discount.");
    }


//10-14-21 Warm-up Exercise

var hadBreakfast = Boolean(Math.round(Math.random()));

var hadBreakfastMessage = (hadBreakfast) ? "I had breakfast this morning." : "I didn't have any breakfast this morning.";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);




//10-15-21
// Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"

Tests:
    console.log(typeCheck(''));
console.log(typeCheck(isNaN()));
console.log(typeCheck(!false * 3));
console.log(typeCheck(4 + '4'));

function typeCheck(input) {
    if (typeof input === "string") {
        return "Haha, it's a string of string!"
    } else {
        return typeof input;
    }

}

//10-19-21
//   Write a program that console.logs the numbers from 1 to 100.
//   But for multiples of three console.log “Fizz” instead of the number
//   and for the multiples of five console.log “Buzz”.
//   For numbers which are multiples of both three and five console.log “FizzBuzz”.

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

//10-20-21 Exercise

function secondToLast (array) {
        return array[array.length -2]
}

    console.log(secondToLast(["1", "2", "3", "4", "5"]))

// 10-21-21 Exercise

function moveToEnd (array) {
        var elementOne = array.shift();
        array.push(elementOne);
        return array;
}
    console.log(moveToEnd([1,2,3,4,5]));


//10-25-21

var pokemon = {
    Name: "Pikachu",
    Height: "1\"04\'",
    Weight: "13.2 lbs",
    Category: "Mouse",
    Abilities: "Static",
    Type: "Electric",
    Weakness: "Ground"
};

})();