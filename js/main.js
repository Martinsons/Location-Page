const dayOfYear = document.querySelector('#day-of-year');
const dayOfWeek = document.querySelector('#day-of-week');
const weekNumber = document.querySelector('#week-number');
const clockBtn = document.querySelector('#clock_btn');
const infoSection = document.querySelector('#info');
const quotesSection = document.querySelector('#quotes');


let day = new Date();


// TIMEZONE
const timeZone = document.querySelector('#timezone');

const paragr = document.createElement('p');

paragr.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;

timeZone.appendChild(paragr);


function hideSection(){
    if(infoSection.style.display === 'none'){
        infoSection.style.display = 'block';
        quotesSection.style.display = 'none';
        clockBtn.innerText = 'Less';
    } else {
        infoSection.style.display = 'none';
        quotesSection.style.display = 'block';
        clockBtn.innerText = 'More';
    }
}
