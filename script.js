// References
const visor = document.querySelector('.visor input');
const buttons = document.querySelectorAll('.main-container button');

// Variables
let input = '';
let previousInput = '';
let operation = null;

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        handleButtonPress(button.getAttribute('data-value'));
    });
});

function handleButtonPress(value) {
    const operations = ['+', '-', 'X', '/']
    if(operations.includes(value)) {
        if(input) {
            previousInput = input;
            input = '';
            operation = value;
        }
    } else if (value === '=') {
        calculate();
    } else if (value === 'CE') {
        input = '';
        previousInput = '';
        operation = null;
    } else {
        input += value;
    }
    visor.value = input;
}

function calculate() {
    if (previousInput && input && operation) {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(input);
        switch (operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case 'X':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
        }
        visor.value = result;
        input = result.toString();
        previousInput = '';
        operation = null;
    }
}