$('.open-btn').on('click', function () {
    if ( $('.nav').hasClass('nav--opened') ) {
        $('.nav').removeClass('nav--opened');
    } else {
        $('.nav').addClass('nav--opened');
    }
});
