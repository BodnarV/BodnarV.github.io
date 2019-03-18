//=================================================Preloader
 $(window).on('load',function(){
 $('#preloader').css('opacity','0');
});
//=======================================================blocks
  $('.block1 p').hide();
 
  $('.btn1').on('click',function(){
  $('.block1 #p1').slideToggle()});
            
  $('.btn2').on('click',function(){
  $('.block1 #p2').slideToggle()});
 
  $('.btn3').on('click',function(){
  $('.block1 #p3').slideToggle()});

        
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

//========================================================Fon
$(document).ready(function(){
    particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
   });
});
 




























