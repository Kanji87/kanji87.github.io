$('.gallery__list').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000,
    mode: 'fade',
    pager: true,
    pagerType: 'short',
    controls: true,
    responsive: true,
    captions: true,
    touchEnabled: true,
    oneToOneTouch: true,
    onSliderLoad: function (currentIndex) {
        console.log('123');
        $('.gallery__caption').html($('.gallery__list li').eq(0).find('img').attr('title'));
    },
    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
        $('.gallery__caption').html($slideElement.find('img').attr('title'));
    }
});
