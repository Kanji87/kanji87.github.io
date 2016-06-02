'use sctrict';

$(window).scroll(function () {
    var yPos = -($(window).scrollTop() / $('.key-image__cosmonaut').data('speed'));
    var coords = yPos + 'px';
    $('.key-image__cosmonaut').css('transform', 'translate3d(0, ' + coords + ', 0)');
    console.log(coords);
});
