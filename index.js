const local = window.document.getElementById("zero");
const lugar_background = window.document.getElementById("one");

var control = setInterval(() => {
    let time = new Date();
    let hor = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.geyDay();
    let mon = time.getMonth();
    let year = time.getFullYear();

    background(hor);
    if( hor < 10) {
        hor = `0${hor}`;
    }
    if( min < 10) {
        min = `0${min}`;
    }
    if( sec < 10) {
        sec = `0${sec}`;
    }
    local.innerHTML = `${hor} : ${min} : ${sec} <br> ${day} / ${mon} / ${year}`;
}, 1000);
async function background (v) {
   if( v >= 6 && v < 12) {
       lugar_background.style.backgroundimage= "url(./img/day.jpg)";
   }else if( v >= 12 && v < 18) {
    lugar_background.style.backgroundimage= "url(./img/afternoon.jpg)";
   }else if( v >= 18 && v < 6) {
    lugar_background.style.backgroundimage= "url(./img/night.jpg)";
   }
}