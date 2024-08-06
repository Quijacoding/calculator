const button = document.querySelectorAll("#bt")



function add (a,b) {
    return a + b ;
}

function minus (a,b ) {
    return a - b;
}

function divide (a, b) {
    return a / b;
}

function multi (a,b) {
    return a * b;
}

var firstNum = ""
var operator = ""
var secNum = ""

function operate (firstNum, operator, secNum) {
    const first = firstNum;
    const sec = secNum;

    if (operator === add) {
        return add(first, sec)
    } else if (operator === minus) {
        return minus(first, sec)
    } else if (operator === divide) {
        return divide (first, sec)
    } else if (operator === multi) {
        return multi(first, sec)
    }

}

const display = document.querySelector("#current-nam")



for (let i = 0; i < button.length; i++ ){
    button[i].addEventListener("click", function() {

        if (button[i].value === "clear") {
            return display.innerHTML = "";
        }
        console.log(button[i].value)
        display.innerHTML += button[i].value;

        if (display.value === "-" || "x" || "+" || "divide" ) {
            firstNum = display.value
            return console.log(firstNum)
        }
    })
}
