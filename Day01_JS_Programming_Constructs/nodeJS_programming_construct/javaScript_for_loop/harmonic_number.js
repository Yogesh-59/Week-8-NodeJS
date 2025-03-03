const n=parseInt(process.argv[2]);
function harmonicNumber(n){

    if(isNaN(n)|| n<0){
        console.log("Invalid input! Please enter a number.");
        process.exit(1);
    }

    let harmonicNumber=0;
    for(let i=1;i<=n;++i){
        harmonicNumber+=1/i;
    }
    return harmonicNumber;
}
console.log("Harmonic series up to "+n+" terms:"+harmonicNumber(n));
