'use strict';

window.fbAsyncInit = function () {
    FB.init({
        appId: '532882623755205',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
    });
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

(function () {
    window.utils = {
        isActiveClass: 'is-active',
        escapeCheck: function escapeCheck(element, cb) {
            var _this = this;

            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 27 && (element.classList.contains(_this.isActiveClass) || cb)) {
                    element.classList.remove(_this.isActiveClass);
                    if (cb) cb();
                }
            });
        },
        toggleIsActive: function toggleIsActive(element) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.isActiveClass;

            document.querySelector(element).classList.toggle(className);
            this.escapeCheck(document.querySelector(element));
        },
        animateContent: function animateContent() {
            AOS.init();
        },
        runParallax: function runParallax() {
            var rellaxElement = document.querySelector('.rellax') || false;
            if (rellaxElement) {
                var rellax = new Rellax('.rellax');
            }
        },
        animateProfile: function animateProfile() {
            var profile = document.querySelector('.header__login');
            var profileClose = document.querySelector('.profile__close');

            if (profile) {
                profile.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.utils.toggleIsActive('.profile');
                });

                profileClose.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.utils.toggleIsActive('.profile');
                });
            }
        },

        elementToggle: function elementToggle(element) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.isActiveClass;

            element.classList.toggle(className);
        },
        elementClassListToggle: function elementClassListToggle(element) {
            this.elementToggle(element);
            this.escapeCheck(element);
        },
        toggleSidebar: function toggleSidebar(trigger, element) {
            this.elementClassListToggle(trigger);
            this.toggleIsActive(element);
            if (trigger.classList.contains('header__menu')) {
                var body = document.querySelector('body');
                body.style.overflow = 'hidden';
            }
            if (trigger.classList.contains('b-header-overlay__close')) {
                var body = document.querySelector('body');
                body.style.overflow = 'auto';
            }
        },
        arrowHeaderOnscroll: function arrowHeaderOnscroll() {
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
        },
        Share: {
            vk: function vk(element) {
                var url = 'http://vkontakte.ru/share.php?';
                url += 'url=' + (element.dataset.link || window.location.href);
                url += '&title=' + element.dataset.title;
                url += '&description=' + element.dataset.desc;
                url += '&image=' + window.location.origin + element.dataset.img;
                url += '&noparse=false';
                window.utils.Share.popup(url);
            },
            fb: function fb(element) {
                FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    action_properties: JSON.stringify({
                        object: {
                            'og:url': element.dataset.link || window.location.href.replace(/#.*$/, ""),
                            'og:title': element.dataset.title,
                            'og:description': element.dataset.desc,
                            'og:image': window.location.protocol + '//' + window.location.hostname + element.dataset.img
                        }
                    })
                }, function (response) {});
            },
            popup: function popup(url) {
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        },
        startGame: function startGame() {
            var introBlock = document.querySelector('.l-intro');
            var body = document.querySelector('body');
            introBlock.style.display = 'none';
            body.style.overflowY = 'auto';
        },
        playVideo: function playVideo(element) {
            var frame = element.closest('.media');
            var video = frame.querySelector('video');
            video.onpause = function () {
                frame.classList.remove(window.utils.isActiveClass);
            };
            if (video.paused) {
                video.play();
                frame.classList.add(window.utils.isActiveClass);
            } else {
                video.pause();
                frame.classList.remove(window.utils.isActiveClass);
            }
        },
        muteVideo: function muteVideo(element) {
            var frame = element.closest('.media');
            var video = frame.querySelector('video');

            if (video.muted) {
                video.muted = false;
                element.classList.toggle('is-active');
            } else {
                video.muted = true;
                element.classList.toggle('is-active');
            }
        },
        toggleHeroSidebar: function toggleHeroSidebar(heroName) {
            var heroSidebar = document.querySelector('.js-hero-' + heroName);
            var wrapper = document.querySelector('.b-wrapper');
            var layoutShadow = document.querySelector('.l-shadow');
            heroSidebar.classList.toggle(window.utils.isActiveClass);
            layoutShadow.classList.toggle('is-visible');
            if (window.innerWidth < 1024) {
                wrapper.classList.toggle('ovh');
            }
            var closeHeroSidebarOnClickOutside = function closeHeroSidebarOnClickOutside(evt) {
                if (!evt.target.classList.contains('hero-sidebar') && !evt.target.classList.contains('text--marked') && !evt.target.closest('.hero-sidebar')) {
                    heroSidebar.classList.remove(window.utils.isActiveClass);
                    layoutShadow.classList.remove('is-visible');
                    document.removeEventListener('click', closeHeroSidebarOnClickOutside);
                }
            };
            document.addEventListener('click', closeHeroSidebarOnClickOutside);
        },
        toggleInfographicsSidebar: function toggleInfographicsSidebar(igName) {
            var igSidebar = document.querySelector('#' + igName);
            var wrapper = document.querySelector('.b-wrapper');
            var layoutShadow = document.querySelector('.l-shadow');
            igSidebar.classList.toggle(window.utils.isActiveClass);
            layoutShadow.classList.toggle('is-visible');
            if (window.innerWidth < 1024) {
                wrapper.classList.toggle('ovh');
            }
            var closeIgSidebarOnClickOutside = function closeIgSidebarOnClickOutside(evt) {
                if (!evt.target.classList.contains('infographics-sidebar') && !evt.target.classList.contains('num-block__arrow') && !evt.target.closest('.infographics-sidebar')) {
                    igSidebar.classList.remove(window.utils.isActiveClass);
                    layoutShadow.classList.remove('is-visible');
                    document.removeEventListener('click', closeIgSidebarOnClickOutside);
                }
            };
            document.addEventListener('click', closeIgSidebarOnClickOutside);
        },
        toggleMobileHeaderOnscroll: function toggleMobileHeaderOnscroll() {
            var currentPos = 0;
            $(window).on('scroll', $.throttle(10, function () {
                if ($(document).scrollTop() > currentPos) {
                    $('.header').addClass('js-toggle-header');
                } else {
                    $('.header').removeClass('js-toggle-header');
                }
                currentPos = $(document).scrollTop();
            })).trigger('scroll');
        },
        hideBurgerforIntro: function hideBurgerforIntro() {
            var popupIntro = document.querySelector('.l-intro');
            var header = document.querySelector('.header');
            var popupIntroPlayLink = document.querySelector('.intro__button');

            if (popupIntro) {
                if (popupIntro.style.display !== 'none' && header) {
                    header.style.display = 'none';
                } else {
                    header.style.display = 'flex';
                }

                if (popupIntroPlayLink && header) {
                    popupIntroPlayLink.addEventListener("click", function () {
                        header.style.display = 'flex';
                    });
                }
            }
        }
    };
})();

