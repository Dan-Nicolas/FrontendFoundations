const plus = document.querySelectorAll('.plus');
const ArrOfPlus = Array.from(plus);
const minus = document.querySelectorAll('.minus');
const ArrOfMinus = Array.from(minus);
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const ArrQuestions = Array.from(questions);
let index = 0;


for (const q of questions) {
    q.addEventListener('click', (e) => {
        index = ArrQuestions.indexOf(e.target);
        plus[index].classList.toggle('hidden');
        minus[index].classList.toggle('hidden');
        answers[index].classList.toggle('hidden');
    })
}
