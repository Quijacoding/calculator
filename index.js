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