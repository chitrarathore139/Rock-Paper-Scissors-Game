let UserScore = document.querySelector("#userScore");
let DeviceScore = document.querySelector("#deviceScore");
const Choices = document.querySelectorAll(".choices");
let Rock= document.querySelector("#rock");
let Paper= document.querySelector("#paper");
let Scissors= document.querySelector("#scissors");
let Msg= document.querySelector(".msg");

let uScore=0;//user score
let dScore=0;//device score

const winner = (userChoice, deviceChoice) => {
    if (userChoice === deviceChoice) {
        Msg.innerText = "It's a TIE!";
        Msg.style.backgroundColor="rgb(255, 161, 177)";
    }
    else if (
        (userChoice === "rock" && deviceChoice === "scissors") ||
        (userChoice === "scissors" && deviceChoice === "paper") ||
        (userChoice === "paper" && deviceChoice === "rock")
    ) {
        Msg.innerText = `You Won! ${userChoice.toUpperCase()} beats ${deviceChoice.toUpperCase()}`;
        Msg.style.backgroundColor="#8cab81";
        uScore++;
        UserScore.innerText=uScore;
    } 
    else {
        Msg.innerText = `Oops! Device Wins! ${deviceChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
        dScore++;
        DeviceScore.innerText=dScore;
        Msg.style.backgroundColor="#ff746c";
    }
};


const GeneratedeviceChoice=()=>{
    const options=["rock","paper","scissors"];
    return  options[Math.floor(Math.random()*3)];//Math.floor() removes number after decimal
    //Math.random() generates random numbers btw 0 and 1
    //Math.randow()*3 generates random numbers btw 0 and 2
}

const playGame=(userChoice)=>{
    const deviceChoice = GeneratedeviceChoice();
    winner(userChoice, deviceChoice);
}

Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute('id');
        playGame(userChoice);
    });
});