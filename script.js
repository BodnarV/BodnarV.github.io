
var b = document.getElementById("test1");
var c = document.getElementById("test2");

    var a = document.getElementById("input");


function randomInt(min,max){
return Math.floor(Math.random() * (max - min) + min);
}


function randomInt1(min,max){
return Math.floor(Math.random() * (max - min) + min);
}

function randomInt2(min,max){
return Math.floor(Math.random() * (max - min) + min);
}

var mus = ["Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"];

var rand = Math.floor(Math.random() * mus.length);

b.innerHTML=("Ти помреш:"+" "+ randomInt2(1,31)+ "  " + mus[rand]+ " "+randomInt(2018,2090)+" року." );
function fun1(){
    if(a.value!=0){
     c.innerHTML=(a.value+",");
    b.style.opacity="0.9";
  }
}