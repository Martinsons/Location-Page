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
    
    
    

    if(timeHr <= 4){
        iconStyle.innerHTML = '<i class="fas fa-cloud-sun"></i>';
        daySection.innerHTML = 'Good Morning';
    } else if (timeHr <= 12){
        iconStyle.innerHTML = '<i class="far fa-sun"></i>';
        daySection.innerHTML = 'Good Evening';
    } else if (timeHr <= 18) {
        iconStyle.innerHTML = '<i class="fas fa-moon"></i>';
        daySection.innerHTML = 'Good Night';
    }
}

setInterval(getDayPeriod, 1000);