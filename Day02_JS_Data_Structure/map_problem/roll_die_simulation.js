// Function to roll a die and get a number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Map to store occurrences of each number
const rollResults = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

// Rolling the die until one number reaches 10 times
let maxCount = 10;
let reachedMax = false;
while (!reachedMax) {
    let roll = rollDie();
    rollResults.set(roll, rollResults.get(roll) + 1);
    
    if (rollResults.get(roll) === maxCount) {
        reachedMax = true;
    }
}

// Find the number with the maximum and minimum occurrences
let maxNum = null, minNum = null;
let maxFreq = 0, minFreq = Infinity;

for (let [num, count] of rollResults) {
    if (count > maxFreq) {
        maxFreq = count;
        maxNum = num;
    }
    if (count < minFreq) {
        minFreq = count;
        minNum = num;
    }
}

console.log("Final Results:", rollResults);
console.log("Number that appeared most times:", maxNum, "with", maxFreq, "times");
console.log("Number that appeared least times:", minNum, "with", minFreq, "times");
