'use strict';

function initVideo() {
  var video = $('.video');
  var $video = $('.video video');

  $video.prop('muted', true);

  function resizeVideo() {
    // video.css('height', $(window).outerWidth() / 16 * 9);
  }

  resizeVideo();

  $(window).on('resize', $.debounce(200, resizeVideo));

  video.on('click', '.video__play', function () {
    $('.video__play').addClass('video__play_visible_no');
    $('.video__pause').removeClass('video__pause_visible_no');
    $('.video__jpg').removeClass('video__jpg_visible_yes');
    $video.prop('muted', false);
    $video[0].play();
  });

  video.on('click', '.video__pause', function () {
    $('.video__play').removeClass('video__play_visible_no');
    $('.video__pause').addClass('video__pause_visible_no');
    $video.prop('muted', true);
    $video[0].pause();
  });

  $video.on('ended', function () {
    $video.prop('muted', true);
    $video[0].currentTime = 0;
    setTimeout(function () {
      $('.video__play').removeClass('video__play_visible_no');
      $('.video__pause').addClass('video__pause_visible_no');
      $('.video__jpg').addClass('video__jpg_visible_yes');
    }, 100);
  });

  try {
    $video[0].load(); // trigger load video
  } catch (e) {
    console.log(e);
  }
}

function initParallax() {
  $('.section_mode_cards.parallax-window').parallax({
    imageSrc: '/images/main/ep01-bg.jpg',
    iosFix: true,
    androidFix: true,
    naturalWidth: 1350,
    naturalHeight: 3215,
    positionX: 'center',
    positionY: 'top',
    speed: 1.2
  });
  $('.section_mode_map .parallax-window').parallax({ imageSrc: '/images/main/map.png', iosFix: true, androidFix: true });
  jQuery(window).trigger('resize').trigger('scroll');
}

function initSlider() {
  var sliderViewPort = $('.slider__viewport');
  var current = 0;
  var blockMove = false;
  var slidesW = 0;
  function calcVals(currentViewPortPosition) {
    slidesW = 0;
    $('.slider-item').each(function (index, el) {
      slidesW += $(el).outerWidth();
    });
    var currentViewPortPosition = currentViewPortPosition || parseInt(sliderViewPort.css('left'));
    if (slidesW + 120 < $('body').outerWidth()) {
      $('.slider__arrow_type_prev').addClass('slider__arrow_disabled_yes');
      $('.slider__arrow_type_next').addClass('slider__arrow_disabled_yes');
      return;
    }
    if (currentViewPortPosition < 60) {
      $('.slider__arrow_type_prev').removeClass('slider__arrow_disabled_yes');
    } else {
      $('.slider__arrow_type_prev').addClass('slider__arrow_disabled_yes');
    }
    if (slidesW + currentViewPortPosition < $('body').outerWidth() - $('.slider-item').last().outerWidth() + 60) {
      $('.slider__arrow_type_next').addClass('slider__arrow_disabled_yes');
    } else {
      $('.slider__arrow_type_next').removeClass('slider__arrow_disabled_yes');
    }
  }

  function moveSlides(increment) {
    var newCurrent = current + increment;
    var moveDelta = 0;
    if (newCurrent < 0) {
      calcVals(moveDelta);current = 0;setTimeout(function () {
        blockMove = false;
      }, 300);return;
    }
    $('.slider-item').each(function (index, el) {
      if (index < newCurrent) {
        moveDelta -= $(el).outerWidth();
      }
    });
    moveDelta += 60;
    if (slidesW + moveDelta < $('body').outerWidth() - $('.slider-item').last().outerWidth() + 60) {
      calcVals(moveDelta);setTimeout(function () {
        blockMove = false;
      }, 300);return;
    }
    current = newCurrent;
    sliderViewPort.css('left', moveDelta);
    calcVals(moveDelta);setTimeout(function () {
      blockMove = false;
    }, 300);return;
  }

  $('.slider__arrow_type_next').on('click', function () {
    if (!blockMove) {
      blockMove = true;
      moveSlides(1);
    }
  });

  $('.slider__arrow_type_prev').on('click', function () {
    if (!blockMove) {
      blockMove = true;
      moveSlides(-1);
    }
  });

  calcVals();
  $(window).on('resize', $.debounce(500, function () {
    blockMove = true;current = 0;moveSlides(0);
  }));
}

$(document).ready(function () {

  initVideo();
  initParallax();
  initSlider();

  $('.slider-item_state_active, .second-screen__close').on('click', function () {
    $('body').toggleClass('into-seria');
    $('html, body').animate({ scrollTop: 0 });
    return false;
  });
  $(window).on('scroll', $.throttle(10, function () {
    if ($(document).scrollTop() > $('.war-text').offset().top + $('.war-text').outerHeight() / 2) {
      $('.header').addClass('visible');
    } else {
      $('.header').removeClass('visible');
    }
  })).trigger('scroll');
});

var isActive = 'is-active';

var escapeCheck = function escapeCheck(element, cb) {
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27 && (element.classList.contains(isActive) || cb)) {
      element.classList.remove(isActive);
      if (cb) cb();
    }
  });
};

function elementToggle(element) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isActive;

  element.classList.toggle(className);
}

var elementClassListToggle = function elementClassListToggle(element) {
  elementToggle(element);
  escapeCheck(element);
};

var toggleIsActive = function toggleIsActive(element) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isActive;

  document.querySelector(element).classList.toggle(className);
  escapeCheck(document.querySelector(element));
};

function toggleSidebar(trigger, element) {
  elementClassListToggle(trigger);
  toggleIsActive(element);
};

$('.js-subscribe').click(function (e) {
  e.preventDefault();
  $('.l-popup-subscribe').addClass('is-active');
});

$('.popup-subscribe__close').click(function () {
  $('.l-popup-subscribe').removeClass('is-active');
});

/* Analytics Events */
$('body').on('click', '.social-button_type_fb', function (e) {
  ga('send', 'event', 'Share', 'Main to Facebook', 'Frontpage');
  console.log('шара фб на главной');
});
$('body').on('click', '.social-button_type_vk', function (e) {
  ga('send', 'event', 'Share', 'Main to VK', 'Frontpage');
  console.log('шара вк на главной');
});
$('body').on('click', '.social-button_type_tg', function (e) {
  ga('send', 'event', 'Share', 'Main to Telegram', 'Frontpage');
  console.log('шара тг на главной');
});
$('body').on('click', '.video__play', function (e) {
  ga('send', 'event', 'Video', 'Play', 'S1 Trailer');
  console.log('трейлер сезона на главной');
});