// functions
// add 
function add(num1, num2) {
    return (num1 + num2).toFixed(0);
}

// subtract
function subtract(num1, num2) {
    return (num1 - num2).toFixed(0);
}

// multiply
function multiply(num1, num2) {
    return (num1 * num2).toFixed(0);
}

// divide
function divide(num1, num2) {
    if (num2 == "0") {
        return "STOP";
    } else {
        let quotient = num1 / num2;
        return quotient.toFixed(2);
    }
}

function operation(number, anotherNumber, op) {
    if (op === "+") {
        return add(number, anotherNumber);
    }
    if (op === "-") {
        return subtract(number, anotherNumber);
    }
    if (op === "*") {
        return multiply(number, anotherNumber);
    }
    if (op === "/") {
        return divide(number, anotherNumber);
    }
}

// functionality of the calculator
let number1 = "";
let number2 = "";
let operator = "";
let resultDisplayed = false;

const textBox = document.querySelector("#result");
const allButtons = document.querySelectorAll("button");

allButtons.forEach(button => {
    button.addEventListener("click", function() {
        let buttonText = this.textContent; 
        if ("0123456789".includes(buttonText)) {
            if (operator == "") {
                if (resultDisplayed) {
                    number1 == "";
                    textBox.value = "";
                    number2 = "";
                    operator = "";
                    resultDisplayed = false;

                    number1 = buttonText;
                    textBox.value += buttonText;
                } else {
                    number1 += buttonText;
                    textBox.value += buttonText;
                }
            } else {
                number2 += buttonText;
                textBox.value += buttonText;
            }
        } else if ("+-*/".includes(buttonText)) {
            if (buttonText == "*") {
                operator = buttonText;
                textBox.value += " x ";
            } else {
                operator = buttonText;
                textBox.value += ` ${buttonText} `;
            };
        } else if (buttonText == "=") {
            textBox.value = "";
            textBox.value += operation(+number1, +number2, operator);
            number1 = textBox.value.toString();
            number2 = "";
            operator = "";
            resultDisplayed = true;
        } else if (buttonText === "Clear") {
            textBox.value = "";
            number1 = "";
            number2 = "";
            operator = "";
            resultDisplayed = false;
        }
    });
});
