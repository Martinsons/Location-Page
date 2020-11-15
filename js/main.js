const moreLessBtn = document.querySelector('#clock_btn');
moreLessBtn.addEventListener('click', function() {
    if(moreLessBtn.getAttribute('data-text-swap') == moreLessBtn.innerHTML) {
        moreLessBtn.innerHTML = moreLessBtn.getAttribute('data-text-original');
    } else {
        moreLessBtn.setAttribute('data-text-original', moreLessBtn.innerHTML);
        moreLessBtn.innerHTML = moreLessBtn.getAttribute('data-text-swap');
    }
}, true);


let day = new Date();


// TIMEZONE
const timeZone = document.querySelector('#timezone');

timeZone.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;


const dayOfWeek = document.querySelector('#day-of-week');
dayOfWeek.innerHTML = day.getDay();