const container = document.querySelector(".container");

function play() {
    let userInput = Number(prompt("Enter the grid size (between 16 & 64)"));
    while(isNaN(userInput) || (userInput>64) || (userInput<16)) {
        userInput = Number(prompt("Enter the grid size (between 16 & 64)"));
    }

    for(let i=0; i<userInput; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let i=0; i<userInput; i++) {
            const element = document.createElement('div');
            element.classList.add('element');
            row.appendChild(element);
        }
    }

    const elements = document.querySelectorAll('.element');
    elements.forEach( element => {
        element.addEventListener('mouseover', changeColor);
    });

    function changeColor(e) {
        this.style.backgroundColor = 'black';
    }
}

play();

function playAgain() {
    container.textContent = '';
    play();
}

const reset = document.querySelector('#reset');
reset.addEventListener('click',playAgain);