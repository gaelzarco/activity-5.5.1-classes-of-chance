class Casino {
    constructor(name, isFakeCoin, timesPlayed, amountWon) {
        this.name = name;
        this.timesPlayed = 0;
        this.amountWon = 0;
        this.isFakeCoin = isFakeCoin;
    }
    playGame(betAmount){
        if (Math.random() <= 0.5 || this.isFakeCoin){
            console.log(this.name + " Casino wins!!")
            this.timesPlayed++
        } else {
            console.log("You won " + betAmount + " dollars from " + this.name + " Casino!")
            this.timesPlayed++
            this.amountWon = this.amountWon + betAmount
        } 
    }
    rollDie(max){
        console.log(Math.ceil(Math.random()*max))
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino", false);
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
