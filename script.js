function loadClock() {
    const date = new Date();
    const minutes = date.getMinutes();

    const totalSeconds = date.getSeconds() + (date.getMilliseconds() / 1000);
    const secondsAngle = totalSeconds * 6;

    document.querySelector("#seconds").style.transform = `rotate(${secondsAngle}deg)`;
    document.querySelector("#seconds-circle").style.transform = `rotate(${secondsAngle}deg)`;
    document.querySelector("#minutes").style.transform = `rotate(${minutes * 6}deg)`;
    document.querySelector("#hours").style.transform = `rotate(${(date.getHours() * 30) + minutes * 0.5}deg)`;
}

loadClock();

setInterval(() => {
    loadClock();
}, 50);
