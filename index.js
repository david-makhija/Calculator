var screen = document.getElementById("display-area")
var operand
var operator = ""

function calculate(num1, num2, op) {
    var result=0
    switch(op) {
        case '+':
            result = num1+num2
            break
        case '-':
            result = num1-num2
            break
        case '*':
            result = num1*num2
            break
        case '/':
            result = num1/num2
            break
    }
    return result
}
if(screen.innerHTML=="") {
    console.log(1)
}

document.body.addEventListener('click', function(event) {
    switch(event.target.innerHTML) {
        case '1':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '1'
            }
            break
        case '2':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '2'
            }
            break
        case '3':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '3'
            }
            break
        case '4':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '4'
            }
            break
        case '5':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '5'
            }
            break
        case '6':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '6'
            }
            break
        case '7':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '7'
            }
            break
        case '8':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '8'
            }
            break
        case '9':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '9'
            }
            break
        case '0':
            if(screen.innerHTML!="Error") {
                screen.innerHTML = screen.innerHTML + '0'
            }
            break
        case '+':
            if(screen.innerHTML=="" || screen.innerHTML=="Error") {
                screen.innerHTML = "Error"
            }
            else if(operator=="") {
                operator = "+"
                operand = parseInt(screen.innerHTML)
                screen.innerHTML = ""
            }
            else if(operand===undefined) {
                screen.innerHTML = "Error"
            }
            else {
                operand = calculate(operand, parseInt(screen.innerHTML), operator)
                screen.innerHTML = ""
                operator = '+'
            }
            break
        case '-':
            if(screen.innerHTML=="" || screen.innerHTML=="Error") {
                screen.innerHTML = "Error"
            }
            else if(operator=="") {
                operator = "-"
                operand = parseInt(screen.innerHTML)
                screen.innerHTML = ""
            }
            else if(operand===undefined) {
                screen.innerHTML = "Error"
            }
            else {
                operand = calculate(operand, parseInt(screen.innerHTML), operator)
                screen.innerHTML = ""
                operator = '-'
            }
            break
        case '*':
            if(screen.innerHTML=="" || screen.innerHTML=="Error") {
                screen.innerHTML = "Error"
            }
            else if(operator=="") {
                operator = "*"
                operand = parseInt(screen.innerHTML)
                screen.innerHTML = ""
            }
            else if(operand===undefined) {
                screen.innerHTML = "Error"
            }
            else {
                operand = calculate(operand, parseInt(screen.innerHTML), operator)
                screen.innerHTML = ""
                operator = '*'
            }
            break
        case '/':
            if(screen.innerHTML=="" || screen.innerHTML=="Error") {
                screen.innerHTML = "Error"
            }
            else if(operator=="") {
                operator = "/"
                operand = parseInt(screen.innerHTML)
                screen.innerHTML = ""
            }
            else if(operand===undefined) {
                screen.innerHTML = "Error"
            }
            else {
                operand = calculate(operand, parseInt(screen.innerHTML), operator)
                screen.innerHTML = ""
                operator = '/'
            }
            break
        case '=':
            if(screen.innerHTML=="" || screen.innerHTML=="Error") {
                screen.innerHTML = "Error"
            }
            else if(operator!="") {
                screen.innerHTML = calculate(operand, parseInt(screen.innerHTML), operator)
                operator = ""
                operand = undefined
            }
            break
        case 'C':
            screen.innerHTML = ""
            break
    }
})