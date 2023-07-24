const cButton= document.querySelector('.start');
cButton.addEventListener('mousedown', function() {
    clicked(cButton)
    });     //must be used anonymous funtion to ensure that the clicked function applies only when the button is clicked
cButton.addEventListener('mouseup', (e) => {
    removeTransition(e);
    });     //in this case is used the arrow function to declare the anonymous function
cButton.addEventListener('mouseup', (e) => {
    window.location.href = 'game.html';
    });

function clicked(element){
    element.classList.add('click');
}

function removeTransition(e) {
    e.target.classList.remove('click');
}