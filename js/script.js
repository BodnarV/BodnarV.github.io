//=======================================================blocks
  $('.block1 p').hide();
 
  $('.btn1').on('click',function(){
  $('.block1 #p1').slideToggle()});
            
  $('.btn2').on('click',function(){
  $('.block1 #p2').slideToggle()});
 
  $('.btn3').on('click',function(){
  $('.block1 #p3').slideToggle()});

            
 //=================================================Preloader
 window.onload = function(){
 document.getElementById('preloader').style.opacity = '0';
 }
//=================================================Reload(menu) + WOW
  function reload(){
      location.reload();
  }
  new WOW().init();
//====================================================Slow
   function slowScroll(id){
   var offset =0;
   $('html,body').animate({
   scrollTop: $(id).offset().top - offset
   },900);
   return false;
   };

//========================================================
$(document).ready(function(){
    particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
   });
});





























