//Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
  //  Use a loop and the continue statement to output all the odd numbers between 1 and 50,
//  except for the number the user entered.


do {

    var oddNumber = parseFloat(prompt("Hello, please enter an odd number between 1 and 50."))
    if (oddNumber < 1 || oddNumber > 50) {
        alert("Invalid input.");
    } else if (oddNumber % 2 === 0) {
        alert("Please enter a valid number.")
    } else {
        alert("Number in range.")
        break;
    }
} while (true)

for (var i = 1; i < 50; i++) {
    if (i === 1) {
        console.log("Number to skip is " + oddNumber);
    }
    if (i % 2 === 0) {
        continue;
    }
    if (i === oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber)
    } else {
        console.log("Here is an odd number: " + i);
    }
}

// var userNum;
//
// while(true) {
//     userNum = parseInt(prompt("Give an odd number"));
//     if(userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
//         break;
//     }
// }

// for var (b = 1; b <= 50; b++) {
//     if (b % 2 === 0) {
//         continue;
//     }
//     if (b === userNum) {
//         console.log("skip " + userNum);
//         continue;
//     }
//     console.log("Here's an odd Number: " + b);
// }