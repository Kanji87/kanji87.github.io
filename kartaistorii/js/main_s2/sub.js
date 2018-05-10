'use strict';

$(document).ready(function () {
    var forms = $('.subscribe__form, .popup-subscribe form'),
        input = $('input[name="email"]', forms);

    var reset = function reset(that) {
        $('.subscribe__button-div--result', that).remove();
        $('.popup-subscribe__tooltip', that.parent()).hide();
    };

    input.on('keydown', function (e) {
        reset($(this).parents('form'));
    });

    forms.on('submit', function (e) {
        e.preventDefault();
        var div = $('<div class="subscribe__button-div--result" />');
        var that = $(this);
        var is_popup = that.parents('.popup-subscribe').length > 0;
        var episodeId = $('#app').data('episode');

        $.ajax({
            url: '/api/sub/subscribe',
            method: 'post',
            data: {
                email: $('input[name="email"]', that).val()
            },
            dataType: 'json',
            success: function success(r) {
                reset(that);
                if (is_popup) {
                    $(r.new ? '#subscribe-success' : '#subscribe-error', that.parent()).show();
                    if ($('#ig').length) {
                        ga('send', 'event', 'Subscribe', 'Subscription Complete', window.location.pathname);
                        console.log('Успешная подписка в попапе на странице инфографики');
                    } else {
                        ga('send', 'event', 'Subscribe', 'Subscription Complete', episodeId);
                        console.log('Успешная подписка в попапе');
                    }
                } else {
                    div.html(r.new ? 'Спасибо, что подписались на рассылку Карты истории!' : 'Спасибо! Вы уже подписаны на нашу рассылку.');
                    $('.subscribe__button', that).after(div);
                    ga('send', 'event', 'Subscribe', 'Subscription Complete', '');
                    console.log('Успешная подписка в форме на главной');
                }
            },
            error: function error() {
                reset(that);
                div.html('Ой, что то пошло не так.');
                $('.subscribe__button, .popup-subscribe__row button', that).last().after(div);
            }
        });
    });
});