const plus = document.querySelectorAll('.plus');
const ArrOfPlus = Array.from(plus);
const minus = document.querySelectorAll('.minus');
const ArrOfMinus = Array.from(minus);
const answers = document.querySelectorAll('.answer');
let index = 0;


function swap(idx) {
    plus[idx].classList.toggle('hidden');
    minus[idx].classList.toggle('hidden');
    answers[idx].classList.toggle('hidden');
}

for (const p of plus) {
    p.addEventListener('click', (e) => {
        index = ArrOfPlus.indexOf(e.target);
        swap(index);
    });
}

for (const m of minus) {
    m.addEventListener('click', (e) => {
        index = ArrOfMinus.indexOf(e.target);
        swap(index);
    });
}