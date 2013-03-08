$(document).ready(function(){
	$(window).scroll(function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = 50;             // set to whatever you want it to be

	    if(y_scroll_pos > scroll_pos_test) {
	    	$('.social-nav').fadeIn();
	    	$('.nav').find("img[src='images/shredset.png']").attr('src','/images/shredset-white.png')
	    	$('.find-me').fadeOut();
	    } else {
	    	$('.social-nav').fadeOut();
	    	$('.find-me').fadeIn();
	    }
	});
});