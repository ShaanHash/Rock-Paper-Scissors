function computerPlay() {
    let x = Math.floor(Math.random() * 3)  
    switch(x) {
        case 0:
            return "R";
        case 1:
            return "P";
        case 2:
            return "S";
    }
};

function game(com, player) {

    if (com == player) {
        return "Tie";
    } else if (com == "R" && player == "P") {
        return "Win";
    } else if (com == "R" && player == "S") {
        return "Lose";
    } else if (com == "P" && player == "S") {
        return "Win";
    } else if (com == "P" && player == "R") {
        return "Lose";
    } else if (com == "S" && player == "R") {
        return "Win";
    } else {
        return "Lose";
    };
};



let buttons = document.querySelectorAll(".button")

let rounds = 0
let wins = 0
let losses = 0

buttons.forEach((element) => {

    element.addEventListener('click', () => {
        let result = game(element.dataset.key,computerPlay());
        if (result == "Win") {wins++};
        if (result == "Lose") {losses++};

        rounds++;
       

        switch(rounds) {
            case 1:
                if (result == "Tie") {
                    document.querySelector("[data-key=r1]").classList.add("card-grey");
                    document.querySelector("[data-key=r1]").innerText = "Tie";
                } else if (result == "Lose") {
                    document.querySelector("[data-key=r1]").classList.add("card-red");
                    document.querySelector("[data-key=r1]").innerText = "Loss";
                } else {
                    document.querySelector("[data-key=r1]").classList.add("card-green");
                    document.querySelector("[data-key=r1]").innerText = "Win";
                }
                break;   
            case 2:
                if (result == "Tie") {
                    document.querySelector("[data-key=r2]").classList.add("card-grey");
                    document.querySelector("[data-key=r2]").innerText = "Tie";
                } else if (result == "Lose") {
                    document.querySelector("[data-key=r2]").classList.add("card-red");
                    document.querySelector("[data-key=r2]").innerText = "Loss";
                } else {
                    document.querySelector("[data-key=r2]").classList.add("card-green");
                    document.querySelector("[data-key=r2]").innerText = "Win";
                }
                break;
            case 3:
                if (result == "Tie") {
                    document.querySelector("[data-key=r3]").classList.add("card-grey");
                    document.querySelector("[data-key=r3]").innerText = "Tie";
                } else if (result == "Lose") {
                    document.querySelector("[data-key=r3]").classList.add("card-red");
                    document.querySelector("[data-key=r3]").innerText = "Loss";
                    
                } else {
                    document.querySelector("[data-key=r3]").classList.add("card-green");
                    document.querySelector("[data-key=r3]").innerText = "Win";
                }
                break;
            case 4:
                if (result == "Tie") {
                    document.querySelector("[data-key=r4]").classList.add("card-grey");
                    document.querySelector("[data-key=r4]").innerText = "Tie";
                } else if (result == "Lose") {
                    document.querySelector("[data-key=r4]").classList.add("card-red");
                    document.querySelector("[data-key=r4]").innerText = "Loss";
                } else {
                    document.querySelector("[data-key=r4]").classList.add("card-green");
                    document.querySelector("[data-key=r4]").innerText = "Win";
                }
                break;  
            case 5:
                if (result == "Tie") {
                    document.querySelector("[data-key=r5]").classList.add("card-grey");
                    document.querySelector("[data-key=r5]").innerText = "Tie";
                } else if (result == "Lose") {
                    document.querySelector("[data-key=r5]").classList.add("card-red");
                    document.querySelector("[data-key=r5]").innerText = "Loss";
                } else {
                    document.querySelector("[data-key=r5]").classList.add("card-green");
                    document.querySelector("[data-key=r5]").innerText = "Win";
                }
                break;        
        };

        if (wins >=3) {
            document.querySelector(".results").innerText = "You Won!";
        } else if (losses >=3) {
            document.querySelector(".results").innerText = "You Lost";
        } else if (rounds >= 5) {
            document.querySelector(".results").innerText = "You Tied";
        };

    });
});

document.querySelector(".reset").addEventListener('click', () => {

    document.querySelector(".results").innerText = "";
    let cards = document.querySelectorAll(".card");
    console.log(cards);


    cards.forEach((element) => {
        element.classList.remove("card-grey");
        element.classList.remove("card-red");
        element.classList.remove("card-green");
    });

    document.querySelector("[data-key=r1]").innerText = "Round 1";
    document.querySelector("[data-key=r2]").innerText = "Round 2";
    document.querySelector("[data-key=r3]").innerText = "Round 3";
    document.querySelector("[data-key=r4]").innerText = "Round 4";
    document.querySelector("[data-key=r5]").innerText = "Round 5";

    wins = 0;
    rounds = 0;
    losses = 0;

});