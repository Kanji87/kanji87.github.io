'use sctrict';

$(function () {
    $('.js-open-side-menu').on('click', function (e) {
        e.preventDefault();
        $('.side-menu__wrapper').addClass('side-menu__wrapper--active');
    });

    $('.js-close-side-menu').on('click', function (e) {
        e.preventDefault();
        $('.side-menu__wrapper').removeClass('side-menu__wrapper--active');
    });
});
