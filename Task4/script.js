const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();

    let dayOfWeek = dateTime.getDay();
    let dayOfWeekString = daysOfWeek[dayOfWeek];
    let day = dateTime.getDate();
    let month = dateTime.getMonth();
    let monthString = months[month]

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('dayOfWeek').innerHTML = dayOfWeekString + ",";
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = monthString;
}

setInterval(displayTime, 900);
