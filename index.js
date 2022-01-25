const local = window.document.getElementById("zero");
const lugar_background = window.document.getElementById("one");
const conversor = {
    dia: function (v) {
        switch (v) {
            case 0:
                return "Sunday";
                break
            case 1:
                return "Monday";
                break
            case 2:
                return "Tuesday";
                break
            case 3:
                return "Wednesday";
                break
            case 4:
                return "Thuesday";
                break
            case 5:
                return "Friday";
                break
            case 6:
                return "Saturday";
                break
        }
    },
    mes: function (x) {
        switch (x) {
            case 0:
                return "January";
                break
            case 1:
                return "February";
                break
            case 2:
                return "March";
                break
            case 3:
                return "April";
                break
            case 4:
                return "May";
                break
            case 5:
                return "June";
                break
            case 6:
                return "July";
                break
            case 7:
                return "August";
                break
            case 8:
                return "September";
                break
            case 9:
                return "October";
                break
            case 10:
                return "November";
                break
            case 11:
                return "December";
                break
        }
    }
}
var control = setInterval(() => {
    let time = new Date();
    let hor = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    let mon = time.getMonth();
    let year = time.getFullYear();

    background(hor);
    if (hor < 10) {
        hor = `0${hor}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    local.innerHTML = `${hor} : ${min} : ${sec} <br> ${day} / ${mon} / ${year}<br><small>${conversor.dia(day)} in ${conversor.mes(mon)}</small>`;
}, 1000);
function background(v) {
    console.log("ok");
    if (v >= 6 && v < 12) {
        lugar_background.style.backgroundImage = "url(./img/day.jpg)";
        console.log("day");
    } else if (v >= 12 && v < 18) {
        lugar_background.style.background= "url(./img/afternoon.jpg)";
        console.log("afternoon");
    } else if (v >= 18 && v < 6) {
        lugar_background.style.backgroundImage = "url(./img/night.jpg)";
        console.log("night");
    }
}