//hover behaviour unoptimized
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
    brBomb.style.border = '4px solid #3fff00';
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
    brShield.style.border = '4px solid #3fff00';
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
    brRay.style.border = '4px solid #3fff00';
});

/*hover code optimized (assess)

// Define a single event listener on the parent container
document.querySelector('.selector').addEventListener('mouseenter', function(event) {
    // Check if the event target has the class 'device'
    if (event.target.classList.contains('device')) {
      // Get the necessary elements based on the event target
      let image = event.target.querySelector('.image');
      let hdImage = event.target.querySelector('.hdImage');
      let text = event.target.querySelector('.opText');
      let border = event.target;
  
      // Modify the elements as needed
      image.innerHTML = '<img src="img/bomb2.png" alt="bomb">';
      hdImage.innerHTML = '<img src="img/rock2.png" alt="rock">';
      text.style.color = '#f700ff';
      border.style.border = '8px solid #ffffff';
    }
  });
  
  // Define another event listener on the parent container for mouseleave
  document.querySelector('.selector').addEventListener('mouseleave', function(event) {
    // Check if the event target has the class 'device'
    if (event.target.classList.contains('device')) {
      // Get the necessary elements based on the event target
      let image = event.target.querySelector('.image');
      let hdImage = event.target.querySelector('.hdImage');
      let text = event.target.querySelector('.opText');
      let border = event.target;
  
      // Modify the elements as needed
      image.innerHTML = '<img src="img/bomb.png" alt="bomb">';
      hdImage.innerHTML = '<img src="img/rock.png" alt="rock">';
      text.style.color = '#3fff00';
      border.style.border = '5px solid #3fff00';
    }
  });

*/


/*
deactivate this ellipsis script when the user makes his first move, reactivate when the user clicks on 'play again' (HTML: start status)
*/

//setting ellipsis animation
let count = 0;      
function ellipsis (){           //change the content of 'temporal' adding the dots for ellipsis
    let intro = document.querySelector('.temporal');
    if (intro){
        intro.textContent = '.' + '.'.repeat(count % 4);
        count++;
    };
};
setInterval(ellipsis, 200);     //calls the 'ellipsis' function every 500ms, note that the function must be called without (), this calls the function itself and not its result after execution.


// game logic
let choice; 
let container = document.getElementById("selectorID");       //assign the container and its content to a variable, when any element inside 'selectorID' is clicked, the function is triggered
container.addEventListener('click', playMatch);             //the variable is called when an event happens, in this case, click on any option

let comScore = 0,
    userScore = 0,
    plays = 0,          //attempt counter
    result,             //description of the choices
    result2;            //rounds remaining or game over


