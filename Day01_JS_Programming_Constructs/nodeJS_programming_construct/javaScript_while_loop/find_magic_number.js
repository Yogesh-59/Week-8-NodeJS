const prompt = require('prompt-sync')();
let number = prompt('Enter a number between 1 and 100: ');
number = parseInt(number);
let lower = 0;
let upper = 100;
let middle = 0;
let found = false;
while (lower <= upper) {
    middle = Math.floor((lower + upper) / 2);
    if (middle == number) {
        console.log("Magic number found: " + middle);
        found = true;
        break;
    } else if (middle < number) {
        lower = middle + 1;
    } else {
        upper = middle - 1;
    }
}