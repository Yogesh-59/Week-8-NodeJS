
function repeatedDigits(){
    let repeatedNumber=[];
     for(let i=10;i<100;++i){
        let tens=i/10;
        let ones=i%10;
        if (tens==ones){
            repeatedNumber.push(i);
        }
     }
     return repeatedNumber;
}
let result=repeatedDigits();
console.log("Repeated Digits are: ",result);