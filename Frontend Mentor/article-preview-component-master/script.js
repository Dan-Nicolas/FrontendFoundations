
const tooltip = document.querySelector(".tooltip");
const michelle = document.getElementById("person");
const activeState = document.getElementById("person-active");
const activeClick = document.getElementById("click-div-active");
const baseClick = document.getElementById("click-div");

function toggle() {
    michelle.classList.toggle("hidden");
    activeState.classList.toggle("hidden");
}

if (window.matchMedia("(min-width:1024px)").matches) {
    share.addEventListener("click", () => {
        tooltip.classList.toggle("hidden");
    });
} else if (window.matchMedia("(max-width:420px)").matches) {
    baseClick.addEventListener("click", () => {
        toggle()
    });
    activeClick.addEventListener("click", () => {
        toggle()
    });
}
