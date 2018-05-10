'use strict';

(function () {
    // запуск визуализации буферизации видео файла
    var startBuffering = function startBuffering(videoNode) {
        var duration = videoNode.duration;
        var buffer = videoNode.buffered.end(0);
        var percentage = 100 * buffer / duration;
        var bufferNode = videoNode.parentNode.querySelector('.video__buffered');
        bufferNode.style.width = percentage + '%';
        if (buffer < duration) {
            setTimeout(function () {
                startBuffering(videoNode);
            }, 500);
        }
    };
    // показывает заполняющуюся полоску с прогрессом
    var showProgress = function showProgress(videoNode) {
        var duration = videoNode.duration;
        var currentPos = videoNode.currentTime;
        var percentage = 100 * currentPos / duration;
        var progressNode = videoNode.parentNode.querySelector('.video__progress');
        progressNode.style.width = percentage + '%';
    };
    // инициализация видео на главной
    var initDesktopVideoPlayer = function initDesktopVideoPlayer() {
        var videos = document.querySelectorAll('.js-video');
        var visibleClass = 'is-visible';
        var hiddenClass = 'is-hidden';
        // проходимся по всем видео и вешаем события на кнопки
        videos.forEach(function (video, i, videos) {
            var playButton = video.parentNode.querySelector('.video__play');
            var pauseButton = video.parentNode.querySelector('.video__pause');
            var muteButton = video.parentNode.querySelector('.video__mute');
            var resizeButton = video.parentNode.querySelector('.video__resize');
            var videoOverlay = video.closest('.video').querySelector('.video__overlay');
            var videoDesc = video.parentNode.querySelector('.video__mobile-desc');
            // если юзер не двигает мышью по блоку с видео больше 7 секунд, то кнопки управления скрываются

            var isVideoPlaying = function isVideoPlaying() {
                return !video.paused;
            };
            var showControls = function showControls() {
                pauseButton.classList.add(visibleClass);
                muteButton.classList.add(visibleClass);
                resizeButton.classList.add(visibleClass);
            };
            var hideControls = function hideControls() {
                pauseButton.classList.remove(visibleClass);
                muteButton.classList.remove(visibleClass);
                resizeButton.classList.remove(visibleClass);
            };
            var inactivityTimeout;
            var resetDelay = function resetDelay() {
                if (isVideoPlaying()) {
                    showControls();
                    clearTimeout(inactivityTimeout);
                    inactivityTimeout = setTimeout(function () {
                        hideControls();
                    }, 2000);
                }
            };

            var resizePreambleVideo = function resizePreambleVideo() {
                resizeButton.classList.remove('is-active');
                video.closest('.video').classList.remove('resized');
                videoDesc.classList.remove(hiddenClass);
                clearTimeout(inactivityTimeout);
                hideControls();
            };

            video.parentNode.addEventListener('mousemove', function () {
                resetDelay();
            });

            // прячем кнопки после окончания видео
            video.onended = function () {
                playButton.classList.remove(hiddenClass);
                videoDesc.classList.remove(hiddenClass);
                pauseButton.classList.remove(visibleClass);
                muteButton.classList.remove(visibleClass);
                resizeButton.classList.remove(visibleClass);
            };
            playButton.addEventListener('click', function () {
                video.play();
                video.style.opacity = '1';
                playButton.classList.toggle(hiddenClass);
                videoDesc.classList.add(hiddenClass);
                pauseButton.classList.toggle(visibleClass);
                muteButton.classList.toggle(visibleClass);
                resizeButton.classList.toggle(visibleClass);
                if (video.closest('.video--preamble')) {
                    resizeButton.classList.add('is-active');
                    video.closest('.video').classList.add('resized');
                }
            }, true);
            pauseButton.addEventListener('click', function () {
                video.pause();
                playButton.classList.toggle(hiddenClass);
                pauseButton.classList.toggle(visibleClass);
                muteButton.classList.toggle(visibleClass);
                resizeButton.classList.toggle(visibleClass);
                if (video.closest('.video--preamble')) {
                    resizePreambleVideo();
                }
            }, true);
            muteButton.addEventListener('click', function () {
                muteButton.classList.toggle('is-active');
                video.muted = !video.muted;
            }, true);
            resizeButton.addEventListener('click', function () {
                resizeButton.classList.toggle('is-active');
                video.closest('.video').classList.toggle('resized');
                if (video.closest('.video--preamble')) {
                    video.pause();
                    playButton.classList.toggle(hiddenClass);
                    pauseButton.classList.toggle(visibleClass);
                    muteButton.classList.toggle(visibleClass);
                    resizeButton.classList.toggle(visibleClass);
                    resizePreambleVideo();
                }
            }, true);
            video.addEventListener('loadedmetadata', function () {
                setTimeout(function () {
                    startBuffering(video);
                }, 1500);
            });
            video.addEventListener('timeupdate', function () {
                showProgress(video);
            });
            videoOverlay.addEventListener('click', function () {
                resizeButton.classList.toggle('is-active');
                video.closest('.video').classList.toggle('resized');
                if (video.closest('.video--preamble')) {
                    video.pause();
                    playButton.classList.toggle(hiddenClass);
                    pauseButton.classList.toggle(visibleClass);
                    muteButton.classList.toggle(visibleClass);
                    resizeButton.classList.toggle(visibleClass);
                    resizePreambleVideo();
                }
            }, true);
            video.parentNode.addEventListener('mouseout', function () {
                pauseButton.classList.remove(visibleClass);
                muteButton.classList.remove(visibleClass);
                resizeButton.classList.remove(visibleClass);
            });
        });
    };
    var initMobileVideoPlayer = function initMobileVideoPlayer() {
        var videos = document.querySelectorAll('.js-video');
        var visibleClass = 'is-visible';
        var hiddenClass = 'is-hidden';
        videos.forEach(function (video, i, videos) {
            var playButton = video.parentNode.querySelector('.video__mobile-play');
            var pauseButton = video.parentNode.querySelector('.video__mobile-pause');
            var videoBg = video.parentNode.querySelector('.video__mobile-bg');
            var videoDesc = video.parentNode.querySelector('.video__mobile-desc');
            video.addEventListener('loadedmetadata', function () {
                setTimeout(function () {
                    startBuffering(video);
                }, 1500);
            });
            video.addEventListener('timeupdate', function () {
                showProgress(video);
            });
            video.onended = function () {
                playButton.classList.remove(hiddenClass);
                pauseButton.classList.remove(visibleClass);
                videoDesc.classList.remove(hiddenClass);
                videoBg.classList.remove(hiddenClass);
            };
            video.onpause = function () {
                playButton.classList.remove(hiddenClass);
                pauseButton.classList.remove(visibleClass);
                videoDesc.classList.remove(hiddenClass);
                videoBg.classList.remove(hiddenClass);
            };
            playButton.addEventListener('click', function () {
                video.play();
                video.style.opacity = '1';
                playButton.classList.toggle(hiddenClass);
                pauseButton.classList.toggle(visibleClass);
                videoDesc.classList.toggle(hiddenClass);
                videoBg.classList.toggle(hiddenClass);
            }, true);
            pauseButton.addEventListener('click', function () {
                video.pause();
                playButton.classList.toggle(hiddenClass);
                pauseButton.classList.toggle(visibleClass);
                videoDesc.classList.toggle(hiddenClass);
                videoBg.classList.toggle(hiddenClass);
            }, true);
        });
    };

    var toggleHeaderOnScroll = function toggleHeaderOnScroll() {
        var header = document.querySelector('.header');
        var trailer = document.querySelector('.trailer');
        var trailerTopPos = trailer.offsetTop;
        document.addEventListener('scroll', function () {
            if (pageYOffset >= trailerTopPos) {
                header.classList.remove('is-hidden');
            } else {
                header.classList.add('is-hidden');
            }
        });
    };
    var toggleMobileHeaderOnscroll = function toggleMobileHeaderOnscroll() {
        var currentPos = 0;
        $(window).on('scroll', $.throttle(10, function () {
            if ($(document).scrollTop() > currentPos) {
                $('.header').addClass('js-toggle-header');
            } else {
                $('.header').removeClass('js-toggle-header');
            }
            currentPos = $(document).scrollTop();
        })).trigger('scroll');
    };
    var arrowHeaderOnscroll = function arrowHeaderOnscroll() {
        // duration of scroll animation
        var scrollDuration = 200;
        // paddles
        var topPaddle = document.getElementsByClassName('top-paddle');
        var bottomPaddle = document.getElementsByClassName('bottom-paddle');
        // get items dimensions
        var itemsLength = $('.b-header-link').length;
        var itemSize = $('.b-header-link').outerHeight(true);
        var titleLength = $('.b-overlay-submenu-title').length;
        var titleSize = $('.b-overlay-submenu-title').outerHeight(true);
        // get some relevant size for the paddle triggering point
        var paddleMargin = 30;

        var scrollBottom = function scrollBottom() {
            return $(window).scrollTop() + $(window).height();
        };
        // get wrapper height
        var getMenuWrapperSize = function getMenuWrapperSize() {
            return $('.b-container_header').outerHeight();
        };
        var menuWrapperSize = getMenuWrapperSize();
        // the wrapper is responsive
        $(window).on('resize', function () {
            menuWrapperSize = getMenuWrapperSize();
        });
        // size of the visible part of the menu is equal as the wrapper size
        var menuVisibleSize = menuWrapperSize;

        // get total height of all menu items
        var getMenuSize = function getMenuSize() {
            return itemsLength * itemSize + titleLength * titleSize;
        };
        var menuSize = getMenuSize();
        // get how much of menu is invisible
        var menuInvisibleSize = menuSize - menuWrapperSize;

        // get how much have we scrolled to the top
        var getMenuPosition = function getMenuPosition() {
            return $('.b-header-mobile-container').scrollTop();
        };

        // finally, what happens when we are actually scrolling the menu
        $('.b-header-mobile-container').on('scroll', function () {

            // get how much of menu is invisible
            menuInvisibleSize = menuSize - menuWrapperSize;
            // get how much have we scrolled so far
            var menuPosition = getMenuPosition();

            var menuEndOffset = menuInvisibleSize - paddleMargin;

            // show & hide the paddles
            // depending on scroll position
            if (menuPosition <= paddleMargin) {
                $(topPaddle).addClass('hidden');
                $(bottomPaddle).removeClass('hidden');
            } else if (menuPosition < menuEndOffset) {
                // show both paddles in the middle
                $(topPaddle).removeClass('hidden');
                $(bottomPaddle).removeClass('hidden');
            } else if (menuPosition >= menuEndOffset) {
                $(topPaddle).removeClass('hidden');
                $(bottomPaddle).addClass('hidden');
            }
        });
        // scroll to bottom
        $(bottomPaddle).on('click', function () {
            $('.b-header-mobile-container').animate({ scrollTop: menuInvisibleSize }, scrollDuration);
        });
        // scroll to top
        $(topPaddle).on('click', function () {
            $('.b-header-mobile-container').animate({ scrollTop: '0' }, scrollDuration);
        });
    };
    var showMobileBlockOnScroll = function showMobileBlockOnScroll() {
        var windowBottomPos = window.scrollY + window.outerHeight;
        var loader = document.querySelector('.loader-mobile');
        var loaderTopPos = loader.parentNode.offsetTop;
        var $mobileSection = $('#mobile');
        if (windowBottomPos >= loaderTopPos) {
            setTimeout(function () {
                $mobileSection.fadeIn();
                $mobileSection.removeClass('is-hidden');
                loader.classList.add('is-hidden');
            }, 1500);
        }
    };

    var windowWidth = screen.width;
    if (windowWidth > 1024) {
        initDesktopVideoPlayer();
    } else {
        initMobileVideoPlayer();
    }

    if (windowWidth < 768) {
        showMobileBlockOnScroll();
        document.addEventListener('scroll', showMobileBlockOnScroll);
    }

    toggleHeaderOnScroll();
    toggleMobileHeaderOnscroll();
    arrowHeaderOnscroll();
    AOS.init();

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
})();