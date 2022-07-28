let firstNumber;
let secondNumber;
let operation;
let sum;
let difference;
let product;
let quotient;

console.log(firstNumber, operation, secondNumber);

function hello() {
    console.log("Hello, World!");
}

function clickNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
    }

    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '+': {
            operation = '+';
            break;
        }
        case '-': {
            operation = '-';
            break; 
        }
        case '*': {
            operation = '*';
            break; 
        }
        case '/': {
            operation = '/';
            break; 
        }
        case '=': {
            if (operation === '+') {
                sum = Number(firstNumber) + Number(secondNumber);
                console.log(sum);
                firstNumber = undefined;
                secondNumber = undefined;
                operation = undefined;
                break;
            } else if  (operation === '-') {
                difference = Number(firstNumber) - Number(secondNumber);
                console.log(difference);
                firstNumber = undefined;
                secondNumber = undefined;
                operation = undefined;
                break;
            } else if  (operation === '*') {
                product = Number(firstNumber) * Number(secondNumber);
                console.log(product);
                firstNumber = undefined;
                secondNumber = undefined;
                operation = undefined;
                break;
            } else if (operation === '/') {
                quotient = Number(firstNumber) / Number(secondNumber);
                console.log(quotient);
                firstNumber = undefined;
                secondNumber = undefined;
                operation = undefined;
                break;
            }
        }
        default: {
            console.log("Unknown operation: " + input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}