//variables
let comScore = 0,
    userScore = 0,
    plays = 0,          //attempt counter
    result,             //description of the choices
    result2,           //rounds remaining or game over
    isPlaying = false;

//hover behaviour unoptimized
function hoverListener() {
    let hovRock = document.getElementById('dev1'),
        hovPapr = document.getElementById('dev2'),
        hovScss = document.getElementById('dev3'),
        bomb = document.getElementById('bomb'),
        hdBomb = document.getElementById('handRock'),
        txBomb = document.getElementById('txBomb'),
        brBomb = document.getElementById('dev1'),
        shield = document.getElementById('shield'),
        hdShield = document.getElementById('handPaper'),
        txShield = document.getElementById('txShield'),
        brShield = document.getElementById('dev2'),
        ray = document.getElementById('ray'),
        hdRay= document.getElementById('handScissors'),
        txRay= document.getElementById('txRay'),    
        brRay = document.getElementById('dev3');

    //applying hover styles
    hovRock.addEventListener('mouseenter', function() {
        if (!isPlaying) {
            bomb.innerHTML = '<img src="img/bomb2.png" alt="bomb">';
            hdBomb.innerHTML = '<img src="img/rock2.png" alt="rock">';
            txBomb.style.color = '#f700ff';
            brBomb.style.border = '8px solid #ffffff';
        };
    });
    
    hovRock.addEventListener('mouseleave', function() {
        bomb.innerHTML = '<img src="img/bomb.png" alt="bomb">';
        hdBomb.innerHTML = '<img src="img/rock.png" alt="rock">';
        txBomb.style.color = '#3fff00';
        brBomb.style.border = '4px solid #3fff00';
    });

    

    hovPapr.addEventListener('mouseenter', function() {
        if (!isPlaying) {
            shield.innerHTML = '<img src="img/shield2.png" alt="shield">';
            hdShield.innerHTML = '<img src="img/paper2.png" alt="paper">';
            txShield.style.color = '#f700ff';
            brShield.style.border = '8px solid #ffffff';
        };
    });

    hovPapr.addEventListener('mouseleave', function() {
        shield.innerHTML = '<img src="img/shield.png" alt="shield">';
        hdShield.innerHTML = '<img src="img/paper.png" alt="paper">';
        txShield.style.color = '#3fff00';
        brShield.style.border = '4px solid #3fff00';
    });

    hovScss.addEventListener('mouseenter', function() {
        if (!isPlaying) {
            ray.innerHTML = '<img src="img/ray2.png" alt="ray">';
            hdRay.innerHTML = '<img src="img/scissors2.png" alt="scissors">';
            txRay.style.color = '#f700ff';
            brRay.style.border = '8px solid #ffffff';
        };
    });

    hovScss.addEventListener('mouseleave', function() {
        ray.innerHTML = '<img src="img/ray.png" alt="ray">';
        hdRay.innerHTML = '<img src="img/scissors.png" alt="scissors">';
        txRay.style.color = '#3fff00';
        brRay.style.border = '4px solid #3fff00';
    });
};
hoverListener();

//setting ellipsis animation
let count = 0,
    choice,
    container = document.getElementById("selectorID");       //assign the container and its content to a variable, when any element inside 'selectorID' is clicked, the function is triggered

function ellipsis (){           //change the content of 'temporal' adding the dots for ellipsis
    let intro = document.querySelector('.temporal');
    if (intro){
        intro.textContent = '.' + '.'.repeat(count % 4);
        count++;
    };
};
setInterval(ellipsis, 200);     //calls the 'ellipsis' function every 500ms, note that the function must be called without (), this calls the function itself and not its result after execution.

container.addEventListener('click', blockClick);             //the variable is called when an event happens, in this case, click on any option, without () to avoid calling the playMatche function immediately and passing its return value (undefined) as the callback function to the addEventListener method.

function playMatches(event){
    let device = event.target.closest('.device');       //using event.target will refer to the innermost element clicked as the images or text, none of them has the 'cname'so when clikced the result will be undefined. Instead is used 'closest' that will search for the closest ancestor div with the class "device" and then access its data-cname attribute
    if (device){
        let tname = device.dataset.cname;
        console.log(tname);
    }    
}

function blockClick(event) {
    if (!isPlaying) {
        let device = event.target.closest('.device');
        if (!device) {
        return; // return if the clicked element is not a device
        }
        isPlaying = true; // Set the condition to block the event listener
        playMatch(event);
    }
}

