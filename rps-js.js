function getComputerChoice() {
    let randomNum = parseInt(Math.random() * 3);
    let choice = 'choice';

    if(randomNum == 0){
        choice = 'rock';
    }
    else if(randomNum == 1){
        choice = 'paper';
    }
    else if(randomNum == 2){
        choice = 'scissors';
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Please enter either rock/paper/scissors").toLowerCase();
    return choice;
}

let humanScore = 0;
let cpuScore = 0;

function playRound(humanChoice,cpuChoice) {
    console.log('Human choice: ' + humanChoice);
    console.log('Cpu choice: ' + cpuChoice);
    if(humanChoice == 'rock' && cpuChoice == 'paper'){
        console.log('You lose! Paper beats rock.');
        cpuScore++
    }
    else if(humanChoice == 'paper' && cpuChoice == 'rock'){
        console.log('You win! Paper beats rock.');
        humanScore++
    }
    else if(humanChoice == 'rock' && cpuChoice == 'scissors'){
        console.log('You win! Rock beats scissors.');
        humanScore++
    }
    else if(humanChoice == 'scissors' && cpuChoice == 'rock'){
        console.log('You lose! Rock beats scissors.');
        cpuScore++
    }
    else if(humanChoice == 'paper' && cpuChoice == 'scissors'){
        console.log('You lose! Scissors beats paper.');
        cpuScore++
    }
    else if(humanChoice == 'scissors' && cpuChoice == 'paper'){
        console.log('You win! Scissors beats paper.');
        humanScore++
    }
    else if(humanChoice == 'scissors' && cpuChoice == 'scissors'){
        console.log('You both choose scissors. Nobody wins.');
    }
    else if(humanChoice == 'rock' && cpuChoice == 'rock'){
        console.log('You both choose rock. Nobody wins.');
    }
    else if(humanChoice == 'paper' && cpuChoice == 'paper'){
        console.log('You both choose paper. Nobody wins.');
    }
}

function playGame() {
    for(let i= 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log('Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore);
    }
}

playGame();



