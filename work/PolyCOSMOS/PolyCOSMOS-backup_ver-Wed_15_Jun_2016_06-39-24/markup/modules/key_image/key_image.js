'use sctrict';

function resetParallax() {
    $('.js-key-image-parallax').css('transform', 'translate3d(0, 0, 0)');
    $(window).scroll(function () {
        $('.js-key-image-parallax').css('transform', 'translate3d(0, 0, 0)');
    });
}

function keyImageParallax() {
    if ( window.matchMedia( 'screen and (min-width: 740px)' ).matches ) {
        $(window).scroll(function () {
            $('.js-key-image-parallax').each(function () {
                var yPos = -($(window).scrollTop() / $(this).data('speed'));
                var coords = yPos + 'px';
                $(this).css('transform', 'translate3d(0, ' + coords + ', 0)');
            });
        });
    } else {
        resetParallax();
    }
}

keyImageParallax();

$(window).resize(function () {
    keyImageParallax();
});


$('.js-go-to').on('click', function () {
    var id = $(this).attr('href'),
        target = $(id);
    $('html, body').animate({scrollTop: target.offset().top}, 'fast');
});
