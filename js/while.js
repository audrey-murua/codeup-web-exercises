// Create a while loop that uses console.log() to create the output shown below.

var b = 2;

while(b <= 65536) {
    console.log(b);
    b *= 2;
}

// var m = 1
// while(m <= 65536) {
// m *= 2;
// console.log(m);
// }

//Exercise ice-cream David's example

var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones + "  are ready to sell.");
do {
    var conesToBuy = Math.floor(Math.random() * 5) + 1;
    if (conesToBuy <= allCones) {
        allCones -= conesToBuy;
    } else {
            console.log("Customer wants to buy " + conesToBuy + " cones. I have " + allCones + " left.");
        }
    } while (allCones !== 0)

        console.log("We're closed.");