function playMatch (event) {     //assign the messages values looking at the round result
    let device = event.target.closest('.device');
    if (device){
        let playerSelection = device.dataset.cname,
            computerSelection = getComputerChoice(),
            winner;
        compare(playerSelection, computerSelection);
        chgToPlay();
        chgToThink();
            setTimeout(function () {
                chgToStat();
                userSel(playerSelection);
                cpuSel(computerSelection);
                chgToResult();
                setTimeout(function(){
                    chgToScr();
                    userPoints(userScore);
                    cpuPoints(comScore);
                    isPlaying = false;
                    setTimeout(function(){
                        if (comScore === 5) {   
                            winner = 'A.I. WINS';    
                            chgToGmOver(winner);
                        } else if (userScore === 5){
                            winner = 'YOU WIN';
                            chgToGmOver(winner);
                        } else {
                            winner = 0;
                        };
                        winFlick(winner);
                    }, 0);
                }, 2000);
            }, 1000);
            console.log(result, result2, userScore, comScore, playerSelection, computerSelection);
    }
}

function winFlick(winner) { 
    let fivePuser = document.getElementById('fivePuser'),
        fivePcpu = document.getElementById('fivePcpu'),
        images = ['img/5p.png', 'img/5pf.png'],
        counter = 0;
        
    if (winner === 'A.I. WINS') {
        let flickInterval = setInterval(function() {
        if (counter < 6) { // Flicker three times (6 toggles)
            fivePcpu.src = images[counter % 2];
            counter++;
        } else {
            clearInterval(flickInterval); // Clear the interval after three flickers
            fivePcpu.src = images[1]; // Set the image to 5pf.png
        }
        }, 200); // Adjust the interval duration (in milliseconds) as desired
    } else if (winner === 'YOU WIN') {
        let flickInterval = setInterval(function() {
        if (counter < 6) { // Flicker three times (6 toggles)
            fivePuser.src = images[counter % 2];
            counter++;
        } else {
            clearInterval(flickInterval); // Clear the interval after three flickers
            fivePuser.src = images[1]; // Set the image to 5pf.png
        }
      }, 200); // Adjust the interval duration (in milliseconds) as desired 
    } else {
      return;
    }
}

/*function winFlick(winner) { 
    let fiveUser = document.getElementById('scrImgUser'),
        fiveCpu = document.getElementById('scrImgCpu')
        images = ['img/5p.png', 'img/5pf.png'];
        counter = 0;

    if (winner === 'A.I. WINS'){
        let flickInterval = setInterval(function() {
            if (counter < 6) { // Flicker three times (6 toggles)
            fiveCpu.style.backgroundImage = `url(${images[counter % 2]})`;
            counter++;
            } else {
            clearInterval(flickInterval); // Clear the interval after three flickers
            fiveCpu.style.backgroundImage = `url(${images[1]})`; // Set the background to 5pf.png
            }
        }, 200); // Adjust the interval duration (in milliseconds) as desired
    } else if (winner === 'YOU WIN'){
        let flickInterval = setInterval(function() {
            if (counter < 6) { // Flicker three times (6 toggles)
            fiveUser.style.backgroundImage = `url(${images[counter % 2]})`;
            counter++;
            } else {
            clearInterval(flickInterval); // Clear the interval after three flickers
            fiveUser.style.backgroundImage = `url(${images[1]})`; // Set the background to 5pf.png
            }
        }, 200); // Adjust the interval duration (in milliseconds) as desired 
    } else {
        return;
    }
}*/

