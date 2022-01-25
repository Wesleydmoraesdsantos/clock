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
    let day = time.getDate();
    let dat = time.getDay();
    let mon = time.getMonth();
    let year = time.getFullYear();

    background(22);
    if (hor < 10) {
        hor = `0${hor}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    //mes dia
    let day_txt = dat;
    let mon_txt = mon;
    if (day < 10) {
        day = `0${day}`;
    }
    if (mon < 10) {
        mon = `0${++mon}`;
    }
    local.innerHTML = `${hor} : ${min} : ${sec} <br> ${day} / ${mon} / ${year}<br><small>${conversor.dia(day_txt)} in ${conversor.mes(mon_txt)}</small>`;
}, 1000);
function background(v) {
    console.log("ok");
    if (v >= 6 && v < 12) {
        lugar_background.style.backgroundImage = "url(./img/day.jpg)";
    } else if (v >= 12 && v < 18) {
        lugar_background.style.background= "url(./img/afternoon.jpg)";
    } else if (v >= 18 || v < 6) {
        lugar_background.style.backgroundImage = "url(./img/night.jpg)";
    }
    lugar_background.style.backgroundSize="100% 100%";
    lugar_background.style.backgroundRepeat="no-repeat";
}