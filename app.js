let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
let pid = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

genCompChoice=()=>{
  const compchoices = ["rock" , "paper" , "scissors"];
  let rand = Math.floor(Math.random()*3);
  return compchoices[rand];
}

drawGame=()=>{
  pid.innerText = "DRAW, play again!";
  pid.style.background = "#081b31";
}

let winner = true;

showWinner=(winner , userChoice , compChoice)=>{
  if(winner){
    user++;
    userScore.innerText = user;
    pid.innerText = `You Won! Your Choice ${userChoice} beats ${compChoice}`;
    pid.style.background = "green";
  }else{
    comp++;
    compScore.innerText = comp;
    pid.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
    pid.style.background = "red";
  }
}

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{

    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
