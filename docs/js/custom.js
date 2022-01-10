//======>  Mobile Menu Activation

// Off Canvas Open close
$(".off-canvas-btn").on('click', function() {
    $(".off-canvas-wrapper").addClass('open');
});

$(".btn-close-off-canvas").on('click', function() {
    $(".off-canvas-wrapper").removeClass('open');
});



// Mobile Dropdown Fix
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
});

$(document).ready(function() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    $('select').niceSelect();



    // Back To Top Button

    $(".back-to-top").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        } // End if
    });

    // function scrollFunction() {
    //     var hero_area = $(".landing-4 .hero-area").innerHeight();

    //     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    //         $(".back-to-top").addClass("show");
    //     } else {
    //         $(".back-to-top").removeClass("show");
    //     }
    //   }

    //   window.onscroll = function() {scrollFunction()};

    // jQuery("pre.language-html, pre.language-javascript").each(function() {
    //     var e = '<button class="btn btn-sm btn-primary btn-clipboard" type="button" title="Copy To Clipboard">Copy</button>';
    //     var wrap = '<div class="code-snippet">';
    //     jQuery(this).wrap(wrap).before(e);
    // });
    // jQuery(".btn-clipboard").tooltip().on("mouseleave", function() {
    //     jQuery(this).tooltip("hide")
    // });
    // var e = new ClipboardJS(".btn-clipboard",{target:function(e){return e.nextElementSibling}});e.on("success",function(e){jQuery(e.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle");e.clearSelection()});e.on("error",function(e){var t=/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-";var n="Press "+t+"C to copy";jQuery(e.trigger).attr("title",n).tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle")});




    $('.explore-slider').slick({
        centerPadding: '60px',
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        appendArrows: '.explore-slide-nav',
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-minimal-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-minimal-right"></i></button>',
        responsive: [{
                breakpoint: 1366,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.solution-slider').slick({
        centerPadding: '310px',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    centerPadding: '210px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1470,
                settings: {
                    centerPadding: '110px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1076,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });




    // Plugin Page (Testimonial-slider)

    $('.portShade-slider-l5').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        appendArrows: '.portShade-section-p5 .slider-navigation',
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>',
        dots: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    // Landing 5 testimonial Slider 
    $('.testimonial-slider-l5').slick({
        autoplay: true,
        slidesToShow: 4,
        arrows: true,
        // appendArrows: '.testimonial-section .testimonial-slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-minimal-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-minimal-right"></i></button>',
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })


    $('.testimonial-slider-p4').slick({
        autoplay: true,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    $('.testimonial-slider-p5').slick({
        autoplay: true,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>'
    })




    $('.pricing-option-buttons .pricing-btn').on('click', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.pricing-area .pricing-block').toggleClass('change-value');
    })





    $('.testimonial-section .testimonial-slider').slick({
        autoplay: true,
        slidesToShow: 4,
        arrows: true,
        appendArrows: '.testimonial-section .testimonial-slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-minimal-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-minimal-right"></i></button>',
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

});




// window.onresize = swoo();
// window.onload = swoo();


// function swoo (){
//     var off = $(".landing-5 .container").offset();
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView:6,
//         // centeredSlides: true,
//         spaceBetween: 30,
//         // slidesOffsetBefore : off.left,
//         grabCursor: true
//       });

// }

$(window).resize(function() {
    // var cWidth = $(".landing-5 .container").width();
    var cWidth = $(".portShade-section-p5 .row").width();
    var wWidth = $(window).width();
    var tWidth = (wWidth - cWidth) / 2;
    if (wWidth > 991) {
        $('.landing-5 .swiper-wrapper').css("padding-left", tWidth + 15);
    } else if (wWidth < 991) {
        $('.landing-5 .swiper-wrapper').css("padding-left", Math.abs(tWidth) + 15);
    }
    // console.log(Math.abs(cWidth))

    if (wWidth < 575) {
        $("#l3-testimonial-slider").slick({
            slidesToShow: 1,
        })
    }
});

$(window).ready(function() {
    var cWidth = $(".portShade-section-p5 .row").width();
    var wWidth = $(window).width();
    var tWidth = (wWidth - cWidth) / 2;
    if (wWidth > 991) {
        $('.landing-5 .swiper-wrapper').css("padding-left", tWidth + 15);
    } else if (wWidth < 991) {
        $('.landing-5 .swiper-wrapper').css("padding-left", Math.abs(tWidth) + 15);
    }
    // console.log(Math.abs(cWidth))
});
// if ($.fn.isotope) {
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView:7,
//     spaceBetween: 30,
//     grabCursor: true,
//     navigation: {
//         nextEl: '.swipe-next',
//         prevEl: '.swipe-prev',
//       },
//     breakpoints: {
//         0: {
//           slidesPerView: 1
//         },
//         400: {
//           slidesPerView: 2
//         },
//         700: {
//           slidesPerView: 3
//         },
//         1024: {
//           slidesPerView: 5
//         },
//         1800: {
//           slidesPerView: 6
//         },
//       }
//   });
//   swiper.on('reachEnd', function() { 
//     $('.landing-5 .swiper-wrapper').css("padding-left", 0);
//   });
//   swiper.on('reachBeginning', function() { 
//     var cWidth = $(".portShade-section-p5 .row").width();
//     var wWidth = $(window).width();
//     var tWidth = (wWidth - cWidth) / 2;
//     $('.landing-5 .swiper-wrapper').css("padding-left", tWidth + 15);
//   });
// }
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".sticky-header").addClass("scrolling");
    } else {
        $(".sticky-header").removeClass("scrolling");
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        $(".sticky-header.scrolling").addClass("reveal-header");
    } else {
        $(".sticky-header.scrolling").removeClass("reveal-header");
    }
}