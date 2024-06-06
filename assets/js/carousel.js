$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});

// Carousel
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
  
    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [1000]);
    });
    
    $('.stop').on('click', function(){
        owl.trigger('stop.owl.autoplay');
    });
  });