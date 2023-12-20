const startingminutes = 10;
let time = startingminutes *60;
const countdownEl = document.getElementById('countdown')

setInterval(updatecountdown, 1000);

function updatecountdown () {const minutes = math.floor(time / 60);
let seconds = time % 60;
countdownEl.innerHTML = '${minutes}: ${seconds}' ;
    time--;}