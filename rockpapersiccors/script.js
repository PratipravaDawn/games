let userScoreValue = 0;
let computerScoreValue = 0;

const choices = document.querySelectorAll('.choice');
const message = document.getElementById('msg');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');


const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

let draw = () => {
    message.textContent = "It's a draw!";
    message.style.backgroundColor = '#081b31';
};

let result = (userwin, userChoice, computerChoice) => {
    if (userwin) {
        userScoreValue++;
        userScore.textContent = userScoreValue;
        message.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = 'green';
    }
    if (!userwin) {
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
        message.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        message.style.backgroundColor = 'red';
    }
};

let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        draw();
    }
    let userwin = true;
    if (userChoice === 'rock') {
        // paper, scissors
        userwin = (computerChoice === 'scissors')? true : false;
    } else if (userChoice === 'paper') {
        // rock, scissors
        userwin = (computerChoice === 'rock')? true : false;
    } else if (userChoice === 'scissors') {
        // rock, paper
        userwin = (computerChoice === 'paper')? true : false;
    }
    result(userwin, userChoice, computerChoice);
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        const computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
    });
});