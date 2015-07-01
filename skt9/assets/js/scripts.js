function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if (element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}


jQuery(document).ready(function () {

    /*
     Navigation
     */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        var nav_height = $('nav').height();
        if ($('.navbar-fixed-top').css('position') != 'static') { // window width > 767px
            scroll_to($(this), nav_height);
        }
        else {
            var dropdown_height = 0;
            if ($(this).parents('ul.dropdown-menu').length === 1) {
                dropdown_height = $(this).parents('ul.dropdown-menu').height();
            }
            scroll_to($(this), dropdown_height);
        }
    });

    /*
     Fullscreen background
     */
    //$('.top-content').backstretch("assets/img/backgrounds/img_visual1.jpg");
    //$('.tslider-container').backstretch("assets/img/backgrounds/img_visual1.jpg");
    //$('.download-container').backstretch("assets/img/backgrounds/img_visual1.jpg");


    /*
     Wow
     */
    new WOW().init();

    /*
     Image popup
     */
    $('.screenshot-box img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: 'The image could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('alt');
            }
        },
        callbacks: {
            elementParse: function (item) {
                item.src = item.el.attr('src');
            }
        }
    });

    $(".event_slider").slidesjs({
        width: 320,
        height: 112,
        play: {
            effect: "slide",
            interval: 4000,
            auto: false,
            pauseOnHover: true,
            restartDelay: 2500
        },
        navigation: {
            active: false,
            effect: "slide"
        }
    });


    $(".features").slidesjs({
        width: 320,
        height: 300,
        play: {
            effect: "slide",
            interval: 4000,
            auto: false,
            pauseOnHover: true,
            restartDelay: 2500
        },
        navigation: {
            active: false,
            effect: "slide"
        }
    });

    $(".tslider").slidesjs({
        width: 320,
        height: 280,
        play: {
            effect: "slide",
            interval: 4000,
            auto: false,
            pauseOnHover: true,
            restartDelay: 2500
        },
        navigation: {
            active: false,
            effect: "slide"
        }
    });

    $(".notice").slidesjs({
        width: 320,
        height: 420,
        play: {
            effect: "slide",
            interval: 4000,
            auto: false,
            pauseOnHover: true,
            restartDelay: 2500
        },
        navigation: {
            active: false,
            effect: "slide"
        }
    });


    var fixHeight = 498;

    $(window).bind("scroll", function(){

        if( $(window).scrollTop() > fixHeight ) {
            $(".local-navbar").addClass("topFixed");
        }
        else {
            $(".local-navbar").removeClass("topFixed");
        }
    });


    $(".l-navbar").click(function() {

        if($('.navbar-toggle').attr("aria-expanded") === "true") {
            $('.navbar-toggle').click();
        }

        $( ".sub-navbar" ).slideToggle( "fast", function() {
            // Animation complete.
        });

        if($(".glyphicon").hasClass("glyphicon-triangle-bottom")) {
            $(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
            $('.modal-backdrop').css({
                "display":"block"
            });
            $('.modal-backdrop').animate({
                "opacity": 0.5
            });

        }
        else {
            $(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
            $('.modal-backdrop').css({
                "display":"none"
            });
            $('.modal-backdrop').animate({
                "opacity": 0
            },"slow");
        }

    });
    $(".sub-navbar a").click(function() {
        $( ".sub-navbar" ).slideUp( "fast", function() {
            // Animation complete.
        });
        $(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
    });



    $('.navbar-toggle').click( function() {

        if(!$(".glyphicon").hasClass("glyphicon-triangle-bottom")) {
            $( ".sub-navbar" ).slideToggle( "fast", function() {
                // Animation complete.
            });

            $(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
            $('.modal-backdrop').css({
                "display":"none"
            });
            $('.modal-backdrop').animate({
                "opacity": 0
            },"slow");
        }


    }) ;


});

