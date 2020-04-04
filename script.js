"use strict"

function add(a, b) {
	return a + b;
}

function subtract(a,b) {
	return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (b === 0) {
        return "Nice try, buster!"
    }
    return a / b;
}

function operate(op,a,b) {
    let result
    if (op === "plus") {
        result = add(a,b)
    } else if (op === "subtract") {
        result = subtract(a,b)
    } else if (op === "multiply") {
        result = multiply(a,b)
    } else if (op === "divide") {
        result = divide(a,b)
    } 
    console.log(result)
}

function buttonValue(target) {
    switch (target) {
        case 'one':
            return 1
        case 'two':
            return 2
        case 'three':
            return 3
        case 'four':
            return 4
        case 'five':
            return 5
        case 'six':
            return 6
        case 'seven':
            return 7
        case 'eight':
            return 8
        case 'nine':
            return 9
        case 'zero':
            return 0
        case 'dot':
            return '.'
        case 'plus':
            return '+'
        case 'minus':
            return '-'
        case 'multiply':
            return '*'
        case 'divide':
            return '/'
    }
}
let bigDisplay = document.querySelector("#calculations")
let buttons = document.querySelectorAll("button")
let totalCalculation

buttons.forEach((button) =>
    button.addEventListener('click', () => {
        let targetID = button.parentElement.id;
        if (targetID === "clear") {
            bigDisplay.textContent = "";
        } else if (targetID === "backspace") {
            bigDisplay.textContent = bigDisplay.textContent.slice(0,-1);
        } else if (targetID === "equals") {
            finalCalc();
        } else {
            totalCalculation += `${buttonValue(targetID)}`
            bigDisplay.textContent += `${buttonValue(targetID)}`;
        }
    })
);

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter another number"))
// let op = prompt("Enter an operator")

// operate(op,a,b);

