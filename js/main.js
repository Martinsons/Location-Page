

let day = new Date();


// TIMEZONE
const timeZone = document.querySelector('#timezone');

timeZone.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;



