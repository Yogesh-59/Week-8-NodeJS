function generateRandomNumber(count){
    let numbers=[];
    for(let i=0;i<count;i++){
        numbers.push(Math.floor(Math.random()*900)+100);
    }
    return numbers;
}
let numbers=generateRandomNumber(10);
console.log("Generated Random Numbers: "+numbers);

function findSecondLargestAndSmallest(numbers){
    let firstLargest=numbers[0];
    let secondLargest=numbers[0];
    let firstSmallest=numbers[0];
    let secondSmallest=numbers[0];
    for(let num of numbers){
       if (num >firstLargest)  {
             secondLargest=firstLargest;
             firstLargest=num;
       }
       else if (num >secondLargest && num!=firstLargest){
            secondLargest=num;
       }
         if (num <firstSmallest)  {
             secondSmallest=firstSmallest;
             firstSmallest=num;
         }
         else if (num <secondSmallest && num!=firstSmallest){
            secondSmallest=num;
         }
    }
    return {secondLargest,secondSmallest};
}
let result=findSecondLargestAndSmallest(numbers);
console.log("Second Largest Number: "+result.secondLargest);
console.log("Second Smallest Number: "+result.secondSmallest);