
$(document).ready(function () {
    'use strict'


    $('.product-wraper').slick({
        dots: true,
        infinite: false,
        speed: 2000,
        margin: 20,
        slidesToShow: 8,
        slidesToScroll: 4,
        centerPadding: '30px',
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.product-wraper2').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        margin: 20,
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        centerPadding: '30px',
        infinite: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // window on scroll add class
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $(".laradoc-header").addClass("custom-active");

            $(".khola_doc_main-menu").addClass("custom-style");
        } else if (scroll <= 200) {
            $(".khola_doc_main-menu").removeClass("custom-style");
        }
    }); //missing );


    AOS.init();
});