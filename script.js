
var b = document.getElementById("test1");

function randomInt(min,max){
return Math.floor(Math.random() * (max - min) + min);
}


function randomInt1(min,max){
return Math.floor(Math.random() * (max - min) + min);
}

function randomInt2(min,max){
return Math.floor(Math.random() * (max - min) + min);
}

b.innerHTML=( "Число"+ "= "+randomInt2(1,31)+"________" +"Місяць  "+" = "+randomInt1(1,12)+"________" + "Рік "+"= "+randomInt(2018,2090) );
function fun1(){
b.style.opacity="0.9";
}