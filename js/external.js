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
var totalAmount = alert("You rented these movies for nine days, so your total is " + "$" + amount);
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




