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

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter another number"))
// let op = prompt("Enter an operator")

// operate(op,a,b);

