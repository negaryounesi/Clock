const clock = document.querySelector(".clock");
setInterval(showTime, 1000);

function showTime() {
    let date = new Date();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Second = date.getSeconds();
    let session = "AM";
    if (Hours == 0) {
        Hours = 12;
    }
    if (Hours > 12) {
        Hours = Hours - 12;
        session = "PM";
    }
    Hours    =   (Hours < 10 ? `0${Hours}` : Hours);
    Minutes  =   (Minutes < 10 ? `0${Minutes}` : Minutes);
    Second   =   (Second < 10 ? `0${Second}` : Second);
    let time = `${Hours}:${Minutes}:${Second} ${session}`;
    clock.innerText = time;

}


