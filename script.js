function fuq(){
    var a = document.getElementById("w").value;
    var b = document.getElementById("q2").value;
    var c = document.getElementById("q3").value;
    var d = document.getElementById("q4").value;
    var e = document.getElementById("q5").value;
var g = a +","+b+","+c+","+d+","+e;


var mus =[];
mus[0]=a;
mus[1]=b;
mus[2]=c;
mus[3]=d;
mus[4]=e;

for(var i = 0; i<mus.length;i++){
  if(mus[0]!=0 && mus[1]!=0 && mus[2]!=0 && mus[3]!=0 && mus[4]!=0 ){
        document.write("Дані масива:"+mus[i]+"   ,"+"\n");
      
  }
}

}