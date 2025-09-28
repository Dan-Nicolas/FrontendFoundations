const tipBtns = document.querySelectorAll(".tip-btn");
const billInput = document.getElementById("bill");
let billValue = 0;
const custom = document.getElementById('custom-tip');
const billError = document.getElementById('bill-error');
const pplInput = document.getElementById('people');
const pplError = document.getElementById('ppl-error');
const tipText = document.getElementById('tip-text');
const totalText = document.getElementById('total-text');
const reset = document.getElementById('reset');

let tipValue = 0;
let people = 0;

function handleNums(value, error, input) {
    if (value <= 0) {
        error.classList.remove('hidden');
        input.classList.add('error');
    } else {
        error.classList.add('hidden');
        input.classList.remove('error');
        if (input === billInput) {
            billValue = input.value;
        } else if (input === pplInput) {
            people = input.value;
        }
    }
    calculateAll();
}

const handleBill = (e) => {
    handleNums(billInput.value, billError, billInput);
};

billInput.addEventListener("input", handleBill);


const handlePeople = (e) => {
    handleNums(pplInput.value, pplError, pplInput);
}

pplInput.addEventListener('input', handlePeople)

function activeTip(event) {
    const clickedTip = event.currentTarget;

    tipBtns.forEach(element => {
        if (element !== clickedTip) {
            element.classList.remove('selected')
        }
    });

    clickedTip.classList.add('selected');
    tipValue = parseInt(clickedTip.value, 10);
    calculateAll();
}

tipBtns.forEach((button) => {
    button.addEventListener("click", activeTip)
});
custom.addEventListener('keyup', activeTip);

function calculateAll() {
    let tip = calcTip();
    calcTotal(tip);
}

function calcTip() {
    if (people !== 0) {
        let tip = Math.floor(((billValue * (tipValue / 100)) / people) * 100) / 100;
        tipText.textContent = `$ ${tip}`;
        return tip;
    }
}

function calcTotal(tip) {
    if (people !== 0) {
        totalText.textContent = `$ ${Math.floor(((billValue / people) + tip) * 100) / 100}`;
    }
}


reset.addEventListener('click', () => {
    tipBtns.forEach(element => {
        element.classList.remove('selected')
    });
    billValue = 0;
    tipValue = 0;
    billInput.value = '';
    pplInput.value = '';
    people = 0;
    totalText.textContent = '$0.00';
    tipText.textContent = '$0.00';
})