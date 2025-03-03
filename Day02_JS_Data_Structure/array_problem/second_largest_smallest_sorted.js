function generateRandomNumber(count){
    let numbers=[];
    for(let i=0;i<count;i++){
        numbers.push(Math.floor(Math.random()*900)+100);
    }
    return numbers;
}
let numbers=generateRandomNumber(10);
console.log("Generated Random Numbers: "+numbers);

numbers.sort((a,b)=>a-b);

let secondLargest=numbers[numbers.length-2];
let secondSmallest=numbers[1];
console.log("Second Largest Number: "+secondLargest);
console.log("Second Smallest Number: "+secondSmallest);