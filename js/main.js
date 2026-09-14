const minBet = 5 
const maxBet = 50
let balance = 1000
const symbols = ["🍒", "🍎", "🍊", "🍌", "🥥"]
const winningFactor = 2

// created variables to be then be able to show reel array value per reel, after spin
const reel1inHTML = document.getElementById("reel1");
const reel2inHTML = document.getElementById("reel2");
const reel3inHTML = document.getElementById("reel3");

document.querySelector('#submitBetStartSpin').addEventListener('click', slotMachine);

function slotMachine(){
    let bet = Number(document.getElementById('bet').value)
    //check our input, input already has constraints in HTML, this if below just makes sure that you can't bet more than you're balance
    if (bet >= minBet && bet <= maxBet && bet <= balance){
        const reel1 = symbols[Math.floor(Math.random() * symbols.length)]
        const reel2 = symbols[Math.floor(Math.random() * symbols.length)]
        const reel3 = symbols[Math.floor(Math.random() * symbols.length)]
        // so I can see what values are generated:
        console.log(reel1, reel2, reel3)
        //then, display random selected array values aka, my symbols
        reel1inHTML.textContent = reel1;
        reel2inHTML.textContent = reel2;
        reel3inHTML.textContent = reel3;
        // what happens if reels match? What happens if reels don't match?
        if (reel1 === reel2 && reel2 === reel3) {
        console.log('Win')
        balance = balance + bet * winningFactor
        document.querySelector('#message').innerText = 'You Win!'
        document.querySelector('#balance').innerText = ('$ ' + String(balance))
        } else {
        console.log('Lose')
        balance = balance - bet
        console.log(balance, bet)
        document.querySelector('#message').innerText = 'You Lose!'
        document.querySelector('#balance').innerText = ('$ ' + String(balance))
        }
        } else if (bet > 50){
        document.querySelector('#message').innerText = "Can't bet that much, pick a value between $5 and $50"
        } else {
            // to get to this, balance must be less than min bet, so no bet can be placed
            console.log("Invalid bet", balance, bet)
            document.querySelector('#message').innerText = 'What did you enter? Check your Balance!'
        }
}
