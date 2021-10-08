function computerPlay() {
    let x = Math.floor(Math.random() * 3)  

    switch(x) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

}

function playRound(playerSelection, computerSelection) {

    move = playerSelection.charAt(0);
    cmove = computerSelection.charAt(0);

    switch(cmove) {
        case "R":
            if ((move == "R") || (move == "r")) {
                return "Tie";
            } else if (move == "S" || move == "s") {
                return "Computer wins";
            } else {
                return "Player wins";
            }
        case "P":
            if ((move == "R") || (move == "r")) {
                return "Computer wins";
            } else if (move == "S" || move == "s") {
                return "Player wins";
            } else {
                return "Tie";
            }
        case "S":
            if ((move == "R") || (move == "r")) {
                return "Player wins";
            } else if (move == "S" || move == "s") {
                return "Tie";
            } else {
                return "Computer wins";
            }

    }
}


function game() {

    let x = prompt("Please select either Rock, Paper, or Scissors")
    let y = computerPlay()

    for (let i = 0; i < 5; i++) {
        console.log(playRound(x,y))
        y = computerPlay()
    }


}