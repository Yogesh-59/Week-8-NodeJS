// Get command-line argument and parse it as an integer
const n = parseInt(process.argv[2]);
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

// Initialize power and counter
let power = 1; // 2^0 = 1
let i = 0;

console.log(`Table of powers of 2 up to 2^${n} (max 256):`);

// Loop using while to print powers of 2 until 2^n or 256 is reached
while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2; 
    i++;
}
