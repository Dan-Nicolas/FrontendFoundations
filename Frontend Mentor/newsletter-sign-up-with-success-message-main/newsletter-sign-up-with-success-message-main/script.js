const headerImg = document.getElementById("header-img");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
const email = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const invalidText = document.getElementById('invalid-text');
const successEmail = document.getElementById('success-email');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');
const successBtn = document.getElementById('success-btn');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === '' || emailRegex.test(email.value) == false) {
        email.classList.add('invalid');
        invalidText.classList.remove('hidden');
    } else if (email.checkValidity() === true) {
        email.classList.remove('invalid');
        invalidText.classList.add('hidden');
        successEmail.innerText = email.value;
        mainContainer.classList.toggle('hidden');
        successContainer.classList.toggle('hidden');
    }
});

successBtn.addEventListener('click', () => {
    mainContainer.classList.toggle('hidden');
    successContainer.classList.toggle('hidden');
})

