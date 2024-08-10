class Calculator {
        constructor(previousNum, currentNum) {
            this.previousNum = previousNum
            this.currentNum = currentNum
            this.clear()
        }
            clear () {
                this.currentOperand = " "
                this.previousOperand = " "
                this.operation = undefined;
                console.log(this.currentOperand)
                console.log(this.previousOperand)
            }

            delete() {
                    this.currentOperand = this.currentOperand.toString().slice(0, -1) //takes from the string and deletes the last digit
            }
            appendNumber(number) {
                if (number === '.' && this.currentOperand.includes('.')) return //Prevents from adding another period
                this.currentOperand = this.currentOperand.toString() + number.toString() //to append the numbers and not be added while typing the numbers
            }

            chooseOperator (operation) {
                if (this.currentOperand === " ") return //if pressing operator while current number is empty, don't do anything
                if (this.previousOperand !== " ") {
                    this.compute() //Automatically adjusts the equals
                }
                this.operation = operation; 
                this.previousOperand = this.currentOperand; //Send current to previous 
                this.currentOperand = " " //Set current to blank
            }

            compute() {
                let computation
                const prev = parseFloat(this.previousOperand)  //converts to numbers
                const current = parseFloat(this.currentOperand)
                if(isNaN(prev) || isNaN(current)) return //Return if no number
                switch (this.operation) {
                    case '+':
                        computation = prev + current
                        break
                    case '-':
                        computation = prev - current
                        break
                    case '*':
                        computation = prev * current
                        break
                    case '÷':
                        computation = prev / current
                        break
                    default:
                        return
                }
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = " "

            }

            updateDisplay () {
                this.currentNum.innerText = this.currentOperand;
                if (this.operation != null) {
                                    this.previousNum.innerText = 
                                    `${this.previousOperand} ${this.operation}`; //To display previous number

                } else {
                    this.previousNum.innerText = " "
                }
            }
}

const button = document.querySelectorAll("[data-number]")
const operateButton = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-all-clear]")
const previousNum = document.querySelector("[data-previous]")
const currentNum = document.querySelector("[data-current]")



const calculator = new Calculator(previousNum, currentNum)

button.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        console.log(button.innerText)
        calculator.updateDisplay()
    })
})


operateButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        console.log(button.innerText)
        calculator.updateDisplay()
    })
})


clearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})

