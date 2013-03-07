$(document).ready(function() {
  // Set the first image at the place it at the middle of the three positions
  $('.frames').css('right', '100%' );
  $('.frames li:first').before($('.frames li:last'));
  
  // Whenever we click the next button, we move 100% and 
  $('#next_frame').click(function(e){
     e.preventDefault();
    $('.frames').animate({'right':'+=100%'}, function(){
     $('.frames li:last').after($('.frames li:first'));
     $('.frames').css('right', '100%' ); 
    });
  });
 
  $('#previous_frame').click(function(e){
    e.preventDefault();
    $('.frames').animate({'right':'-=100%'}, function(){ 
     $('.frames li:first').before($('.frames li:last')); 
     $('.frames').css('right', '100%' ); 
    });
  });
});