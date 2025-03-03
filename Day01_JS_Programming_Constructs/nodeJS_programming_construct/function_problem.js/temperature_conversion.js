const prompt = require("prompt-sync")();

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Invalid input Temperature should be between 0°C and 100°C.");
        return;
    }
    let degF = (degC * 9/5) + 32;
    console.log(degC+"°C is equal to"+ degF.toFixed(2)+"°F");
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Invalid input! Temperature should be between 32°F and 212°F.");
        return;
    }
    let degC = (degF - 32) * 5/9;
    console.log(degF+"°F is equal to"+ degC.toFixed(2)+"°C");
}

// Prompt user for conversion choice
console.log("Choose conversion type:");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");
let choice = parseInt(prompt("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter temperature in Celsius: "));
        celsiusToFahrenheit(degC);
        break;
    case 2:
        let degF = parseFloat(prompt("Enter temperature in Fahrenheit: "));
        fahrenheitToCelsius(degF);
        break;
    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
