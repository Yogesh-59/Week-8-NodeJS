const prompt = require('prompt-sync')();
const GOAL_AMOUNT = 200;
const INITIAL_AMOUNT = 100;
const BET_AMOUNT = 1;
function gamblerGame() {
    let money = INITIAL_AMOUNT;
    let bets = 0;
    let wins = 0;

    while (money > 0 && money < GOAL_AMOUNT) {
        bets++;
        let gambleResult = Math.random(); // Random number between 0 and 1

        if (gambleResult < 0.5) {
            // Loss case
            money -= BET_AMOUNT;
        } else {
            // Win case
            money += BET_AMOUNT;
            wins++;
        }
    }
    console.log("Final Amount: Rs " + money);
    console.log("Total Bets Placed: "+bets);
    console.log("Total Wins: "+wins);
    if (money === GOAL_AMOUNT) {
        console.log("Congratulations! You reached your goal ");
    } else {
        console.log("You went broke! Better luck next time ");
    }
}
gamblerGame();