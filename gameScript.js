let hovRock = document.getElementById('dev1');
let hovPapr = document.getElementById('dev2');
let hovScss = document.getElementById('dev3');

let bomb = document.getElementById('bomb');
let hdBomb = document.getElementById('handRock');
let txBomb = document.getElementById('txBomb');
let brBomb = document.getElementById('dev1');
let shield = document.getElementById('shield');
let hdShield = document.getElementById('handPaper');
let txShield = document.getElementById('txShield');
let brShield = document.getElementById('dev2');
let ray = document.getElementById('ray');
let hdRay= document.getElementById('handScissors');
let txRay= document.getElementById('txRay');
let brRay = document.getElementById('dev3');

//applying hover styles
hovRock.addEventListener('mouseenter', function() {
    bomb.innerHTML = '<img src="img/bomb2.png" alt="bomb">';
    hdBomb.innerHTML = '<img src="img/rock2.png" alt="rock">';
    txBomb.style.color = '#f700ff';
    brBomb.style.border = '8px solid #ffffff';
});
hovRock.addEventListener('mouseleave', function() {
    bomb.innerHTML = '<img src="img/bomb.png" alt="bomb">';
    hdBomb.innerHTML = '<img src="img/rock.png" alt="rock">';
    txBomb.style.color = '#3fff00';
    brBomb.style.border = '5px solid #3fff00';
});

hovPapr.addEventListener('mouseenter', function() {
    shield.innerHTML = '<img src="img/shield2.png" alt="shield">';
    hdShield.innerHTML = '<img src="img/paper2.png" alt="paper">';
    txShield.style.color = '#f700ff';
    brShield.style.border = '8px solid #ffffff';
});
hovPapr.addEventListener('mouseleave', function() {
    shield.innerHTML = '<img src="img/shield.png" alt="shield">';
    hdShield.innerHTML = '<img src="img/paper.png" alt="paper">';
    txShield.style.color = '#3fff00';
    brShield.style.border = '5px solid #3fff00';
});

hovScss.addEventListener('mouseenter', function() {
    ray.innerHTML = '<img src="img/ray2.png" alt="ray">';
    hdRay.innerHTML = '<img src="img/scissors2.png" alt="scissors">';
    txRay.style.color = '#f700ff';
    brRay.style.border = '8px solid #ffffff';
});
hovScss.addEventListener('mouseleave', function() {
    ray.innerHTML = '<img src="img/ray.png" alt="ray">';
    hdRay.innerHTML = '<img src="img/scissors.png" alt="scissors">';
    txRay.style.color = '#3fff00';
    brRay.style.border = '5px solid #3fff00';
});



//setting ellipsis animation
let count = 0;      
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