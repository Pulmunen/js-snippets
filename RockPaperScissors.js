let hands = ["rock", "paper", "scissor"]


function rockPaperScissors(){
let decision = Math.floor(Math.random()*3)
let outcome = hands[decision]
console.log(outcome)   
}
rockPaperScissors()
