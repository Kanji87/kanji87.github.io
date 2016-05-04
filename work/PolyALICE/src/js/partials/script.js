/**
 * Created by fu2re on 31.03.16.
 */
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
}
$.fn.paginator = function (options) {
    var that = $(this),
        AJAX_DATA_RESPONSE_TOTAL_PAGES = '.response-total-pages-data-holder';

    that.options = $.extend({
        url: that.attr('href'),
        filters: [],
        total_pages: parseInt(that.data('total_pages')),
        callback: function () {
        },
        beforeLoad: function (){},
    }, typeof(options) === 'undefined' ? {} : options);

    that._data = typeof(that.options.data) === 'undefined' ? {} : that.options.data;
    that._data['template'] = typeof(options.template) === 'undefined' ? that.data('template') : options.template;
    that._data['items_on_page'] = typeof(options.items_on_page) === 'undefined' ? that.data('items_on_page') : options.items_on_page;
    if (that.data('cms_placeholder_page_id'))
        that._data['cms_placeholder_page_id'] = that.data('cms_placeholder_page_id');
    if (that.data('widget')) {
        that._data['widget'] = that.data('widget');
    }
    that.click(function (e) {
        e.preventDefault();
        that.options.beforeLoad();
        var el = $(this),
            AJAX_DATA_FILTER_PERMANENT = '.ajax-data-filter-permanent',
            target = el.closest(AJAX_DATA_FILTER_PERMANENT).length > 0 ? el.closest(AJAX_DATA_FILTER_PERMANENT) : el,
            holder = target.parent(),
            data = clone(that._data);
        if (that._data['page'] >= that.options.total_pages) return false;

        $.each(that.options.filters, function (index, value) {
            if (typeof(value) != 'undefined')
                data = $.extend(data, value.getData());
        })
        var page_num = that.data('page');
        data['page'] = parseInt((!page_num) ? 1 : page_num) + 1;
        var pdata = $(AJAX_DATA_RESPONSE_TOTAL_PAGES, holder).last();
        if (typeof(pdata.data('offset')) != 'undefined')
            data['offset'] = pdata.data('offset')
        data['paginate'] = true;

        $.ajax({
            url: that.options.url,
            data: data,
            success: function (response) {
                target.before(response);
                var page = parseInt(that.data('page')) + 1;
                that.data('page', page);
                var last_page = $(AJAX_DATA_RESPONSE_TOTAL_PAGES, target.parent()).last().data('last_page'),
                    total_pages = that.data('total_pages');
                if (
                    (typeof(total_pages) !== 'undefined' && page == parseInt(total_pages)) ||
                    (typeof(last_page) !== 'undefined' && last_page == 'True')
                ) that.hide();

                that.options.callback(response);
            }
        });
        return false;
    })
    if ((that.data('last_page') == 'True') || (that.data('page') == that.data('total_pages'))) that.hide();
}
$.fn.activeNavigationChecker = function (options) {
    var that = $(this);
    that.options = $.extend({
        active: 'active'
    }, typeof(options) === 'undefined' ? {} : options);
    $.each(that, function() {
        if (window.location.pathname.startsWith($(this).attr('href'))) {
            $(this).addClass(that.options.active);
            $(this).siblings().removeClass(that.options.active)
        }
    })
}

var SUBSCRIPTION_SIDEBAR_LOCKED_CLASS = 'form__subscribe--locked',
    SUBSCRIPTION_SIDEBAR_ERROR_CLASS = 'form__subscribe--error',
    SUBSCRIPTION_SIDEBAR_SUCCESS_CLASS = 'form__subscribe--success';

function sub_success(val){
    $('.form__subscribe').each(function(){
        $(this).addClass(SUBSCRIPTION_SIDEBAR_SUCCESS_CLASS);
        $('input', this).prop('disabled', 'disabled');
        $('input[name="email"]', $(this)).val(val);
        $('input[type="submit"]', $(this)).val($('input[type="submit"]', $(this)).data('alt'))
    });
}
function sub_event(e){
    e.addClass('event-content__button-i-go--disabled').text(e.attr('data-alt'));
}
$(document).ready(function(){
    $('.form__subscribe').submit(function () {
        var form = $(this);
        if (!form.hasClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS)) {
            var val = form.find('input[name="email"]').val();
            form.addClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS);
            form.ajaxSubmit({
                success: function (response) {
                    form.removeClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS).removeClass(SUBSCRIPTION_SIDEBAR_ERROR_CLASS);
                    $.cookie('subscribed', val);
                    sub_success(val);
                }
            });
        }
        return false;
    });
    $('.i-go-popup__form').submit(function () {
        var form = $(this);
        if (!form.hasClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS)) {
            var val = form.find('input[name="email"]').val(),
                info = form.find('input[name="info"]').val();
            form.addClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS);
            form.ajaxSubmit({
                success: function (response) {
                    $('.js-close-popup').trigger('click');
                    $.cookie('subscribe_'+info, 1);
                    $('.js-button-i-go[data-id="subscribe_'+info+'"]').each(function(){
                        sub_event($(this))
                    })
                }
            });
        }

        return false;
    });
    $('.js-button-i-go').each(function(){
        if ($.cookie($(this).attr('data-id'))) {
            sub_event($(this))
        }
    })
});


