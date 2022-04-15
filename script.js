let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");

let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

let overwrite = false; // flag indicating if next number button should erase display or concatenate

numberButtons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if(overwrite){
            display.innerHTML = ""
            overwrite = false;
        }
        display.innerHTML += e.target.innerHTML;
        displayValue = display.innerHTML;
    });
})

operatorButtons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if(firstNumber === ""){
            firstNumber = displayValue;
            operator = e.target.innerHTML;
            overwrite = true;
        } else {
            secondNumber = displayValue;
            operate(operator,firstNumber,secondNumber);
            operator = e.target.innerHTML;
            overwrite = true;
            firstNumber = displayValue;
        }
    });
})

equalsButton.addEventListener("click", function(e){
    secondNumber = displayValue;
    operate(operator,firstNumber,secondNumber);
    overwrite = true;
    firstNumber = "";
    operator = "";
    secondNumber = "";
});

clearButton.addEventListener("click", function(e){
    display.innerHTML = "";
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
});



function operate(op, a, b){
    let result
    switch (op) {
        case "+":
            result = add(a,b);
            display.innerHTML = result;
            displayValue = display.innerHTML;
            break;
        case "-":
            result = subtract(a,b);
            display.innerHTML = result;
            displayValue = display.innerHTML;
            break;
        case "*":
            result = multiply(a,b);
            display.innerHTML = result;
            displayValue = display.innerHTML;
            break;
        case "/":
            result = divide(a,b);
            display.innerHTML = result;
            displayValue = display.innerHTML;
            break;    
        default:
            break;
    }
}

function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);    
}

function multiply(a, b){
    return Number(a) * Number(b);    
}

function divide(a, b){
    return Number(a) / Number(b);    
}