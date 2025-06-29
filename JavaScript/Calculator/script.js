const display = document.getElementById("display");

const numbersDiv = document.getElementById("numbers");
const allNumbers = numbersDiv.querySelectorAll("button");
const operatorsDiv = document.getElementById("operations");
const allOperators = operatorsDiv.querySelectorAll("button");

const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

clear.addEventListener('click', () =>{
    display.innerText = '';
});

equals.addEventListener('click', () =>{
    display.innerText = eval(display.innerText);
});

allNumbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText += number.innerText;
    });
});

allOperators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.innerText += operator.innerText;
    });
});