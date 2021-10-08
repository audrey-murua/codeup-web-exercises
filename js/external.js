"use strict";

console.log("Hello from external JavaScript");

var returnOfAlert = alert("Welcome to my Website!");
console.log(returnOfAlert);

var yourFavoriteColor = prompt("What's your favorite color?");
var returnFavoriteColor = alert("Great, " + yourFavoriteColor + " is my favorite color too!");
console.log(returnFavoriteColor);

var littleMermaid = prompt( "How many days did you rent The Little Mermaid?");
var brotherBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent Hercules?");
var amount = (3 * 3) + (3 * 5) + (3 * 1);
var totalAmount = alert("You rented these movies for nine days, so your total is " + "$" + amount + ".");
console.log(totalAmount);

var googlePay = alert("Google pays $400 per hour.");
console.log(googlePay);
var googleHours = prompt("How many hours did you work for Google?");

var amazonPay = alert("Amazon pays $380 per hour.");
console.log(amazonPay);
var amazonHours = prompt("How many hours did you work for Amazon?");

var facebookPay = alert("Facebook pays $350 per hour.");
console.log(facebookPay);
var facebookHours = prompt("How many hours did you work for Facebook?");

var totalHours = alert("You worked a total of 20 hours.")
console.log(totalHours);

var totalPay = (400 * 6) + (380 * 4) + (350 * 10);
var totalPayCheck = alert("Your paycheck is " + "$" + totalPay + ".");
console.log(totalPayCheck);

var classNotFull = confirm("Does the classroom have room?");
console.log(classNotFull);

var scheduleNoConflict = confirm("Do you have availability at 9am?");
console.log(scheduleNoConflict);

var enrolled = alert("Great! You're enrolled in the class!");
console.log(enrolled);

var offerNotExpired = confirm("Is the offer current?");
console.log(offerNotExpired);
var boughtMoreThan2 = confirm("Did you buy more than 2 items?");
console.log(boughtMoreThan2);
var premiumMember = confirm("If you did not buy more than 2 items, are you a premium member?");
console.log(premiumMember);
var discountApplied = alert("Great! A discount has been applied!");
console.log(discountApplied);

