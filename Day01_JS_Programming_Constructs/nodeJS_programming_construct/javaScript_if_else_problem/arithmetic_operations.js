const prompt = require('prompt-sync')(); // Import prompt-sync

// Taking input from the user
let a = parseInt(prompt("Enter first number (a): "));
let b = parseInt(prompt("Enter second number (b): "));
let c = parseInt(prompt("Enter third number (c): "));

// Performing arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Storing results in an array
let results = [result1, result2, result3, result4];

// Finding maximum and minimum values
let maxValue = Math.max(...results);
let minValue = Math.min(...results);

// Displaying results
console.log(`1. a + b * c = ${result1}`);
console.log(`2. a % b + c = ${result2}`);
console.log(`3. c + a / b = ${result3}`);
console.log(`4. a * b + c = ${result4}`);

console.log(`Maximum value: ${maxValue}`);
console.log(`Minimum value: ${minValue}`);
