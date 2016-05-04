/**
 * Created by RPolonkoev on 18.08.15.
 */
/*
 *   Third party
 */

//= ../../bower_components/jquery/dist/jquery.min.js
//= jquery.plugin.min.js
//= jquery.countdown.min.js

/*
 *   Custom
 */

$(function(){
    $('.countdown-container').countdown({
        until: new Date(2015, 09-1, 24, 10, 00),
        labels: ['лет', 'месяцев', 'недель', 'дней', 'часов', 'минут', 'секунд'],
        labels1: ['год', 'месяц', 'неделя', 'день', 'час', 'минута', 'секунда'],
        layout: '<div class="day"><div class="day-l">{dl}</div><div class="day-n">{dnn}</div></div><div class="hour"><div class="hour-l">{hl}</div><div class="hour-n">{hnn}</div></div><div class="minute"><div class="minute-l">{ml}</div><div class="minute-n">{mnn}</div></div><div class="second"><div class="second-l">{sl}</div><div class="second-n">{snn}</div></div>'
        //layout: '<div class="day"><div class="day-l">00</div><div class="day-n">00</div></div><div class="hour"><div class="hour-l">00</div><div class="hour-n">00</div></div><div class="minute"><div class="minute-l">00</div><div class="minute-n">00</div></div><div class="second"><div class="second-l">00</div><div class="second-n">00</div></div>'
    });


    slidePagetext();

    $(window).resize(function(){
        slidePagetext();
    });

    function slidePagetext(){
        var textBlock = $('.main-page-text');

        if( $(window).width() > 1170 ) {
            $(window).on('scroll', function(){
                var scrollPos = $(window).scrollTop(),
                    scrollPoint = 193;
                console.log(scrollPos);
                if(scrollPos >= scrollPoint) {
                    textBlock.css({
                        position: 'absolute',
                        top: '193px'
                    });
                }
                else if (scrollPos < scrollPoint) {
                    textBlock.css({
                        position: 'fixed',
                        top: '0'
                    });
                }
            });
        }
        else {
            $(window).on('scroll', function(){
                var scrollPos = $(window).scrollTop(),
                    scrollPoint = 149;
                console.log(scrollPos);
                if(scrollPos >= scrollPoint) {
                    textBlock.css({
                        position: 'absolute',
                        top: '149px'
                    });
                }
                else if (scrollPos < scrollPoint) {
                    textBlock.css({
                        position: 'fixed',
                        top: '0'
                    });
                }
            });
        }

    }


});