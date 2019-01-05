var time = document.getElementById("time");

function Timer() {
    var data = new Date();
    var h = data.getHours().toString();
    var m = data.getMinutes().toString();
    var s = data.getSeconds().toString();
    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    var t = h + ':' + m + ':' + s;
    time.innerHTML = t;
}
setInterval(Timer, 1000);

// Друга функція



function Ftab1(){
   
}
function Ftab2(){}
function Ftab3(){}