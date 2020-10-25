(function($){
	'use strict'
	
	/*wow js*/
	new WOW().init();
		
	/*Venobox plugin*/
	$(document).ready(function(){
    $('.venobox').venobox(); 
	});

//owl carousal plugin
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*SCROLL button*/
    $(window).scroll(function(){
        var topBtn = $(window).scrollTop();

        if(topBtn > 600) {
            $('.top').fadeIn();
        } 
        else{
            $('.top').fadeOut();
        }
    });
    $('.top').on('click', function(){
        $('html').animate({'scrollTop' : 0}, 1000)
    });

})(jQuery);