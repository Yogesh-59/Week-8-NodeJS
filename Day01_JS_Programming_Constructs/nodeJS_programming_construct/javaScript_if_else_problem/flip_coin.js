function flipCoin(){
    let coin=Math.random();
    if(coin<0.5){
        return 'Heads';
    }
    else{
        return 'Tails';
    }
}
console.log(flipCoin());