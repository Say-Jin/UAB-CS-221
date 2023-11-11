const choices = ['rock', 'paper', 'scissors'];

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(result) {
        document.getElementById('result').innerText = result;
    }

    function playGame(userChoice) {
        const compChoice = computerChoice();
        const result = determineWinner(userChoice, compChoice);
        displayResult(`You chose ${userChoice}, computer chose ${compChoice}. ${result}`);
    }

    document.getElementById('rock').addEventListener('click', function() {
        playGame('rock');
    });

    document.getElementById('paper').addEventListener('click', function() {
        playGame('paper');
    });

    document.getElementById('scissors').addEventListener('click', function() {
        playGame('scissors');
    });