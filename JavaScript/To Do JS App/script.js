const addBtn = document.getElementById("add-btn");
const inputEl = document.getElementById('input');
const list = document.getElementById('list');
let arr = [];

addBtn.addEventListener('click', () => {
    console.log(inputEl.value);
    arr.push(inputEl.value);
    renderArr();
});

function renderArr() {
    list.innerText = '';
    arr.forEach((item, index) => {
        const p = document.createElement('p');
        const checkbox = document.createElement('input');
        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.height = 'fit-content';
        deleteBtn.style.justifyContent = 'center';
        div.style.display = 'flex';
        checkbox.type = 'checkbox';
        p.textContent = `Index ${index}: ${item} `;
        div.appendChild(p);
        div.appendChild(checkbox);
        div.appendChild(deleteBtn);
        list.appendChild(div);
        deleteBtn.addEventListener('click', () => {
            arr.splice(index,1);
            renderArr();
        });
    });
}
