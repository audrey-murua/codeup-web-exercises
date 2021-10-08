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
var costOfMovies = prompt("How much are the movies per day?");
var littleMermaidCost = Number(littleMermaid) * Number(costOfMovies);
var brotherBearCost = Number(brotherBear) * Number(costOfMovies);
var herculesCost = Number(hercules) * Number(costOfMovies);
var totalRental = littleMermaidCost + brotherBearCost + herculesCost;
alert("Your total rental cost is " + totalRental);


var googleHours = prompt("How many hours did you work for Google?");
var googlePay = prompt("What is your rate of pay per/hr for Google?");
var googleTotal = Number(googleHours) * Number(googlePay);
var amazonHours = prompt("How many hours did you work for Amazon?");
var amazonPay = prompt("What is your rate of pay per/hr for Amazon?");
var amazonTotal = Number(amazonHours) * Number(amazonPay);
var facebookHours = prompt("How many hours did you work for Facebook?");
var facebookPay = prompt("What is your rate of pay per/hr for Facebook?");
var facebookTotal = Number(facebookHours) * Number(facebookPay);
var paycheckTotal = googleTotal +  amazonTotal + facebookTotal;
alert("Your total paycheck is " + paycheckTotal);


var classNotFull = confirm("Does the classroom have room?");
console.log(classNotFull);

var scheduleNoConflict = confirm("Do you have availability at 9am?");
console.log(scheduleNoConflict);

var enroll = classNotFull && scheduleNoConflict;

alert("You can enroll... git " + enroll);


var offerNotExpired = confirm("Is the offer current?");
console.log(offerNotExpired);
var boughtMoreThan2 = confirm("Did you buy more than 2 items?");
console.log(boughtMoreThan2);
var premiumMember = confirm("If you did not buy more than 2 items, are you a premium member?");
console.log(premiumMember);
var productOffer = (offerNotExpired && (boughtMoreThan2 || premiumMember));
var discountApplied = alert("Can discount be applied? " + productOffer);
console.log(discountApplied);

