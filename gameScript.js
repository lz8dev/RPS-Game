/*window.addEventListener('DOMContentLoaded', function() {
    const trans = document.getElementById('wText');
    trans.classList.add('show');
  });*/

let count = 0;      //setting ellipsis animation
let intro = document.querySelector('.temporal');
function ellipsis (){           //change the content of 'temporal' adding the dots for ellipsis
    intro.textContent = '.' + '.'.repeat(count % 4);
    count++;
};
setInterval(ellipsis, 300);     //calls the 'ellipsis' function every 500ms, note that the function must be called without (), this calls the function itself and not its result after execution.





/*
//function to split the div
const div1 = document.createElement('div');
const div2 = document.createElement('div');

// Apply CSS styles to make div1 and div2 equal-sized
div1.style.width = '50%';
div1.style.height = '100%';
div2.style.width = '50%';
div2.style.height = '100%';

// Replace originalDiv with div1
originalDiv.parentNode.replaceChild(div1, originalDiv);

// Append div2 to the body
document.body.appendChild(div2);



//function to choose randomly an option
let choice; 
let container = document.getElementById("container");       //assign the container and its content to a variable 
container.addEventListener('click', playMatch);             //the variable is called when an event happens, in this case, click on any button
let comScore = 0,
    userScore = 0,
    plays = 0,          //attempt counter
    result,             //description of the choices
    result2;            //rounds remaining or game over

function playMatch () {                 //assign the messages values looking at the round result
    if (plays === 4) {
        compare()
        comScore === userScore ? result2 = 'GAME OVER! It´s a tie!':
        comScore > userScore ? result2 = 'GAME OVER! Computer wins the match' : 
        result2 = 'GAME OVER! You win the match';
        console.log('Computer: ' + comScore);
        console.log('you: ' + userScore);
        console.log(result2);
        comScore = 0;
        userScore = 0;
        plays = 0;
    } else {
        compare()
        plays ++;           
        result2 = 'Plays remaining: ' + (5 - plays);
        console.log('Computer: ' + comScore);
        console.log('you: ' + userScore);
        console.log(result2);
    }
    console.log('+++++++++++++++++++');
   
}

function compare() {            //compare te choices and returns the round result
    let playerSelection = event.target.name,
        computerSelection = getComputerChoice();
           
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = `You lose, ${computerSelection} beats ${playerSelection}`;
        comScore ++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `You win, ${playerSelection} beats ${computerSelection}`;
        userScore ++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = `You win, ${playerSelection} beats ${computerSelection}`;
        userScore ++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = `You lose, ${computerSelection} beats ${playerSelection}`;
        comScore ++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = `You win, ${playerSelection} beats ${computerSelection}`;
        userScore ++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = `You lose, ${computerSelection} beats ${playerSelection}`;
        comScore ++;
    } else {
        result = 'Tie'
    };
    console.log('--------------');
    console.log(result);
}

function getComputerChoice () {         //random choice between 0 and 2, assign a choice to each number
    let rdm = Math.floor(Math.random()*3);
    rdm === 0 ? choice = 'rock': 
    rdm === 1 ? choice = 'paper': 
    choice = 'scissors';
    return (choice)
}


*/