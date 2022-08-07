// Code your solutions in this file
/*for ([initialization]; [condition]; [iteration]) {
  [loop body]
} 

// follow code: debugger
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

// follow code: without debugger. Shows all loops
for (let age = 30; age < 40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

follow code: iterate over every element
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/

//assignment
function writeCards(names, event) {

    const cards = [];

    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
            }
    return cards;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}