if (document.querySelector('.profile')) {
    $(document).mouseup(function (e) {
        var prof = $('.profile');
        var profile = document.querySelector('.profile');
        if (profile.classList.contains('is-active') && !prof.is(e.target) && prof.has(e.target).length === 0) {
            profile.classList.remove('is-active');
        }
    });
}

var popupIntro = document.querySelector('.l-intro');
var burgerButton = document.querySelector('.header__menu');
var popupIntroPlayLink = document.querySelector('.intro__button');

if (popupIntro) {
    if (popupIntro.style.display !== 'none' && burgerButton) {
        burgerButton.style.display = 'none';
    } else {
        burgerButton.style.display = 'block';
    }

    if (popupIntroPlayLink && burgerButton) {
        popupIntroPlayLink.addEventListener("click", function (e) {
            burgerButton.style.display = 'block';
        });
    }
};

$('body').on('touchend', '.media__hover-preview', function () {
    var hoverBlock = $(this).closest('.media').find('.media__hover');
    var hoverPreviewBlock = $(this).closest('.media').find('.media__hover-preview');
    var hoverCaption = $(this).closest('.media').find('.media__caption');
    var showHoverPreview = function showHoverPreview() {
        hoverPreviewBlock.show();
        hoverBlock.hide();
        hoverBlock.css('opacity', '0');
        hoverCaption.off('click');
    };
    hoverPreviewBlock.hide();
    hoverBlock.show();
    hoverBlock.css('opacity', '1');
    hoverCaption.on('touchend', showHoverPreview);
});

