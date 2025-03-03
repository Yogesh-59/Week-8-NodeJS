const prompt =require('prompt-sync')();
let num=parseInt(prompt ("Enter the number: "));

if (num >1){
    let factorsArray=primeFactors(num);
    console.log("prime factors of "+num+" are: "+factorsArray);
}
else{
    console.lof("Invalid Input");
}
function primeFactors(n){
    let factors=[];
    while (n%2==0){
        factors.push(2);
        n=n/2;
    }
    for (let i=3;i*i<=n;i=i+2){
        while(n%i==0){
            factors.push(i);
            n=n/i;
        }
    }
    if(n>2){
        factors.push(n);
    }
    return factors;
}
