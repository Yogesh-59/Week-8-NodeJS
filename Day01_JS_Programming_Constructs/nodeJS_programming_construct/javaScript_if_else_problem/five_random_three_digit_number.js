function getRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}
let numbers=[];
for (let i=0;i<5;++i){
    numbers.push(getRandomThreeDigitNumber());
}
let minValue=Math.min(...numbers);
let maxValue=Math.max(...numbers);

console.log("Minimum value: "+minValue);
console.log("Maximum value: "+maxValue);
console.log("generated numbers: "+numbers);