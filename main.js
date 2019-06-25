const choices = document.querySelectorAll('.choices');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');


const scoreboard = {
    player: 0,
    computer: 0
}

//PLAY GAME
function play(e) {
    let {player, comp} = scoreboard;
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}


//RESET GAME


// Get Computer Choice

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3 );
    if(rand === 0) {
        return 'rock';
    } else if (rand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// GET RESULT

function getWinner(p, c) {
    if(p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if(c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper') {
        if(c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors') {
        if(c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}


function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        //Increment player score
        scoreboard.player++;
        //Show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    } else if (winner === 'computer'){
        //Increment player score
        scoreboard.computer++;
        //Show modal result
        result.innerHTML = `
        <h1 class="text-win">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    } else {
        //Show modal result
        result.innerHTML = `
        <h1 class="text-win">Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
    }

    //Show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'inline-block';
    setTimeout(()=> {
        modal.style.display = 'none';
    },2500);
 }

    //Restart Game
    function restartGame() {
        scoreboard.player = 0;
        scoreboard.computer = 0;
        score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
    }

    //Clear Modal
    function clearModal(e) {
       if(e.target === modal) {
           modal.style.display = 'none';
       }
    }

    


//Event Listeners

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

