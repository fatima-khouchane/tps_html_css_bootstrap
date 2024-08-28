
let num1 = prompt('entrer le premier chifre:');
let num2 = prompt('entrer le deuxieme chifre:');
document.getElementById("number1").textContent = num1
document.getElementById("number2").textContent = num2
let res = document.getElementById("result")
function puissance() {
    let sum = num1 ** num2
    res.textContent = "la puissance est:" + sum
}
function subtract() {
    sub = num1 - num2
    res.textContent = "la subtraction est" + sub
}
function divide() {
    div = num1 / num2
    res.textContent = "la division est:" + div
}
function multiply() {
    mul = num1 * num2
    res.textContent = "la multiplicatio est:" + mul
}