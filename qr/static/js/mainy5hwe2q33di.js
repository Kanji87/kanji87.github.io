'use strict';

$(function () {
    // if ( window.matchMedia('(min-width: 1280px)').matches ) {
    // if ( screen.width < 749 ) {
    //     $('head').prepend('<meta name="viewport" content="width=320, minimal-ui">');
    //     $('body').addClass('mobile');
    //     alert('mobile: ' + screen.width);
    // } else if ( screen.width < 1023 && screen.width > 750 ) {
    //     $('head').prepend('<meta name="viewport" content="width=device-width">');
    //     alert('tablet ' + screen.width);
    // } else {
    //     $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
    //     alert('desktop ' + screen.width);
    // }


    if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
    } else {
        if ( screen.width > 750 ) {
            $('head').prepend('<meta name="viewport" content="width=device-width">');
            $('body').removeClass('mobile');
        } else {
            $('head').prepend('<meta name="viewport" content="width=320, minimal-ui">');
            $('body').addClass('mobile');
        }
    }

    // $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">').prepend('<link href="/static/css/main.css" rel="stylesheet" type="text/css">');

    if ( $('.c-tile__fotorama').length ) {
        // var $fotoramaDiv = $('.c-tile__fotorama').fotorama({
        //     width: '100%',
        //     height: 498,
        //     navwidth: 270,
        //     arrows: false,
        //     shadows: false,
        //     swipe: true,
        //     click: true,
        //     autoplay: 5000,
        //     loop: true,
        //     stopautoplayontouch: false
        // });

        var $fotoramaDiv = $('.c-tile__fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        $('.c-tile__fotorama').on('fotorama:showend', function () {
            $('.c-tile__slider').on('click', function () {
                if ( fotorama.activeIndex === 0 ) {
                    fotorama.show('>');
                } else {
                    fotorama.show('<');
                }
            });
        }).fotorama({
            width: '100%',
            height: 498,
            navwidth: 270,
            arrows: false,
            shadows: false,
            swipe: true,
            click: true,
            autoplay: 5000,
            loop: true,
            stopautoplayontouch: false
        });
    }
});


'use strict';

$(function () {
    $('.js-nav-toggle').on('click', function () {
        $('.header__nav').addClass('header__nav--active');
    });

    $('.header__nav').on('mouseleave', function () {
        if ( $(this).hasClass('header__nav--active') ) {
            // setTimeout(function () {
            //     $('.header__nav').removeClass('header__nav--active');
            // }, 3000);

            setTimeout(function () {
                $(document).on('mousemove', function (event) {
                    if (!$(event.target).closest('.header__nav').length) {
                        setTimeout(function () {
                            $('.header__nav').removeClass('header__nav--active');
                            $(document).unbind('mousemove');
                        }, 1000);
                    }
                });
            }, 2000);
        } else {
            return false;
        }
    });

});
