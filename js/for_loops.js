// Exercise showMultiplicationTable


function showMultiplicationTable (num) {
    for (var x = 1; x <= 10; x++) {
        console.log("7 x " + x + " = " + (num * x))
    }

}

console.log(showMultiplicationTable(7));

// Exercise Generate 10 random numbers between 20 and 200 & output if it is odd or even.

for (var z = 1; z <= 10; z++) {
    var y = Math.floor((Math.random() * 180) + 20);
    if (y % 2 === 0) {
        console.log(y + " is an even number.")
    } else {
        console.log(y + " is an odd number.")
    }
}

// Create a for loop that uses console.log to create pyramid output


for (var p = 1; p <= 9; p++) {
    var num = "";
        console.log(p.toString().repeat(p))
}

// for (var p = 1; p <= 9; p += 1) {
//             var str = "";
//         for (var q = 1; q <= p; q += 1) {
//             str += p;
//         }
//         str += "\n";
// }
//
// console.log(str);

// Create a for loop that uses console.log to create the output

for (var i = 100; i >= 5; i-= 5) {
        console.log(i);
}

// for (var i = 100; i > 0; i-= 5) {
// console.log(i);
// }