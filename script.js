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
let smallDisplay = document.querySelector("#stored")
let bigDisplay = document.querySelector("#calculations")
let buttons = document.querySelectorAll("button")
let dotButton = document.getElementById("dotbutton");
let totalCalculation = "";

buttons.forEach((button) =>
    button.addEventListener('click', () => {
        let targetID = button.parentElement.id;
        if (targetID === "clear") {
            totalCalculation = "";
            smallDisplay.textContent = "";
            bigDisplay.textContent = "";
            dotButton.disabled = false;
        } else if (targetID === "backspace") {
            if (totalCalculation[totalCalculation.length - 1] === ".") {
                dotButton.disabled = false;
            }
            totalCalculation = bigDisplay.textContent.slice(0,-1)
            bigDisplay.textContent = bigDisplay.textContent.slice(0,-1);
        } else if (targetID === "equals") {
            shiftdisplay();
            let result = finalCalc(totalCalculation)
            result = parseFloat(result).toFixed(5);
            bigDisplay.textContent = `${result}`;
            totalCalculation = finalCalc(totalCalculation);
            dotButton.disabled = false;
        } else if (buttonValue(targetID) === ".") {
            totalCalculation += `${buttonValue(targetID)}`
            bigDisplay.textContent += `${buttonValue(targetID)}`;
            dotButton.disabled = true;
        } else {
            if (typeof buttonValue(targetID) === "string" && buttonValue(targetID) != '.') {
                totalCalculation += `,${buttonValue(targetID)},`
                bigDisplay.textContent += ` ${buttonValue(targetID)} `
                dotButton.disabled = false;
            } else {
                totalCalculation += `${buttonValue(targetID)}`
                bigDisplay.textContent += `${buttonValue(targetID)}`;
            }
        }
    })
);

function shiftdisplay() {
    smallDisplay.textContent = bigDisplay.textContent;
    bigDisplay.textContent = "";
}

function finalCalc(string) {
    let calcArray = string.split(",");
    
    ///Executing multiply and divide first
    for (let x = 0; x < calcArray.length; x++) {
        let replacedItems;
        let preInd = x - 1;
        let postInd = x + 1;
        if (calcArray[x] == "*") {
            replacedItems = parseFloat(multiply(calcArray[preInd], calcArray[postInd]));
            calcArray.splice(preInd, 3, replacedItems);
            x = 0
        } else if (calcArray[x] == "/") {
            replacedItems = parseFloat(divide(calcArray[preInd], calcArray[postInd]))
            calcArray.splice(preInd, 3, replacedItems);
            x = 0
        }        
    }

    ///Convert remaining items to numbers
    for (let x = 0; x < calcArray.length; x++) {
        if (calcArray[x] === "+" || calcArray[x] === "-") {
            continue
        } else {
            calcArray[x] = parseFloat(calcArray[x])
        };
    }
    
    ///Run the remaining calculatiom
    for (let x = 0; x < calcArray.length; x++) {
        let replacedItems;
        let preInd = x - 1;
        let postInd = x + 1;
        if (calcArray[x] == "+") {
            replacedItems = add(calcArray[preInd], calcArray[postInd]);
            calcArray.splice(preInd, 3, replacedItems);
        } else if (calcArray[x] == "-") {
            replacedItems = subtract(calcArray[preInd], calcArray[postInd])
            calcArray.splice(preInd, 3, replacedItems);
        }        
    }
    console.log(calcArray)
    return calcArray
}

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter another number"))
// let op = prompt("Enter an operator")

// operate(op,a,b);

