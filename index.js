const local = window.document.getElementById("zero");

var control = setInterval(() => {
    let time = new Date();
    let hor = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    local.innerText = `${hor} ; ${min} : ${sec}`;
}, 1000);