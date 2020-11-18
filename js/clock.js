const icon = document.querySelector('#icon');
const daySection = document.querySelector('#day-section');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const location = document.querySelector('#location');

let day = new Date();
const time = day.getHours();

console.log(time);