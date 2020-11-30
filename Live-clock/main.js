//selector

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const day = document.getElementById('day');





function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let dateT = today.toDateString();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${addzero(hour)}<span>:</span>${addzero(minutes)}<span>:</span>${addzero(seconds)} ${amPm}`;
    day.innerHTML = `<span>${dateT}</span>`;

    setTimeout(showtime, 1000);
}

function addzero(n) {
    return ( parseInt(n,10) < 10 ? "0" : "") + n;
}
showtime();