window.onload = function () {
    document.getElementById("num1").value = getRandomInt(10);
    document.getElementById("num2").value = getRandomInt(10);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(11));

function changeNumber(elementId, change) {
    let input = document.getElementById(elementId);
    input.value = parseInt(input.value) + change;
}
function calculate() {
    let operator = document.getElementById("operator").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let tulostus = document.getElementById("result");
    let result;
    if (operator == "+") {
        result = parseInt(num1) + parseInt(num2);
    }
    else if (operator == "-") {
        result = parseInt(num1) - parseInt(num2);
    }
    else if (operator == "*") {
        result = parseInt(num1) * parseInt(num2);
    }
    else if (operator == "/") {
        result = parseInt(num1) / parseInt(num2);
    }
    tulostus.value = parseInt(result);
}
