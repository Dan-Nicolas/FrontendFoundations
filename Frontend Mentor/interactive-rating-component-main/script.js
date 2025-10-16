const ratings = document.querySelectorAll('.ratings');
const ratingContainer = document.getElementById('rating');
const scoreRating = document.getElementById('score-rating');
const submitBtn = document.getElementById('btn');
const thanksContainer = document.getElementById('thanks');
const mainContainer = document.getElementById('container');

let selectedRating = 0;


function updateRating(rating) {
    scoreRating.textContent = rating;
}

submitBtn.addEventListener('click', () => {
    if (selectedRating !== 0) {
        mainContainer.classList.toggle('hidden');
        thanksContainer.classList.toggle('hidden');
    }
});

ratings.forEach((button) => {
    button.addEventListener('click', (e) => {
        selectedRating = button.textContent;
        updateRating(selectedRating);
        ratings.forEach((b) => {
            b.classList.remove('clicked');
            if (b === e.target) {
                b.classList.add('clicked');
            }
        });
    });
});

