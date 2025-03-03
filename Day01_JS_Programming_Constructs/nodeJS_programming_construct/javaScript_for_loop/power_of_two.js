const n = parseInt(process.argv[2]);
if(isNaN(n)|| n<0){
    console.log("Invalid input! Please enter a number.");
    process.exit(1);
}

console.log("table of power 2 up to 2^"+n);
for(let i=0;i<=n;++i){
    console.log("2^"+i+" = "+Math.pow(2,i));
}