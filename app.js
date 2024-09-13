let userScore  = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#userscore");
const copmScorePara = document.querySelector("#compscore");

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const msg = document.querySelector("#msg");

const gameDraw = ()=>{
    console.log("Game was a draw");
    msg.innerText = "Game was a Draw."
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) =>{
    console.log("user", userChoice);
    const compChoice = genCompChoice();
    console.log("computer",compChoice);
    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        copmScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}