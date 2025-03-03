const prompt = require("prompt-sync")();

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let temp = num;
    let reverse = 0;
    while (temp > 0) {
        let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return reverse;
}

// Take user input
let num = parseInt(prompt("Enter a number: "));

if (isPrime(num)) {
    console.log(num +" is a prime number.");
    
    let palindrome = getPalindrome(num);
    console.log("Palindrome of "+num+" is "+ palindrome);

    if (isPrime(palindrome)) {
        console.log("The palindrome "+palindrome+" is also a prime number.");
    } else {
        console.log("The palindrome " +palindrome+" is NOT a prime number.");
    }
} else {
    console.log(num+" is NOT a prime number.");
}
