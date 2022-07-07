const container = document.querySelector(".container");

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