$(function () {
    $('.js-toggle-info').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('c-toggle-info--active');
        $('.c-weekly__item-modifier').toggleClass('c-weekly__item-modifier--active');
    });
});

$(function () {
    $(window).scroll(function () {
        if ( $(window).scrollTop() > 50 ) {
            $('.header').addClass('header--fixed');
        } else {
            $('.header').removeClass('header--fixed');
        }

        if ( $(window).scrollTop() > 100 ) {
            $('.c-scroll-top').addClass('c-scroll-top--active');
        } else {
            $('.c-scroll-top').removeClass('c-scroll-top--active');
        }
    });

    $('.js-open-login-popup').on('click', function (e) {
        e.preventDefault();
        $('.header__popup').fadeIn('fast');
    });

    $('.js-close-login-popup').on('click', function () {
        $('.header__popup').fadeOut('fast');
    });

    $('.js-toggle-menu').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('js-toggle-menu-active');
        $('.header__nav').show();
    });

    $('.js-close-menu').on('click', function (e) {
        e.preventDefault();
        $('.header__nav').hide();
        $('.js-toggle-menu').removeClass('js-toggle-menu-active');
    });

    $('.js-refresh').on('click', function (e) {
        e.preventDefault();

        if ( window.matchMedia('(max-width: 767px)').matches ) {
            setTimeout(function () {
                $('.header__nav').hide();
            }, 800);
        }
    });

    $('.c-scroll-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '400');
    });

    $(window).resize(function () {
        if ( window.matchMedia('(max-width: 767px)').matches ) {
            if ( $('.js-toggle-menu').hasClass('js-toggle-menu-active') ) {
                $('.header__nav').show();
            } else {
                $('.header__nav').hide();
            }
        } else if ( window.matchMedia('(min-width: 768px)').matches ) {
            $('.header__nav').css('display', 'inline-block');
        }
    });
});

$(function () {
    if ( $('.c-timeline__slider').length ) {
        $('.c-timeline__slider').bxSlider({
            adaptiveHeight: true,
            pager: false,
            nextText: '>',
            prevText: '<',
            hideControlOnEnd: true,
            infiniteLoop: false
            // nextSelector: 'c-slider__next',
            // prevSelector: 'c-slider__prev'
        });
    }
});
