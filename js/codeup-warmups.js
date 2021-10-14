
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

})();

