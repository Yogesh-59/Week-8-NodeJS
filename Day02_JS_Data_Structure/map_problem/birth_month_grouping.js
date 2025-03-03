function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Map to store individuals based on birth month
const birthMonths = new Map();

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();
    
    if (!birthMonths.has(month)) {
        birthMonths.set(month, []);
    }
    birthMonths.get(month).push(`Person ${i}`);
}

// Print individuals having birthdays in the same month
for (let [month, individuals] of birthMonths) {
    console.log(`Month ${month}:`, individuals);
}
