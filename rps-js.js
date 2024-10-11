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


let humanScore = 0;
let cpuScore = 0;


function playGame(choice) {
        const humanSelection = choice;
        const computerSelection = getComputerChoice();
        console.log('Human choice: ' + humanSelection);
        console.log('Cpu choice: ' + computerSelection);
        
        if(humanScore === 5) return "You win!";
        else if(cpuScore === 5){
            return "YOu lose!";
        }

        if(humanSelection == 'rock' && computerSelection == 'paper'){
            cpuScore++;
            let result =  'You lose! Paper beats rock.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore; 
                resultsDiv.style.backgroundColor = 'red';
            return result;
        }
        else if(humanSelection == 'paper' && computerSelection == 'rock'){
            humanScore++;
            let result =  'You win! Paper beats rock.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore; 
                resultsDiv.style.backgroundColor = 'green';
            return result;
        }
        else if(humanSelection == 'rock' && computerSelection == 'scissors'){
            humanScore++;
            let result =  'You win! Rock beats scissors.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'green'; 
            return result;
        }
        else if(humanSelection == 'scissors' && computerSelection == 'rock'){
            cpuScore++;
            let result = 'You lose! Rock beats scissors.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore; 
                resultsDiv.style.backgroundColor = 'red';
            return result;
        }
        else if(humanSelection == 'paper' && computerSelection == 'scissors'){
            cpuScore++;
            let result = 'You lose! Scissors beats paper.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'red';
            return result;
        }
        else if(humanSelection == 'scissors' && computerSelection == 'paper'){
            humanScore++;
            let result =  'You win! Scissors beats paper.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'green';
            return result;
        }
        else if(humanSelection == 'scissors' && computerSelection == 'scissors'){
            let result =  'You both choose scissors. Nobody wins.'+
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'black';
            return result;
        }
        else if(humanSelection == 'rock' && computerSelection == 'rock'){
            let result =  'You both choose rock. Nobody wins.' +
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'black';
            return result;
        }
        else if(humanSelection == 'paper' && computerSelection == 'paper'){
            let result =  'You both choose paper. Nobody wins.'+
                ' Human score : ' + humanScore + ' ' +'Cpu score : ' + cpuScore;
                resultsDiv.style.backgroundColor = 'black';
            return result;
        }

}



const rockButton = document.querySelector("#rock");
rockButton.textContent = "Rock";


const paperButton = document.querySelector("#paper");
paperButton.textContent = "Paper";


const scissorsButton = document.querySelector("#scissors");
scissorsButton.textContent = "Scissors";


const resultsDiv = document.querySelector(".resultDiv");

rockButton.addEventListener("click", () => {
    let result = playGame("rock");
    resultsDiv.textContent = result;
});

paperButton.addEventListener("click", () => {
    let result = playGame("paper");
    resultsDiv.textContent = result;
});

scissorsButton.addEventListener("click", () => {
    let result = playGame("scissors");
    resultsDiv.textContent = result;
});

