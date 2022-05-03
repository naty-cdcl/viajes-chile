$(document).ready(function(){
    
//funcion smooth scroll
    $('html,body').animate({
        scrollTop: $('body').offset().top
    }, 'slow' );
 
//funcion oscurecer barra de navegación
$(function(){
    $(window).scroll(function(){
      $('#navegador').offset().top
      console.log()
      if(window.innerWidth<453){
        if($('#navegador').offset().top>200){
          $('#navegador').addClass('navegador')
    
    
        }
        else{
          $('#navegador').removeClass('navegador')
        }
  
      } else{
      console.log($('#navegador').offset().top)
      if($('#navegador').offset().top >558){
        $('#navegador').addClass('navegador')
  
  
      }
      else{
        $('#navegador').removeClass('navegador')
      }
    }
    })
  
  })

})
