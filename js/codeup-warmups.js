
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

//10-26-21

    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];

    function canadianWrestlers (arr) {
        var bucket = [];
        arr.forEach(function (element) {
            if (element.nationality === "Canadian") {
                bucket.push(element);
            }
        });
        return bucket;
    }

    console.log(canadianWrestlers(wrestlers));


    //10-27-21

    var circle = {
        radius: 36
    }

    var area = Math.round(Math.PI * Math.pow(circle.radius, 2));

    console.log(area);

    //11-2-21

    var groceries = [
        {
            name: "carrots",
            quantity: 5
        },{
            name: "yams",
            quantity: 50
        },{
            name: "oranges",
            quantity: 9
        },{
            name: "onions",
            quantity: 2
        },{
            name: "cucumbers",
            quantity: 6
        },{
            name: "potatoes",
            quantity: 8
        }
    ];

    function mostGroceries (grocery) {
        var yams = {
            name: "food",
            quantity: 0
        }
        grocery.forEach(function (element) {
            if (element.quantity > yams.quantity) {
                yams = element;
            }
        });
        return yams;
    }

    console.log(mostGroceries(groceries));

    //11-3-21

    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]

function sortByName(array) {
    return array.sort(function (a, b) {
        var lower = a.name.toLowerCase();
        var lowerTwo = b.name.toLowerCase();

        if (lower < lowerTwo) {
            return -1;
        } else if (lower > lowerTwo) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log(sortByName(products));

    // 11/9/21

    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];

    function lowestHeight (array) {
        var smallest = {
            name: "player",
            height: 160
        }
        array.forEach(function (element) {
            if (element.height <= smallest.height) {
                smallest = element;
            }
        });
        return smallest;
    }

    console.log(lowestHeight(bBallPlayers));

    //other solution

    function findShortest (arr) {
        var holdThis = {height: Number.MAX_VALUE};
        arr.forEach(function(el) {
            if (el.height < holdThis.height) {
                holdThis = el;
            }
        });
        return holdThis;
    }

    console.log(findShortest(bBallPlayers))

    // 11-10-21

    var myCharacter = {
        name: 'Titan',
        hitPoints: 100,
        class: 'Warrior',
        abilities: {
            attack: function(obj) {
                console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + "!")
                obj.hitPoints -= myCharacter.weapon.damage;
                console.log(obj.name + " has " + obj.hitPoints + " hit points left!")
            },
        },
        magicPoints: 0,
        weapon: {
            name: 'Silver Sabre',
            damage: 16,
            type: 'sword'
        }
    }

    var enemy = {
        name: 'Savage Orc',
        hitPoints: 100,
        class: 'Warrior',
        magicPoints: 0,
    }


    myCharacter.abilities.attack(enemy);


})();