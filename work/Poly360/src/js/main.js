/**
 * Created by RPolonkoev on 18.08.15.
 */
/*
 *   Third party
 */

//= ../../bower_components/jquery/dist/jquery.min.js
//= parts/social-likes.min.js

/*
 *   Custom
 */

$(function(){
    $('.js-show-subtitle').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('js-show-subtitle--active');
        $(this).parent().parent().find('.page-block__subtitle').toggleClass('page-block__subtitle--active');
    });

    $('.js-scroll-top').on('click', function(e){
        var body = $("html, body");
        e.preventDefault();
        body.stop().animate({scrollTop:0}, '500', 'swing');
    });
});