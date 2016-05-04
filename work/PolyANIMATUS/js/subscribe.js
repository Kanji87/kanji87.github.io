$(document).ready(function(){
    var SUBSCRIPTION_SIDEBAR_LOCKED_CLASS = 'locked',
        SUBSCRIPTION_SIDEBAR_ERROR_CLASS = 'error',
        SUBSCRIPTION_SIDEBAR_SUCCESS_CLASS = 'success';

    $('form.newsletter').submit(function () {
        var form = $(this);
        if (!form.hasClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS)) {
            form.addClass(SUBSCRIPTION_SIDEBAR_LOCKED_CLASS);
            form.ajaxSubmit({
                success: function (response) {
                    form.addClass(SUBSCRIPTION_SIDEBAR_SUCCESS_CLASS);
                },
                error: function(){
                    form.addClass(SUBSCRIPTION_SIDEBAR_SUCCESS_CLASS);
                }
            });
        }
        return false;
    })
})