const dayOfYear = document.querySelector('#day-of-year');
const dayOfWeek = document.querySelector('#day-of-week');
const weekNumber = document.querySelector('#week-number');


let day = new Date();


// TIMEZONE
const timeZone = document.querySelector('#timezone');

timeZone.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;



