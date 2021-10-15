
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

})();