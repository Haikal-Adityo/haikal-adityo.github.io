$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});

// Carousel
$(document).ready(function(){
    var owl = $('.owl-carousel');

    function initCarousel() {
        var options = {
            loop: true,
            margin: 0,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        };

        if ($(window).width() < 769) {
            options.items = 3;
        } else {
            options.items = 6;
        }

        owl.owlCarousel(options);
    }

    initCarousel();

    $(window).resize(function(){
        owl.trigger('destroy.owl.carousel');
        initCarousel();
    });

    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [1000]);
    });
    
    $('.stop').on('click', function(){
        owl.trigger('stop.owl.autoplay');
    });
});