function playMatch () {                 //assign the messages values looking at the round result
    if (comScore === 5 || userScore === 5) {
        compare()
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

function compare() {            //compare the choices and returns the round result
    let playerSelection = event.target.dataset.cname,
        computerSelection = getComputerChoice();
           
    if (playerSelection === 'Blast Bomb' && computerSelection === 'Energy Shield') {
        result = `-The ${computerSelection} blocks the ${playerSelection}-`;
        comScore ++;
    } else if (playerSelection === 'Blast Bomb' && computerSelection === 'Gamma Ray') {
        result = `-The ${playerSelection} destroys the ${computerSelection}-`;
        userScore ++;
    } else if (playerSelection === 'Energy Shield' && computerSelection === 'Blast Bomb') {
        result = `-The ${playerSelection} blocks the ${computerSelection}-`;
        userScore ++;
    } else if (playerSelection === 'Energy Shield' && computerSelection === 'Gamma Ray') {
        result = `-The ${computerSelection} pierces the ${playerSelection}-`;
        comScore ++;
    } else if (playerSelection === 'Gamma Ray' && computerSelection === 'Energy Shield') {
        result = `-The ${playerSelection} pierces the ${computerSelection}-`;
        userScore ++;
    } else if (playerSelection === 'Gamma Ray' && computerSelection === 'Blast Bomb') {
        result = `-The ${computerSelection} destroys the ${playerSelection}-`;
        comScore ++;
    } else {
        result = '-Mutual destruction-';
    };
    return (result);
}

function getComputerChoice () {         //random choice between 0 and 2, assign a choice to each number
    let rdm = Math.floor(Math.random()*3);
    rdm === 0 ? choice = 'Blast Bomb': 
    rdm === 1 ? choice = 'Energy Shield': 
    choice = 'Gamma Ray';
    return (choice);
}



function chgToMain(){
    let element = document.getElementById('statusID')
    element.innerHTML = `
        <div class="startImage" id="lBolt">
            <img src="img/bolt.png" alt="lBolt">
        </div>
        <div class="startTitle">
            CHOOSE YOUR DEVICE<br><div class="temporal"></div>
        </div>
        <div class="startImage" id="rBolt">
            <img src="img/bolt.png" alt="lBolt">
        </div>`
}

function chgToPlay(){
    let element = document.getElementById('statusID');
    element.innerHTML = `
        <div class="selection">
            <div class="sTitle">
                STATUS
            </div>
            <div class="sDiv" id="statDiv"></div>
        </div>
        <div class="score">
            <div class="sTitle">   
                SCORE
            </div>
            <div class="sDiv" id="scrDiv"></div>
        </div>`
}

function chgToThink(){
    let element = document.getElementById('statDiv');
    element.innerHTML = `
        <div class="think">
            A.I. IS THINKING <br><div class="temporal"></div>
        </div>`;
}

function chgToStat(){
    let element = document.getElementById('statDiv');
    element.innerHTML = `
        <div class="division" id="selUser">
            <div class="marker1">YOUR SELECTION</div>
            <div class="marker2" id="selImgUser">---</div>
        </div>
        <div class="division" id="selCpu">
            <div class="marker1">A.I. SELECTION</div>
            <div class="marker2" id="selImgCpu">---</div>
        </div>`
}

function chgToScr(){
    let element = document.getElementById('scrDiv');
    element.innerHTML = `
        <div class="division" id="scrUser">
            <div class="marker1">YOUR SCORE</div>
            <div class="marker2 image" id="scrImgUser">---</div>
        </div>
        <div class="division" id="scrCpu">
            <div class="marker1">A.I. SCORE</div>
            <div class="marker2 image" id="scrImgCpu">---</div>
        </div>`
}

function userPoints(){
    let element = document.getElementById('scrImgUser');
    userScore === 0 ? element.innerHTML = `<img src="img/0p.png">`: 
    userScore === 1 ? element.innerHTML = `<img src="img/1p.png">`:
    userScore === 2 ? element.innerHTML = `<img src="img/2p.png">`:
    userScore === 3 ? element.innerHTML = `<img src="img/3p.png">`:
    userScore === 4 ? element.innerHTML = `<img src="img/4p.png">`:
    userScore === 5 ? element.innerHTML = `<img src="img/5p.png">`:
    element = '---';
}

function cpuPoints(){
    let element = document.getElementById('scrImgCpu');
    comScore === 0 ? element.innerHTML = `<img src="img/0p.png">`: 
    comScore === 1 ? element.innerHTML = `<img src="img/1p.png">`:
    comScore === 2 ? element.innerHTML = `<img src="img/2p.png">`:
    comScore === 3 ? element.innerHTML = `<img src="img/3p.png">`:
    comScore === 4 ? element.innerHTML = `<img src="img/4p.png">`:
    comScore === 5 ? element.innerHTML = `<img src="img/5p.png">`:
    element = '---';
}

/*<div class="division" id="scrUser">
            <div class="marker1">USER SCORE</div>
            <div class="marker2 image" id="scrUserImg">
                <img src="img/5pf.png">
            </div>
        </div>

        <div class="division" id="scrCpu">
            <div class="marker1">A.I. SCORE</div>
            <div class="marker2 image" id="scrCpuImg">
                <img src="img/2p.png">
            </div>
        </div>


/*
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

-The Blast Bomb destroys the Gamma Ray-
-The Energy Shield blocks the Blast Bomb-
-The Gamma Ray pierces the Energy Shield-

*/