/* Analytics Events */
var runAnalyticEvents = function runAnalyticEvents() {
    var mediaFbClass = 'social__item--fb';
    var mediaVkClass = 'social__item--vk';
    var headerFbClass = 'social-likes__widget_facebook';
    var headerVkClass = 'social-likes__widget_vkontakte';
    var headerTgClass = 'social-likes__widget_telegram';
    var mediaParentId;
    var episodeId = $('#app').data('episode');

    $('body').on('click', '.social__item', function (evt) {
        if ($(this).closest('.quote').length) {
            mediaParentId = $(this).closest('.quote').attr('id') + '';
            if ($(this).hasClass(mediaFbClass)) {
                ga('send', 'event', 'Share', 'Image to Facebook', mediaParentId);
                console.log('шара картинки из цитаты с ID#' + mediaParentId + ' в фб в эпизоде');
            } else if ($(this).hasClass(mediaVkClass)) {
                ga('send', 'event', 'Share', 'Image to VK', mediaParentId);
                console.log('шара картинки из цитаты с ID#' + mediaParentId + ' в вк в эпизоде');
            }
        } else if ($(this).closest('.post').length) {
            mediaParentId = $(this).closest('.post').attr('id') + '';
            if ($(this).hasClass(mediaFbClass)) {
                ga('send', 'event', 'Share', 'Image to Facebook', mediaParentId);
                console.log('шара картинки из поста с ID#' + mediaParentId + ' в фб в эпизоде');
            } else if ($(this).hasClass(mediaVkClass)) {
                ga('send', 'event', 'Share', 'Image to VK', mediaParentId);
                console.log('шара картинки из поста с ID#' + mediaParentId + ' в вк в эпизоде');
            }
        } else if ($(this).closest('.post').length) {
            mediaParentId = $(this).closest('.post').attr('id') + '';
            if ($(this).hasClass(mediaFbClass)) {
                ga('send', 'event', 'Share', 'Image to Facebook', mediaParentId);
                console.log('шара картинки из поста с ID#' + mediaParentId + ' в фб в эпизоде');
            } else if ($(this).hasClass(mediaVkClass)) {
                ga('send', 'event', 'Share', 'Image to VK', mediaParentId);
                console.log('шара картинки из поста с ID#' + mediaParentId + ' в вк в эпизоде');
            }
        } else if ($(this).closest('.num-block').length) {
            mediaParentId = $(this).closest('.num-block').attr('id') + '';
            if ($(this).hasClass(mediaFbClass)) {
                ga('send', 'event', 'Share', 'Image to Facebook', mediaParentId);
                console.log('шара картинки из блока с числами с ID#' + mediaParentId + ' в фб в эпизоде');
            } else if ($(this).hasClass(mediaVkClass)) {
                ga('send', 'event', 'Share', 'Image to VK', mediaParentId);
                console.log('шара картинки из блока с числами с ID#' + mediaParentId + ' в вк в эпизоде');
            }
        } else if ($(this).closest('.round-media').length) {
            mediaParentId = $(this).closest('.round-media').attr('id') + '';
            if ($(this).hasClass(mediaFbClass)) {
                ga('send', 'event', 'Share', 'Image to Facebook', mediaParentId);
                console.log('шара картинки из крулого медиа блока с ID#' + mediaParentId + ' в фб в эпизоде');
            } else if ($(this).hasClass(mediaVkClass)) {
                ga('send', 'event', 'Share', 'Image to VK', mediaParentId);
                console.log('шара картинки из крулого медиа блока с ID#' + mediaParentId + ' в вк в эпизоде');
            }
        } else if ($(this).closest('.media').length) {
            if ($(this).closest('.media').find('.media__video').length) {
                mediaParentId = $(this).closest('.media').attr('id') + '';
                if ($(this).hasClass(mediaFbClass)) {
                    ga('send', 'event', 'Share', 'Video to Facebook', mediaParentId);
                    console.log('шара видео из медиа блока с ID#' + mediaParentId + ' в фб в эпизоде');
                } else if ($(this).hasClass(mediaVkClass)) {
                    ga('send', 'event', 'Share', 'Video to VK', mediaParentId);
                    console.log('шара видео из медиа блока с ID#' + mediaParentId + ' в вк в эпизоде');
                }
            }
        } else {
            return false;
        }
    });
    $('body').on('click', '.header__social-item', function () {
        if ($(this).hasClass(headerFbClass)) {
            ga('send', 'event', 'Share', 'Episode to Facebook', episodeId);
            console.log('Шеринг эпизода ' + episodeId + ' в ФБ');
        } else if ($(this).hasClass(headerVkClass)) {
            ga('send', 'event', 'Share', 'Episode to VK', episodeId);
            console.log('Шеринг эпизода ' + episodeId + ' в ВК');
        } else if ($(this).hasClass(headerTgClass)) {
            ga('send', 'event', 'Share', 'Episode to Telegram', episodeId);
            console.log('Шеринг эпизода ' + episodeId + ' в ТГ');
        } else {
            return false;
        }
    });
    $('body').on('click', '.social__link--fb', function (e) {
        ga('send', 'event', 'Share', 'Main to Facebook', 'Frontpage');
        console.log('шара фб на главной');
    });
    $('body').on('click', '.social__link--vk', function (e) {
        ga('send', 'event', 'Share', 'Main to VK', 'Frontpage');
        console.log('шара вк на главной');
    });
    $('body').on('click', '.social__link--tg', function (e) {
        ga('send', 'event', 'Share', 'Main to Telegram', 'Frontpage');
        console.log('шара тг на главной');
    });

    $('body').on('click', '.video__play', function (e) {
        ga('send', 'event', 'Video', 'Play', 'S1 Trailer');
        console.log('трейлер сезона на главной');
    });
    $('body').on('click', '.profile__social-icon-fb', function () {
        ga('send', 'event', 'Login', 'Login via Facebook', episodeId);
        console.log('Вход через ФБ');
    });
    $('body').on('click', '.profile__social-icon-vk', function () {
        ga('send', 'event', 'Login', 'Login via VK', episodeId);
        console.log('Вход через ВК');
    });
    $('body').on('click', '.profile__exit', function () {
        ga('send', 'event', 'Login', 'Logout', episodeId);
        console.log('Выход/сброс сессии');
    });
    $('body').on('click', '.profile__again', function () {
        ga('send', 'event', 'Reset', 'Reset Begin', episodeId);
        console.log('Начать заново — открыть диалог');
    });
    $('body').on('click', '.profile__sure-btn--yes', function () {
        ga('send', 'event', 'Reset', 'Reset Done', episodeId);
        console.log('Начать заново — подтверждение');
    });
    $('body').on('click', '.profile__sure-btn--cancel', function () {
        ga('send', 'event', 'Reset', 'Reset Cancel', episodeId);
        console.log('Начать заново — отмена');
    });
    $('body').on('click', '.result__share-item', function () {
        if ($(this).find('.result__share-icon--fb').length) {
            ga('send', 'event', 'Share', 'Result to Facebook', episodeId);
            console.log('Шеринг финала в ФБ');
        } else if ($(this).find('.result__share-icon--vk').length) {
            ga('send', 'event', 'Share', 'Result to VK', episodeId);
            console.log('Шеринг финала в ВК');
        } else {
            return false;
        }
    });
    $('body').on('click', '.js-subscribe', function () {
        ga('send', 'event', 'Subscribe', 'Subscription Start', episodeId);
        console.log('Вызов формы подписки');
    });
};

runAnalyticEvents();