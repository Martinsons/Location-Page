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

