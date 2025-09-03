const path = "./data.json";
const titles = document.querySelectorAll(".title");
const current = document.querySelectorAll('.current');
const prev = document.querySelectorAll('.prev');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
let json = '';


async function getData() {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        json = await response.json();
        for (let i = 0; i < json.length; i++) {
            titles[i].innerHTML = json[i].title;
        }
    } catch (error) {
        console.error(error);
    }
    daily.style.color = 'aliceblue';
}

daily.addEventListener('click', () => updateTimeframes('daily'));
weekly.addEventListener('click', () => updateTimeframes('weekly'));
monthly.addEventListener('click', () => updateTimeframes('monthly'));


function updateTimeframes(time){
    for(let i = 0; i < current.length; i++){
        current[i].innerHTML = `${json[i].timeframes[time]['current']}hrs`;
        prev[i].innerHTML = `Last week - ${json[i].timeframes[time]['previous']}hrs`;
    }
    highlight(time);
}

function highlight(time){
    daily.style.color = weekly.style.color = monthly.style.color = 'rgba(241, 240, 251, 0.545)';

    if(time === 'daily'){
        daily.style.color = 'aliceblue';
    }else if(time === 'weekly'){
        weekly.style.color = 'aliceblue';
    }
    else{
        monthly.style.color = 'aliceblue';
    }
}

getData();