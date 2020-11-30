const iconStyle = document.querySelector('#icon');
const daySection = document.querySelector('#day-section');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const yourLocation = document.querySelector('#location');



function getTime() {

    let day = new Date();
    
    const timeHr = day.getHours();
    const timeMin = day.getMinutes();
    const timeSec = day.getSeconds();
    // console.log(timeHr, timeMin, timeSec);

    hours.innerHTML = timeHr;
    minutes.innerHTML = timeMin;
    seconds.innerHTML = timeSec;

    
}




setInterval(getTime, 1000);


function getDayPeriod(){
    let day = new Date();

    const timeHr = day.getHours();
    
    
    

    if(timeHr > 4 && timeHr < 12){
        iconStyle.innerHTML = '<i class="fas fa-cloud-sun"></i>';
        daySection.innerHTML = 'Good Morning';
    } else if (timeHr > 12 && timeHr < 18){
        iconStyle.innerHTML = '<i class="far fa-sun"></i>';
        daySection.innerHTML = 'Good Evening';
    } else if (timeHr > 18 && timeHr < 23){
        iconStyle.innerHTML = '<i class="fas fa-moon"></i>';
        daySection.innerHTML = 'Good Night';
    } else if(timeHr > 0 && timeHr < 4){
        iconStyle.innerHTML = '<i class="fas fa-moon"></i>';
        daySection.innerHTML = 'Good Night';
    }

    console.log(timeHr > 4 && timeHr < 12)
    console.log(timeHr > 12 && timeHr < 18)
    console.log(timeHr > 18 && timeHr < 23)
    console.log(timeHr > 0 && timeHr < 4)

}

getDayPeriod();

// setInterval(getDayPeriod, 1000);


function weekDay(){
    let day = new Date();

    let weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let n = weekday[day.getDay()];

    const para = document.createElement('p');

    para.innerHTML = n;

    dayOfWeek.appendChild(para);
}

weekDay();


function getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function weekNr() {
    let x = getNumberOfWeek();
    const para = document.createElement('p');

    para.innerHTML = x;

    weekNumber.appendChild(para);
}

weekNr();


function dayYear() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    
    const para = document.createElement('p');

    para.innerHTML = day;

    dayOfYear.appendChild(para);
}

dayYear();

  