function compare(playerSelection, computerSelection) {            //compare the choices and returns the round result
    if (playerSelection === 'Blast Bomb' && computerSelection === 'Energy Shield'){
        result = `-The ${computerSelection} blocks the ${playerSelection}-`;
        result2 = `YOU LOSE!`;
        comScore ++;
    } else if (playerSelection === 'Blast Bomb' && computerSelection === 'Gamma Ray') {
        result = `-The ${playerSelection} destroys the ${computerSelection}-`;
        result2 = `YOU WIN!`;
        userScore ++;
    } else if (playerSelection === 'Energy Shield' && computerSelection === 'Blast Bomb') {
        result = `-The ${playerSelection} blocks the ${computerSelection}-`;
        result2 = `YOU WIN!`;
        userScore ++;
    } else if (playerSelection === 'Energy Shield' && computerSelection === 'Gamma Ray') {
        result = `-The ${computerSelection} pierces the ${playerSelection}-`;
        result2 = `YOU LOSE!`;
        comScore ++;
    } else if (playerSelection === 'Gamma Ray' && computerSelection === 'Energy Shield') {
        result = `-The ${playerSelection} pierces the ${computerSelection}-`;
        result2 = `YOU WIN!`;
        userScore ++;
    } else if (playerSelection === 'Gamma Ray' && computerSelection === 'Blast Bomb') {
        result = `-The ${computerSelection} destroys the ${playerSelection}-`;
        result2 = `YOU LOSE!`;
        comScore ++;
    } else {
        result = '-Mutual destruction-';
        result2 = `TIE!`;
    }
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
            <div class="marker2 image" id="selImgUser">---</div>
        </div>
        <div class="division" id="selCpu">
            <div class="marker1">A.I. SELECTION</div>
            <div class="marker2 image" id="selImgCpu">---</div>
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

function chgToResult(){
    let container = document.getElementById('scrDiv');
    container.innerHTML = `
    <div class="think">
        <div id="match"></div>
        <div class="result" id="compare"></div>
    </div>`;

    let match = document.getElementById('match'),
        comp = document.getElementById('compare');
    match.innerHTML = result2;
    comp.innerHTML = result;
}

function chgToGmOver(who){
    let element = document.getElementById('selectorID');
    element.innerHTML = `
        <div class="think">
            <div class="gOver">GAME OVER!</div>
            <div class="result" id="whoWin"></div>
            <button id="restart"> - FIGHT AGAIN - </button>
        </div>`
    
    let wResult = document.getElementById('whoWin'),
        restart = document.getElementById("restart");

    wResult.innerHTML = ` - ${who} THE BATTLE! - `;
    restart.addEventListener('click', function(){
        chgToMain();
        chgToSel()
        userScore = 0;
        comScore = 0;
    });
};

function chgToSel(){
    let element = document.getElementById('selectorID');
    element.innerHTML = `
    <div class="selector" id="selectorID">
    <div class="device" id="dev1" data-cname="Blast Bomb">
        <div class="option">
            <div class="opText" id="txBomb">Blast<br>Bomb💣</div>
            <div class="image hdImage" id="handRock">
                <img src="img/rock.png" alt="rock">
            </div>
        </div>
        <div class="image" id="bomb">
            <img src="img/bomb.png" alt="bomb">
    </div>
    </div>

    <div class="device" id="dev2" data-cname="Energy Shield">
        <div class="option">
            <div class="opText" id="txShield">Energy<br>Shield🛡️</div>
            <div class="image hdImage" id="handPaper">
                <img src="img/paper.png" alt="paper">
            </div>
        </div>
        <div class="image" id="shield">
            <img src="img/shield.png" alt="shield">
        </div>
    </div>

    <div class="device" id="dev3" data-cname="Gamma Ray">
        <div class="option">
            <div class="opText" id="txRay">Gamma<br>Ray🔫</div>
            <div class="image hdImage" id="handScissors">
                <img src="img/scissors.png" alt="scissors">
            </div>
        </div>
        <div class="image" id="ray">
            <img src="img/ray.png" alt="ray">
        </div>
    </div>
    </div>`;
    hoverListener();
};

function userPoints(){
    let element = document.getElementById('scrImgUser');
    userScore === 0 ? element.innerHTML = `<img src="img/0p.png">`: 
    userScore === 1 ? element.innerHTML = `<img src="img/1p.png">`:
    userScore === 2 ? element.innerHTML = `<img src="img/2p.png">`:
    userScore === 3 ? element.innerHTML = `<img src="img/3p.png">`:
    userScore === 4 ? element.innerHTML = `<img src="img/4p.png">`:
    userScore === 5 ? element.innerHTML = `<img id="fivePuser" src="img/5p.png">`:
    element = '---';
}

function cpuPoints(){
    let element = document.getElementById('scrImgCpu');
    comScore === 0 ? element.innerHTML = `<img src="img/0p.png">`: 
    comScore === 1 ? element.innerHTML = `<img src="img/1p.png">`:
    comScore === 2 ? element.innerHTML = `<img src="img/2p.png">`:
    comScore === 3 ? element.innerHTML = `<img src="img/3p.png">`:
    comScore === 4 ? element.innerHTML = `<img src="img/4p.png">`:
    comScore === 5 ? element.innerHTML = `<img id="fivePcpu" src="img/5p.png">`:
    element = '---';
}

function userSel(playerSelection){
    let user = document.getElementById('selImgUser');
    playerSelection === 'Blast Bomb' ? user.innerHTML = `<img src="img/bomb.png">`:
    playerSelection === 'Energy Shield' ? user.innerHTML = `<img src="img/shield.png">`:
    playerSelection === 'Gamma Ray' ? user.innerHTML = `<img src="img/ray.png">`:
    user = '---';
}

function cpuSel(computerSelection){
    let cpu = document.getElementById('selImgCpu');
    computerSelection === 'Blast Bomb' ? cpu.innerHTML = `<img src="img/bomb.png">`:
    computerSelection === 'Energy Shield' ? cpu.innerHTML = `<img src="img/shield.png">`:
    computerSelection === 'Gamma Ray' ? cpu.innerHTML = `<img src="img/ray.png">`:
    cpu = '---';
}