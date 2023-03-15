function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayOfWeek = dateTime.getDay();
    var dayOfWeekString = daysOfWeek[dayOfWeek];
    var day = dateTime.getDate();
    var month = dateTime.getMonth();
    var monthString = months[month]

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('dayOfWeek').innerHTML = dayOfWeekString + ",";
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = monthString;
}

setInterval(displayTime, 10);