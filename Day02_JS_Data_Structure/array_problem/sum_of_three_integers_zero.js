const prompt=require('prompt-sync')();
let num=prompt("Enter the number: ").split(' ').map(Number);
findTriplets(num);
function findTriplets(num){
    let len=num.length;
    let found=false;
    for (let i=0;i<len-2;++i){
        for (let j=i+1;j<len-1;++j){
            for(let k=j+1;k<len;++k){
                if (num[i]+num[j]+num[k]==0){
                    console.log(num[i]+","+num[j]+","+num[k]);
                    found =true;
                }
            }
        }
    }
    if(!found){
        console.log("Triplets not found");
    }
}