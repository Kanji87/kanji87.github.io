/*
*   Third party
*/

//= ../../bower_components/jquery/dist/jquery.min.js

/*
*   Custom
*/

$(function(){
    $('.js-advanced-search-trigger').click(function(e){
        e.preventDefault();
        $('.form__advanced-search').toggleClass('form__advanced-search--active');
    });

    $('.js-reset-filter').click(function(e){
        e.preventDefault();
        $('.form__input').val('');
        $('.form__select').prop('selectedIndex', 0);
    })
});