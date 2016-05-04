var App;
$(function () {
    'use strict';
    App = {
        initGlobal: function () {
            // тут запускаем функции, определённые ниже
            this.hasOverflowDetection();
            this.borderingFrontendTiles();
            this.cacheElements();
            this.datePicker();
            //this.datePickerRange();
            this.toTop();
            this.magnificTranslate();
            this.popUp();
            this.popUpAjax();
            this.openInlinePopup();
            this.controlNewsletter();
            this.contentAreaFix();
            this.profileForm();
            this.tabsViewSwitch();
            this.videoPlaceholder();
            this.contentFotorama();
            this.brandbookCheckbox();
            this.bottomSlider();
            this.calendarToggles();
            this.calendarScrolling();
            this.calendarScrollingCheck();
            this.eventList();
            this.actionIfLoggedIn();
            this.setCustomMargins();
            this.dropdownSubMenu();
            this.topNotifications();
            this.timeline();
            this.timelineXL();
            this.tripleSlider();
            this.virtTour();
            this.fitVids();
            this.teaserTitleFont();
            this.socialShare();
            this.addToCal();
            this.contentAccordion();
            this.externalLinksInNewTab();
            this.fbCommentsWidth();
            this.surveyItemHeight();
            this.exhibits();
            //this.tests();
            this.innerSidebar();
            this.dotdotdot();
            this.newsBorder();
            this.addPolyLink();
            this.playGame();
            this.showTour();
            this.openGameOrTourHash();
            this.removeTopSliderShadow();
        },
        cacheElements: function () {
            this.$cal = $('.b-calendar');
            this.$calWrap = $('.b-calendar__wrap');
            this.calendarScroll = {'o': 0, 'n': 0};
            this.calendarScrollDelta = 268;
            /* 2 дня */
        },
        contentFotorama: function () {
            if($('.content-area').width() < 600) {
                console.log($('.content-area').width());
                $('.content-slider').each(function (index) {
                    var $this = $(this);
                    $('.content-slider__content', this)
                        .on('fotorama:show', function (e, fotorama) {
                            $('.content-slider__count', $this).text((fotorama.activeIndex + 1) + ' of ' + fotorama.size);
                            fotorama.$caption = fotorama.$caption || $('.content-slider__meta .content-slider__caption', $this);
                            fotorama.$caption.html(fotorama.activeFrame.caption);
                        })
                        .fotorama({
                            width: '100%',
                            maxHeight: '330',
                            fit: 'contain',
                            transition: 'swipe',
                            loop: true,
                            nav: false,
                            arrows: true,
                            click: true,
                            captions: false
                        });

                    var fotoramaSlider = $('.content-slider__content', this).data('fotorama');
                    $('.content-slider__next', this).click(function () {
                        fotoramaSlider.show({index: '>'});
                    });
                    $('.content-slider__prev', this).click(function () {
                        fotoramaSlider.show({index: '<'});
                    });
                });
            }
            else {
                console.log($('.content-area').width());
                $('.content-slider').each(function (index) {
                    var $this = $(this);
                    $('.content-slider__content', this)
                        .on('fotorama:show', function (e, fotorama) {
                            $('.content-slider__count', $this).text((fotorama.activeIndex + 1) + ' of ' + fotorama.size);
                            fotorama.$caption = fotorama.$caption || $('.content-slider__meta .content-slider__caption', $this);
                            fotorama.$caption.html(fotorama.activeFrame.caption);
                        })
                        .fotorama({
                            width: '100%',
                            maxHeight: '440',
                            fit: 'contain',
                            transition: 'swipe',
                            loop: true,
                            nav: false,
                            arrows: true,
                            click: true,
                            captions: false
                        });

                    var fotoramaSlider = $('.content-slider__content', this).data('fotorama');
                    $('.content-slider__next', this).click(function () {
                        fotoramaSlider.show({index: '>'});
                    });
                    $('.content-slider__prev', this).click(function () {
                        fotoramaSlider.show({index: '<'});
                    });
                });
            }

            $('.content-slider').on('click', function () {
                var count = $('.content-slider__count').text();
                var firstTwoNums = count.substring(0, 2);

                if (firstTwoNums == 10) {
                    $(this).find('.content-slider__link-to-gallery').show();
                }
            });

        },
        tripleSlider: function () {
            $('.triple-slider__wrapper').each(function (index) {
                var itemsInSequence = 0;
                var itemsTotal = $(this).find('.triple-slider__item').length;
                $(this).find('.triple-slider__slide').each(function () {
                    var itemsInSlide = $(this).find('.triple-slider__item').length;
                    itemsInSequence = itemsInSequence + itemsInSlide;
                    $(this).attr('data-sequence', itemsInSequence);
                });

                var $this = $(this);
                $(this).append('<div class="triple-slider__nav"><i class="triple-slider__prev  polyicon-arrow-left-m"></i><span class="triple-slider__count"></span><i class="triple-slider__next polyicon-arrow-right-m"></i>');
                $('.triple-slider', this)
                    .on('fotorama:showend', function (e, fotorama) {
                        var counterSequence = $('.fotorama__active .triple-slider__slide', $this).data('sequence');
                        $('.triple-slider__count', $this).text(counterSequence + ' of ' + itemsTotal);
                    })
                    .fotorama({
                        width: '100%',
                        transition: 'swipe',
                        loop: false,
                        nav: false,
                        arrows: true,
                        swipe: false,
                        click: false,
                        captions: false
                    });
                var tripleSlider = $('.triple-slider', this).data('fotorama');
                $('.triple-slider__next', this).click(function () {
                    tripleSlider.show({index: '>'});
                });
                $('.triple-slider__prev', this).click(function () {
                    tripleSlider.show({index: '<'});
                });
            });
        },
        brandbookCheckbox: function () {
            $('body').on('click', 'input#iagree', function () {
                if ($('input#iagree').is(":checked")) {
                    $('.btn__brandbook').addClass('btn__brandbook-active');
                }
                else {
                    $('.btn__brandbook').removeClass('btn__brandbook-active');
                }
            });

            $('.btn__brandbook').click(function () {
                if ($(this).hasClass('btn__brandbook-active')) {
                    return true;
                } else {
                    return false;
                }
            });
        },
        calendarToggles: function () {
            // Календарь. Раскрытие событий дня по клику на кнопки типа +5 событий
            $('.events__count').on('click', function () {
                var parent = $(this).closest('.calendar__item'),
                    allitems = $('.calendar__item'),
                    morenews = parent.find('.ci__additional_news'),
                    arrows = $('.calendar__scroll-down-arrow, .calendar__scroll-down');

                $('.events__count').show();
                $('.hidden-count').hide();

                if (!parent.hasClass('show--all-events')) {
                    allitems.each(function () {
                        var that = this;
                        $(this).find('.ci__additional_news').slideUp('fast', function () {
                            $(that).removeClass('show--all-events');
                        });
                    });
                    morenews.slideDown('fast', function () {
                        App.calendarScrollingCheck();
                        parent.addClass('show--all-events');
                        arrows.css({display: 'block'});
                        parent.find('.events__count').hide();
                        parent.find('.hidden-count').show();
                    });
                }
                // else {
                //     parent.removeClass('show--all-events');
                //     morenews.slideUp('fast');
                //     parent.find('.events__count').show();
                //     parent.find('.hidden-count').hide();
                // }

                return false;
            });

            $('.hidden-count').on('click', function () {
                var parent = $(this).closest('.calendar__item'),
                    morenews = parent.find('.ci__additional_news');

                if (parent.hasClass('show--all-events')) {
                    parent.removeClass('show--all-events');
                    morenews.slideUp('fast'/*, function () {
                        App.calendarScrollingCheck();
                    }*/);
                    parent.find('.events__count').show();
                    parent.find('.hidden-count').hide();
                }

                return false;
            });


            // open first day in calendar
            $('.b-calendar').find('.calendar__item').first().find('.events__count').trigger('click');

            // Календарь. Раскрытие одного события по его названию
            $('.ci-ni__open').on('click', function () {
                $(this).toggleClass('polyicon-arrow-down-m polyicon-arrow-up-m');
                var parent = $(this).closest('.ci__news-item'),
                    item = parent.closest('.calendar__item'),
                    moreinfo = parent.find('.ci-ni__more-info'),
                    arrows = $('.calendar__scroll-down-arrow, .calendar__scroll-down');

                parent.toggleClass('show--current-events');
                item.toggleClass('active');

                if (parent.hasClass('show--current-events')) {
                    moreinfo.slideDown('fast', function () {
                        arrows.css({display: 'block'});
                    });
                } else {
                    moreinfo.slideUp('fast');
                }
                return false;
            });
        },
        calendarScrolling: function () {
            // Календарь. Обеспечение прокрутки. Подразумевается, что высота содержимого больше, чем высота блока
            $('.calendar__scroll-down-arrow').on('click', function () {
                App.$cal.animate({scrollTop: App.calendarScroll.n + App.calendarScrollDelta}, 100, function () {
                    App.calendarScrollingCheck();
                });
                return false;
            });
            $('.calendar__scroll-up-arrow').on('click', function () {
                App.$cal.animate({scrollTop: 0},200, function () {
                    App.calendarScrollingCheck();
                });
                return false;
            });
        },
        calendarScrollingCheck: function () {
            // Вспомогательная ф-я для прокрутки календаря
            this.calendarScroll.o = this.calendarScroll.n;
            this.calendarScroll.n = this.$cal.scrollTop();

            if (!this.calendarScroll.n) {
                $('.calendar__scroll-up-arrow').css({display: 'none'});

                if (this.$cal.outerHeight(true) < this.$calWrap.outerHeight(true)) {
                    $('.calendar__scroll-down-arrow').css({display: 'none'});
                } else {
                    $('.calendar__scroll-down-arrow').css({display: 'block'});
                }
            } else {
                $('.calendar__scroll-up-arrow').css({display: 'block'});

                if (this.calendarScroll.n - this.calendarScroll.o < this.calendarScrollDelta) {
                    $('.calendar__scroll-down-arrow').css({display: 'none'});
                } else {
                    $('.calendar__scroll-down-arrow').css({display: 'block'});
                }
            }

            // if ( $('.b-calendar__wrap').height() > $('.b-calendar').height() ) {
            //     $('.calendar__scroll-down-arrow').css({display: 'none'});
            // }
        },
        bottomSlider: function () {
            // Гармошка-слайдер чуть выше футера

            var museumSlider = $('.museum_slider__container');
            var museumSliderLength = $('.museum_slider__container li').length;
            var museumSliderItem = $('.museum_slider__container .bottom_slider__item');
            var museumSliderInfo = $('.museum_slider__container .bottom_slider__info');
            var museumSliderTextYear = $('.museum_slider__container .bottom_slider__text-year');

            var bottomSlider = $('.bottom_slider__container');
            var bottomSliderLength = $('.bottom_slider__container li').length;
            var bottomSliderItem = $('.bottom_slider__container .bottom_slider__item');
            var bottomSliderInfo = $('.bottom_slider__container .bottom_slider__info');
            var bottomSliderTextYear = $('.bottom_slider__container .bottom_slider__text-year');

            if (bottomSliderLength === 6) {
                bottomSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        $(this).css('width', '581px');
                        return true;
                    }
                });

                bottomSliderItem.on('click', function () {
                    bottomSliderItem.css('width', '83px');
                    $(this).css('width', '581px');
                });
            }

            if (bottomSliderLength === 7) {
                bottomSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        $(this).css('width', '570px');
                        $(this).children('.bottom_slider__info').css('width', '166px');
                        return true;
                    }
                    else {
                        $(this).css('width', '71px');
                        $(this).children('.bottom_slider__info').css('width', '71px');
                        $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                            'width': '71px'
                        });
                    }
                });

                bottomSliderItem.on('click', function () {
                    bottomSliderItem.css('width', '71px');
                    bottomSliderInfo.css('width', '71px');
                    bottomSliderTextYear.css('width', '71px');
                    $(this).children('.bottom_slider__info').css('width', '166px');
                    $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css('width', '166px');
                    $(this).css('width', '570px');
                });
            }

            if (bottomSliderLength === 8) {
                bottomSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        $(this).css('width', '499px');
                        $(this).children('.bottom_slider__info').css('width', '166px');
                        return true;
                    }
                    else {
                        $(this).css('width', '71px');
                        $(this).children('.bottom_slider__info').css('width', '71px');
                        $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                            'width': '71px',
                            'font-size': '15px'
                        });
                    }
                });

                bottomSliderItem.on('click', function () {
                    bottomSliderItem.css('width', '71px');
                    bottomSliderInfo.css('width', '71px');
                    bottomSliderTextYear.css({
                        'width': '71px',
                        'font-size': '15px'
                    });
                    $(this).children('.bottom_slider__info').css('width', '166px');
                    $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                        'width': '166px',
                        'font-size': '24px'
                    });
                    $(this).css('width', '499px');
                });
            }

            if (museumSliderLength === 6) {
                museumSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        $(this).css('width', '447px');
                        return true;
                    }
                    else {
                        $(this).css('width', '43px');
                        $(this).children('.bottom_slider__info').css('width', '43px');
                        $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                            'width': '43px',
                            'font-size': '14px'
                        });
                    }
                });

                museumSliderItem.on('click', function () {
                    museumSliderItem.css('width', '43px');
                    museumSliderInfo.css('width', '43px');
                    museumSliderTextYear.css({
                        'width': '43px',
                        'font-size': '14px'
                    });
                    $(this).css('width', '447px');
                    $(this).children('.bottom_slider__info').css('width', '166px');
                    $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                        'width': '116px',
                        'font-size': '24px'
                    });
                });
            }

            if (museumSliderLength === 4) {
                museumSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        return true;
                    }
                    else {
                        $(this).css('width', '72px');
                        $(this).children('.bottom_slider__info').css('width', '72px');
                    }
                });

                museumSliderItem.on('click', function () {
                    museumSliderItem.css('width', '72px');
                    museumSliderInfo.css('width', '72px');
                    $(this).css('width', '446px');
                    $(this).children('.bottom_slider__info').css('width', '166px');
                });
            }

            if (museumSliderLength === 6) {
                museumSlider.children('li').each(function () {
                    if ($(this).hasClass('item-open')) {
                        $(this).css('width', '447px');
                        return true;
                    }
                    else {
                        $(this).css('width', '43px');
                        $(this).children('.bottom_slider__info').css('width', '43px');
                        $(this).children('.bottom_slider__info').children('.bottom_slider__text-year').css({
                            'width': '43px',
                            'font-size': '14px'
                        });
                    }
                });

                museumSliderItem.on('click', function () {
                    museumSliderItem.css('width', '43px');
                    museumSliderInfo.css('width', '43px');
                    museumSliderTextYear.css({
                        'width': '43px',
                        'font-size': '14px'
                    });
                    $(this).css('width', '447px');
                    $(this).children('.bottom_slider__info').css('width', '166px');
                    $(this).children('.bottom_slider__text-year').css({
                        'width': '116px',
                        'font-size': '24px'
                    });
                });
            }


            $('.bottom_slider__item').on('click', function () {
                $('.bottom_slider__item').removeClass('item-open');
                $(this).addClass('item-open');
                $('.bottom_slider__item .bottom_slider__text-year a').attr('onclick', 'return check()');
                $(this).find('.bottom_slider__text-year a').attr('onclick', '');
                // return false;
            });
        },
        toTop: function () {
            // Кнопка Наверх
            $('#scroll-to-top').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 400);
                return false;
            });
        },
        openNewsletter: function () {
            $('.sidebar-widget__newsletter').addClass('open-newsletter');
        },
        closeNewsletter: function () {
            $('.sidebar-widget__newsletter').removeClass('open-newsletter');
        },
        controlNewsletter: function () {
            $('#newsletter-email').on('touchstart focus click', function (e) {
                App.openNewsletter();
                $('body').on('touchstart click', function (e) {
                    if ($(e.target).closest('.sidebar-widget__newsletter-form').length === 0) {
                        App.closeNewsletter();
                    }
                });
            });
            $('.input-block__simple-checkbox label').on('click', function () {
                $(this).parent().toggleClass('is-checked');
            });
        },
        videoPlaceholder: function () {
            $('.content-video__placeholder-action').click(function (e) {
                e.preventDefault();
                var width = $('img', this).width();
                var height = $('img', this).height();
                var url = $(this).attr('href');
                var $iframe = $('<iframe src="' + url + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0"/>');
                $(this).parent().toggle();
                $(this).parent().next().height(height).html($iframe).toggle();
            });
        },
        magnificTranslate: function () {
            $.extend(true, $.magnificPopup.defaults, {
                tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
                image: {
                    tError: '<a href="%url%">Ошибка загрузки</a>'
                },
                ajax: {
                    tError: '<a href="%url%">Ошибка загрузки</a>' // Error message when ajax request failed
                }
            });
        },
        popUp: function () {
            $('.popup-open-link').magnificPopup({
                preloader: false,
                type: 'inline',
                callbacks: {
                    open: function () {
                        $('.popup-cancel').on('click', function (e) {
                            e.preventDefault();
                            $.magnificPopup.close();
                        });
                        $('.popup-content .btn__cancel, .close_popup').on('click', function () {
                            // $.magnificPopup.close();
                            $('.mfp-close').trigger('click');
                        });
                    },
                    afterClose: function() {
                        if (window.location.hash != '') {
                            window.location.hash = '';
                        }
                    }
                }
            });
        },
        popUpAjax: function () {
            $('.ajax-popup-open-link').magnificPopup({
                type: 'ajax',
                callbacks: {
                    parseAjax: function(mfpResponse) {
                        var pageType = $('body').find('.page__layout')/*.attr('class')*/;
                        if (pageType.hasClass('page-type__education')) {mfpResponse.data = "<div class='popup-colored popup-green'>" + mfpResponse.data + "</div>";
                        }
                        else if (pageType.hasClass('page-type__pop-science') || pageType.hasClass('page-type__video')) {
                            mfpResponse.data = "<div class='popup-colored popup-magenda'>" + mfpResponse.data + "</div>";
                        }
                        else if (pageType.hasClass('page-type__museum') || pageType.hasClass('page-type__museum-support')) {
                            mfpResponse.data = "<div class='popup-colored popup-violet'>" + mfpResponse.data + "</div>";
                        }
                        else if (pageType.hasClass('page-type__events') || pageType.hasClass('page-type__news') || pageType.hasClass('page-type__profile') || pageType.hasClass('tag-page')) {
                            mfpResponse.data = "<div class='popup-colored popup-blue'>" + mfpResponse.data + "</div>";
                        }
                    },
                    ajaxContentAdded: function () {
                        return this.content;
                    }
                }
            });
        },
        openInlinePopup: function () {
            var windowHash = window.location.hash;
            $('body').find('.popup-open-link').on('click', function() {
                window.location.hash = $(this).attr('href').replace('#', '');
            });

            if (windowHash !== '') {
                $('.popup-open-link').each(function() {
                    if (windowHash == $(this).attr('href')) {
                        $(this).trigger('click');
                    };
                })
            }
        },
        datePicker: function () {

            // If there is a calendar dropdown (#calendarWidget) on current page
            // and location.hash isn’t empty
            if ($('#calendarWidget').length && window.location.hash &&
                window.location.hash !== '#single_classes' &&
                window.location.hash !== '#for-schools' &&
                window.location.hash !== '#circles' &&
                window.location.hash !== '#about-lab') {
                var date = window.location.hash;
                var reg = /^\#\d{4}-\d{2}-\d{2}$/;
                $('#datePicker__from').on('filter_ready', function (event) {
                    if (reg.test(date)) {
                        var dateFromHash = window.location.hash.substr(1);
                        $('#datePicker__to').val('');
                        $('#datePicker__from').val(dateFromHash).trigger('change');
                    };
                });
            }

            $('#calendarWidget').kalendae({
                mode: 'single',
                weekStart: 1,
                useYearNav: false,
                dayOutOfMonthClickable: true,
                subscribe: {
                    'change': function (date, action) {
                        $('#datePicker__to').val('');
                        $('#datePicker__from').val(this.getSelected()).trigger('change');
                        window.location.hash = this.getSelected();
                        setTimeout(function () {
                            $('.calendar-widget').toggleClass('calendar-widget--active');
                        }, 200);
                    }
                }
            });

            $('.calendar-widget__block').click(function (e) {
                e.stopPropagation();
            });

            $('.calendar-widget__open').click(function (e) {
                $('body').on('touchstart click', function () {
                    $('.calendar-widget').removeClass('calendar-widget--active');
                });
                e.preventDefault();
                e.stopPropagation();
                $('.calendar-widget').toggleClass('calendar-widget--active');
            });
        },
        datePickerRange: function () {
            var kalendaeCount = 0;
            $('#calendarWidget').kalendae({
                mode: 'range',
                weekStart: 1,
                useYearNav: false,
                dayOutOfMonthClickable: true,
                subscribe: {
                    'change': function (date, action) {
                        // get the first and second date
                        var dateToFrom = this.getSelected().split(' - ');
                        var dateFrom = dateToFrom[0];
                        var dateTo = dateToFrom[1];

                        // set the first date to #datePicker__from, second to #datePicker__to, then trigger 'change'
                        $('#datePicker__from').val(dateFrom);
                        $('#datePicker__to').val(dateTo).trigger('change');

                        kalendaeCount++;

                        // kalendaeCount is used to close the calendar on the second user's input after a small delay
                        if (kalendaeCount === 2) {
                            setTimeout(function () {
                                $('.calendar-widget').toggleClass('calendar-widget--active');
                            }, 500);
                            kalendaeCount = 0;
                        }
                    }
                }
            });

            $('.calendar-widget__open').on('touchstart click', function (e) {
                e.preventDefault();
                $('.calendar-widget').toggleClass('calendar-widget--active');
            });

            $('.calendar-widget__open__wrapper, .calendar-widget__block').click(function (e) {
                e.stopPropagation();
            });

            $('body').on('touchstart click', function () {
                $('.calendar-widget').removeClass('calendar-widget--active');
            });
        },
        eventList: function () {
            $('.event-list__inner').on('click', '.event-list__meta-open', function () {
                $(this).toggleClass('polyicon-arrow-down-m polyicon-arrow-up-m');
                $(this).closest('.event-list__item').toggleClass('event-list__item--open');
            });
        },
        contentAreaFix: function () {
            // remove empty paragraphs from RTE
            $('.content-area p:empty').remove();

            // wrap each single img in figure
            $('.content-area > p').each(function (index) {
                if ($('img:only-child', this).length > 0) {
                    $('img:only-child', this).wrap('<figure></figure>');
                    $('figure', this).insertBefore(this);
                    $(this).remove();
                }
            });

            // remove styles from img and add them to figure
            $('.content-area figure').each(function (index) {
                // only choose img that have inline float styles
                var $img = $(this).find('img[style*="float"]');
                if ($img.parents('#editable').length == 0) {
                    var imgStyle = $img.attr('style');
                    // clear img style
                    $img.attr('style', '');
                    // set figure style
                    $(this).attr('style', imgStyle);
                }
            });

        },
        profileForm: function () {
            $('.profile-form__show-more').click(function (e) {
                e.preventDefault();
                $('.profile-form__more-fields').toggle();
                $(this).toggleClass('profile-form__show-more--less');
            });
        },
        tabsViewSwitch: function () {
            var tabs = {};
            $('.tabs-view-item').hide();
            $('.tabs-view-item').each(function(){
                var group = $(this).data('group');
                if (!tabs[group]) {
                    tabs[group] = [$(this)]
                } else {
                    tabs[group].push($(this))
                }
            });
            $.each(tabs, function(k, v){
                var f = v[v.length  -1];
                f.show()
                $('.tabs-view-switch[href="#' + f.attr('id')+'"]').addClass('tabs-view-switch--active');
            });

            $('.tabs-view-switch').click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                var itemToShow = $(this).attr('href');
                $.each(tabs[$(itemToShow).data('group')], function(i, v){
                    v.hide()
                });
                $(itemToShow).show();
                $('.tabs-view-switch').removeClass('tabs-view-switch--active');
                $(this).addClass('tabs-view-switch--active');
            });
        },
        dropdownSubMenu: function () {
            var menu = $('.secondary-menu__list');
            var menuWidth = menu.outerWidth();

            $('.secondary-menu__item--has-dropdown').on('mouseenter', function () {
                var submenu = $('.secondary-menu__submenu', this);
                var submenuWidth = submenu.outerWidth();

                var relativePosition = submenu.offset().left - menu.offset().left;
                var availibleSpace = menuWidth - relativePosition;
                var spaceNeeded = submenuWidth - availibleSpace;

                if (spaceNeeded > 0) {
                    submenu.css({'left': -spaceNeeded });
                }

            });
        },
        topNotifications: function () {
            // enable pretty scroll for notifications
            $('.header__user-notifications-list').niceScroll({zindex: '1000'});

            // open and close notifications menu
            $('.header__user-notifications-dropdown').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('is-open').siblings().removeClass('is-open');
                $('.header__user-notifications-list').getNiceScroll().resize();
            });

            $('.header__user-notifications-dropdown, .header__user-notifications-list-wrap').click(function (e) {
                e.stopPropagation();
            });

            $(document).click(function (e) {
                $('.header__user-notifications-list').getNiceScroll().resize();
                $('.header__user-notifications-dropdown').removeClass('is-open');
            });
        },
        timeline: function () {
            var frame = $('.about-museum__timeline-wrap');
            var options = {
                horizontal: 1,
                itemNav: 'basic',
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $('.about-museum__timeline-scroll'),
                scrollBy: 0,
                activatePageOn: 'click',
                speed: 400,
                elasticBounds: 1,
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1
            };

            if ($(frame).length) {
                var sly = new Sly(frame, options);
                var numberOfItems = $('.about-museum__timeline li').length - 1;

                sly.on('load move', function () {
                    //show left blur if not at the start
                    if (sly.pos.cur !== sly.pos.start) {
                        $('.about-museum__timeline-blur-left').css({ opacity: 1 });
                    } else {
                        $('.about-museum__timeline-blur-left').css({ opacity: 0});
                    }

                    //show right blur if not at the end
                    if (sly.pos.cur !== sly.pos.end) {
                        $('.about-museum__timeline-blur-right').css({ opacity: 1 });
                    } else {
                        $('.about-museum__timeline-blur-right').css({ opacity: 0});
                    }
                });
                sly.init();
            }
        },
        timelineXL: function () {
            $('.about-timeline-xl__item:first-child').addClass('hovered');
            $('.about-timeline-xl__item-year, .about-timeline-xl__item-container').hover(
                function () {
                    $('.about-timeline-xl__item').removeClass('hovered');
                    $(this).parent('.about-timeline-xl__item').addClass('hovered');
                },
                function () {
                    $(this).parent('.about-timeline-xl__item').removeClass('hovered');
                }
            );
        },
        virtTour: function () {
            function showVirtTourItem(item) {
                $('.virt-tour-item').hide();
                // prevent video embeds from playing in the background
                $('.virt-tour-item iframe').attr('src', $('iframe').attr('src'));
                $('.' + item).show();
                window.location.hash = item;
            }

            if ($('.virt-tour').length > 0) {
                var item;
                $('.virt-tour__list-link').on('click', function (e) {
                    e.preventDefault();
                    item = $(this).attr('href').replace('#', '');
                    showVirtTourItem(item);
                    $('.virt-tour__list-item').removeClass('active');
                    $(this).parent().addClass('active');
                });

                var hash = window.location.hash;

                if (hash !== '') {
                    item = hash.replace('#', '');
                    showVirtTourItem(item);

                    $('.virt-tour__list-link').each(function () {
                        if ($(this).attr('href') === hash) {
                            $(this).parent().addClass('active');
                        }
                    });

                } else {
                    item = $('.virt-tour__list-link:first-child').attr('href').replace('#', '');
                    $('.virt-tour__list-item:first-child').addClass('active');
                    showVirtTourItem(item);
                }
            }
        },
        fitVids: function () {
            // make youtube and vimeo videos fit any column size
            $('.content-area').fitVids();
        },
        teaserTitleFont: function () {
            var containerHeight = $('.teaser-info__title').height();
            var titleHeight = $('.teaser-info__title h1').height();
            if (containerHeight < titleHeight) {
                $('.teaser-info__title h1').css({'font-size': '18px'});
            }
        },
        socialShare: function () {
            $(document).on('touchstart click', '.social-share__more-button', function () {
                $(this).next('.social-share__more-container').toggle();
            });

            $(document).on('touchstart click', function () {
                $('.social-share__more-container').hide();
            });

            $(document).on('touchstart click', '.social-share__more-button, .social-share__more-container', function (e) {
                e.stopPropagation();
            });
        },
        addToCal: function () {
            $(document).on('click', '.add-to-cal__button', function () {
                $(this).next('.add-to-cal__container').toggle();
            });

            $(document).on('touchstart click', function () {
                $('.add-to-cal__container').hide();
            });

            $(document).on('click', '.add-to-cal__button, .add-to-cal__container', function (e) {
                e.stopPropagation();
            });
        },
        contentAccordion: function () {
            $('.accordeon h3').each(function (index) {
                // select all elements from this h3 (including itself) until the next h3
                var accordionItem = $(this).nextUntil('h3').andSelf();
                accordionItem.wrapAll('<div class="content-accordion__item"></div>');
            });
            $('.content-accordion__item').each(function (index) {
                // wrap first element in title container
                $(this).children(':first').addClass('content-accordion__title');

                // wrap all other elements in body container
                $(this).children(':not(.content-accordion__title)').wrapAll('<div class="content-accordion__body"></div>');
                $('.content-accordion__title', this).wrap('<div class="content-accordion__title-bar"></div>');

                // add show and hide buttons
                $('.content-accordion__title-bar', this).append('<div class="content-accordion__show">Показать <i class="polyicon-arrow-down-m"></i></div>');
                $('.content-accordion__body', this).append('<div class="content-accordion__hide">Скрыть <i class="polyicon-arrow-up-m"></i></div>');
            });

            // show the first item
            $('.content-accordion__item:first-child').addClass('active');

            // open and close items on click
            $('.content-accordion__title-bar, .content-accordion__hide').on('click', function () {
                $(this).closest('.content-accordion__item').toggleClass('active');
            });
        },
        actionIfLoggedIn: function () {
            if (!$('body').hasClass('logged-in')) {
                $('body').on('click', '.action-if-loggedin', function (event) {
                    $('.header__auth-link--login').trigger('click');
                });
            }
        },
        externalLinksInNewTab: function () {
            $('.main a[href^="http://"], .main a[href^="https://"], .sidebar a[href^="http://"], .sidebar a[href^="https://"]').filter(function () {
                return this.hostname && this.hostname !== location.hostname;
            }).attr('target', '_blank');
        },
        setCustomMargins: function () {
            if (!$('.teaser-info').length && !$('.top_slider').length && !$('.promo-banners').length) {
                $('.empty-middle-bar').hide();
                $('.grid-holder').addClass('grid-holder--no-teaser');
            }

            var emptyBar = $('.empty-middle-bar'),
                gridHolder = $('.grid-holder'),
                dynamicHeader = $('.dynamic-header'),
                addPostInput = $('.addpost-input');
            var pageTitleHeight = dynamicHeader.height();


//            if (dynamicHeader.length && $('#post-form').length) {
//                emptyBar.hide();
//                gridHolder.css({'margin-top': pageTitleHeight+10});
//                dynamicHeader.css({'margin-top': -pageTitleHeight-10});
//                addPostInput.css({'top': -pageTitleHeight-10});
//            }
//            else
            if (dynamicHeader.length) {
                emptyBar.hide();
                gridHolder.css({'margin-top': pageTitleHeight+15});
                dynamicHeader.css({'margin-top': -pageTitleHeight-15});
            }

            // if ($('.top_slider').length) {
            //     $('.sidebar-widget__newsletter').addClass('sidebar-widget__newsletter--index-page');
            // }
        },
        fbCommentsWidth: function () {
            // fix width for Facebook comments widget
            if ($('.main.wide').length) {
                $('#fb-comments').attr('data-width', '664');
            } else {
                $('#fb-comments').attr('data-width', '496');
            }
        },
        surveyItemHeight: function () {
            $('.survey-item-pair').each(function () {
                var containerHeight = $(this).outerHeight(true) + 90;
                var children = $(this).children().length;
                if (children === 2) {
                    $(this).find('.survey-item').css('height', containerHeight);
                }
            });
        },
        promoSet: function (backgroundImage, backgroundColor, mastheadImage, mastheadLink, breadcrumbsColor, backgroundProperties) {

            if (backgroundImage) {
                $('body').css('background-image', 'url(' + backgroundImage + ')');
            }

            if (backgroundColor) {
                $('body').css('background-color', backgroundColor);
            }

            if (mastheadImage) {

                if (mastheadLink) {
                    $('.top-breadcrumbs').after('<a href="' + mastheadLink + '" class="masthead-promo-image"><img src="' + mastheadImage + '"></a>');
                } else {
                    $('.top-breadcrumbs').after('<img src="' + mastheadImage + '">');
                }

            }

            if (breadcrumbsColor) {
                $('.top-breadcrumbs__item a').css('color', breadcrumbsColor);
            }

            if (backgroundProperties) {

                switch (backgroundProperties) {
                    case 'center on top':
                        $('body').addClass('background-position-center-top');
                        break;

                    case 'fill':
                        $('body').addClass('background-position-repeat');
                        break;

                    case 'horizontal fill':
                        $('body').addClass('background-position-repeat-x');
                        break;

                    case 'vertical fill':
                        $('body').addClass('background-position-repeat-y');
                        break;
                }

                $('body').addClass('');

            }

            $('body').addClass('promo');

        },
        exhibits: function () {
            function exhibitsRemoveActive() {
                $('.exhibits-items__wrap').find('.active').removeClass('active');
                $('.exhibits-items__item-more').hide();
            }

            $('.exhibits-items__item').on('click', function (e) {
                exhibitsRemoveActive();
                $(this).toggleClass('active').parent().toggleClass('active');
                $(this).find('.exhibits-items__item-more').toggle();
            });

            $(document).on('touchstart click', function () {
                exhibitsRemoveActive();
            });

            $(document).on('touchstart click', '.exhibits-items__item', function (e) {
                e.stopPropagation();
            });
        },
        dotdotdot: function () {
            $('.news__item-description,' +
                '.event-list__description').dotdotdot();
            $('.sidebar-widget__persons-achievement').dotdotdot();
            $('.blog-post__item-author').dotdotdot();
            $(document).ajaxComplete(function () {
                $('.news__item-description,' +
                    '.event-list__description,' +
                    '.blog-post__item-author').dotdotdot();
            });
        },
        tests: function () {
            $(document).on('click', '.test-questions__next', function () {
                $(this).parent().removeClass('active').next().addClass('active');
            });
        },
        innerSidebar: function () {
            $(document).on('click', '.inner-sidebar__has-submenu', function () {
                $(this).toggleClass('open').find('.inner-sidebar__category-submenu').toggle('fast');
            });
        },
        hasOverflowDetection: function () {
            $.fn.hasOverflow = function () {
                var $this = $(this);
                var $children = $this.find('*');
                var len = $children.length;

                if (len) {
                    var maxWidth = 0;
                    var maxHeight = 0
                    $children.map(function () {
                        maxWidth = Math.max(maxWidth, $(this).outerWidth(true));
                        maxHeight = Math.max(maxHeight, $(this).outerHeight(true));
                    });

                    return maxWidth > $this.width() || maxHeight > $this.height();
                }
                return false;
            };
        },
        newsBorder: function () {
            if ( !$('.secondary-menu--tabs').length ) {
                $('.news-list-filter > .news__inner').addClass('top-bordered');
                $('.blog-list-filter > .news__inner').addClass('top-bordered');
            }
        },
        addPolyLink: function () {
            function addLink() {
                var body_element = document.getElementsByTagName('body')[0];
                var selection;
                selection = window.getSelection();
                var pagelink = "<br /><br /> Источник: <a href='"+document.location.href+"'>"+document.location.href+"</a>";
                var copytext = selection + pagelink;
                var newdiv = document.createElement('div');
                newdiv.style.position='absolute';
                newdiv.style.left='-99999px';
                body_element.appendChild(newdiv);
                newdiv.innerHTML = copytext;
                selection.selectAllChildren(newdiv);
                window.setTimeout(function() {
                    body_element.removeChild(newdiv);
                },0);
            }
            document.oncopy = addLink;
        },
        borderingFrontendTiles: function(){
            var gridBlock = $('.gridster li');
            gridBlock.each(function() {
                if ($(this).data('col') === 1 && $(this).find('div.block-2-2').length != 0) {
                    $(this).addClass('bi__left-bordered');
                }
                if ($(this).data('col') === 1 && $(this).find('div.block-1-1').length != 0) {
                    $(this).addClass('bi__left-bordered');
                }
                if ($(this).data('row') === 9 && $(this).find('div.block-1-1').length != 0) {
                    $(this).addClass('bi__bottom-bordered');
                }
            });
        },
        playGame: function() {
            $('.play-game').on('click', function (e) {
                e.preventDefault();
                var title = $(this).data('title');
                /* this is tour title*/
                var src = $(this).data('src');
                /* and this is tour src */
                window.location.hash = $(this).attr('href').replace('#', '');

                $.magnificPopup.open({
                    closeOnBgClick: false,
                    type: 'iframe',
                    items: {
                        src: src
                    },
                    iframe: {
                        markup: '<div class="game-popup popup-magenda">' +
                            '<div class="popup-title">' + title + '</div>' +
                            '<div class="mfp-close"></div>' +
                            '<div class="popup-content">' +
                            '<div class="game-container">' +
                            '<iframe class="mfp-iframe" width="950" height="660" frameborder="0"></iframe>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    },
                    callbacks: {
                        afterClose: function() {
                            if (window.location.hash != '') {
                                window.location.hash = '';
                            }
                        }
                    }
                });

            });
        },
        showTour: function() {
            $('.show-tour').on('click', function (e) {
                e.preventDefault();
                var title = $(this).data('title');
                /* this is tour title*/
                var src = $(this).data('src');
                /* and this is tour src */
                window.location.hash = $(this).attr('href').replace('#', '');

                $.magnificPopup.open({
                    closeOnBgClick: false,
                    type: 'iframe',
                    items: {
                        src: src
                    },
                    iframe: {
                        markup: '<div class="game-popup popup-violet">' +
                            '<div class="popup-title">' + title + '</div>' +
                            '<div class="mfp-close"></div>' +
                            '<div class="popup-content">' +
                            '<div class="game-container">' +
                            '<iframe class="mfp-iframe" width="950" height="660" frameborder="0"></iframe>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    },
                    callbacks: {
                        afterClose: function() {
                            if (window.location.hash != '') {
                                window.location.hash = '';
                            }
                        }
                    }
                });

            });
        },
        openGameOrTourHash: function() {
            if (window.location.hash !== '') {
                $('.games-list__item').each(function(){
                    if ( $(this).find('.show-tour').attr('href') == window.location.hash ) {
                        $(this).find('.show-tour').trigger('click');
                    }
                    else if ( $(this).find('.play-game').attr('href') == window.location.hash ) {
                        $(this).find('.play-game').trigger('click');
                    }
                });
            }
        },
        removeTopSliderShadow: function() {
            if($('.top_slider').length) {
                $('.fotorama').on('fotorama:showend', function() {
                    if($('.fotorama__active').find('.top_slider__info').text() == false) {
                        $('.fotorama__active').find('.top_slider__right').addClass('top_slider__right--without-shadow');
                    }
                });
            }
        }
    };
    App.initGlobal();
});

