// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
/* ===================================================== */
/* Accordian Plugin
/* ===================================================== */

(function($) {
    $.fn.accordian = function() {
        $(this).each(function() {
            var CreateAccordian = new Accordian($(this));
        });
    };

    var Accordian = function(accordian) {
        var btnWrap = accordian.find('.trigger'),
        content = accordian.find('.content');
        var fullWidth = content.outerWidth(true);
        btnWrap.wrapInner("<a href='#' />");
        button = btnWrap.find('a');
        button.append('<span>+</span>');
        content.hide().first().show();
        button.first().toggleClass('current');

        button.css({'cursor': 'pointer'});

        button.mouseup(function() {
            $(this).blur();
        });

        // Styling for ipad hover
        button.on('touchstart', function() {
            $(this).addClass('touch-hover');
        });

        button.click(function() {
            $(this).parent().siblings().find('a').removeClass('current');
            $(this).parent().siblings('.content').slideUp('normal');
            $(this).addClass('current').parent().next().slideDown('normal');
            return false;
        });
        return this;
    };
})(jQuery);

/* ===================================================== */
/*  Alerts Plugin
/* ===================================================== */

(function($) {
    $.fn.alerts = function() {
        var button = this;

        button.click(function() {
            $(this).parent().animate({
                opacity: "toggle"
            });
            return false;
        });

    };
})(jQuery);
// ----------------------------------
// > Analytics
// ----------------------------------

function gaSSDSLoad (acct) {
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."),
      pageTracker,
      s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
  }
  s.onload = function () {
    s.onloadDone = true;
    init();
  };
  s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
    }
  };
  document.getElementsByTagName('head')[0].appendChild(s);
}


/* ===================================================== */
/* Contact Form
/* ===================================================== */

(function($){
    $.fn.contactValidation = function(options) {
        $(this).each(function() {
            var defaults = {
                inlineErrors: true,
                formName: $(this)
            },
            options_set = $.extend(defaults, options),
            ContactValidation = new Validation(options_set);
        });
    };

    var Validation = function(options) {
        var formName = options.formName;
        // Config
        var nameErrorMsg = 'Please leave your name',
        emailErrorMsg = 'Please provide a valid email address',
        longerErrorMsg = 'Please leave a longer message';

        // On focus out set error if empty
        var nameVal = (function() {
            $(this).unbind('keyup');
            if(!$(this).val()) {
                $(this).addClass("error");
            // Add error if not there already
            if($(this).parent().find(".error-name").length === 0 && options.inlineErrors) {
                $(this).before('<span class="inline-error error-name">'+nameErrorMsg+'</span>');
            }
            $(this).keyup(function() {
                $(this).triggerHandler('focusout');
            });
        } else {
            // Validates so remove errors and keyup trigger
            $(this).removeClass("error");
            $(this).parent().children('span').remove('.error-name');
        }
    });

    // On focus off set error if shorter than 5
    // characters
    var messageVal = (function() {
        $(this).unbind('keyup');
        if($(this).val().length < 3) {
            $(this).addClass("error");
            if($(this).parent().find(".error-message").length === 0 && options.inlineErrors) {
                $(this).before('<span class="inline-error error-message">'+longerErrorMsg+'</span>');
            }
            $(this).keyup(function() {
                $(this).triggerHandler('focusout');
            });
        } else {
            // Validates so remove errors
            $(this).parent().children('span').remove('.error-message');
            $(this).removeClass("error");

        }
    });

    // On focus out set error if is not a valid email
    var emailVal = (function() {
        $(this).unbind('keyup');
        if(!IsEmail($(this).val())) {
            $(this).addClass("error");
            if($(this).parent().find(".error-email").length === 0 && options.inlineErrors) {
                $(this).before('<span class="inline-error error-email">'+emailErrorMsg+'</span>');
            }
            $(this).keyup(function() {
                $(this).triggerHandler('focusout');
            });
        } else {
            // Validates so remove errors
            $(this).parent().children('span').remove('.error-email');
            $(this).removeClass("error");
            $(this).unbind('keyup');
        }
    });


    // Validate Email
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    formName.submit(function() {
        // Trigger focusout on form submit to check for errors
        $(this).find('#message').focusout(messageVal);
        $(this).find('#email').focusout(emailVal);
        $(this).find('#name').focusout(nameVal);

        $(this).find('#message').triggerHandler("focusout");
        $(this).find('#email').triggerHandler("focusout");
        $(this).find('#name').triggerHandler("focusout");


        // If no error send to sendForm() for php submitting
        if(!$('input').hasClass('error') && !$('textarea').hasClass('error') ) {
            sendForm();
        }
        return false;
    });

    var formWrapper = formName.parent();
    var speed = 100; // Speed of slide animation

    // Send form to PHP
    function sendForm() {

        // Add spinner and disable button
        formName.find('#submit').attr('disabled', true);
        formName.find('#submit').prepend('<i class="icon-spinner-6 spin"></i>');
        formName.find('#submit i').css({
            'margin-right': '5px'
        });

        var formData = formName.serialize(); // Serialise form data to send
        $('.contact-error').slideUp(speed); // Hide previous attempt error message
        $.ajax({
            type: "POST",
            url: "php/send_message.php",
            data: formData,
            success: function(html) {
                var alertBox = $(html).filter('.alert.error'); // Get alert box if alerady one
                if(alertBox.length === 0) {
                // If no alert box already, add new
                    html = formWrapper.append(html);
                    $('.contact-success').css('display', 'none').slideDown();
                // Remove spinner and hide form
                    formName.remove('.icon-spinner-6');
                    formName.slideUp(1000);
                } else { // If exists add to it.
                    // If already a error displayed add to existing div
                    // Else add new div
                    if($('.contact-error').length !== 0) {
                        $('.contact-error').html(alertBox.html());
                        $('.contact-error').slideDown(speed);
                    } else {
                        $(formName).before(html);
                        $('.contact-error').css('display', 'none');
                        $('.contact-error').slideDown(speed);
                    }
                }
            }
        });
        return false;
    } // End SendForm fnc

}; // End Validation fnc

})(jQuery);


/* ===================================================== */
/*	Countdown 											 */
/* ===================================================== */

$.fn.countdownTimer = function() {

	$(this).each(function() {
		var count_down_date = $(this).data('date');
		var countdownTimerObj = new countdownTimer(count_down_date, this);
	});
};

function countdownTimer(time, counter) {
	var end = new Date(time);
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;
	$(counter).prepend('<span class="days"></span>:<span class="hours"></span>:<span class="minutes"></span>:<span class="seconds"></span>');

	function interval() {
		var now = new Date();
		var distance = end - now;

		if (distance < 0) {
			clearInterval(timer);
			$(counter).text('Very Soon');
			return;
		}

		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
		$(counter).find('.days').text(("00" + days).slice(-3));
		$(counter).find('.hours').text(("0" + hours).slice(-2));
		$(counter).find('.minutes').text(("0" + minutes).slice(-2));
		$(counter).find('.seconds').text(("0" + seconds).slice(-2));
	}
	return setInterval(interval, 1000);
}

(function($) {
    $.fn.newsletter = function(options) {
        $(this).each(function() {
            var defaults = {
                inlineErrors: true,
                formName: $(this)
            },

            options_set = $.extend(defaults, options),
            newsletter = new newsletterFnc(options_set);
        });
    };

    var newsletterFnc = function(options) {
        var formName = options.formName;

        // Add spinner
        email = $(formName.find('.newsletter-email'));

        // Validate Email
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        // Validation on keyup
        function keyupval() {
            if (IsEmail(email.val())) { // Validation pass
                // remove error and keybinding
                email.parent().children('span').remove('.inline-error');
                email.removeClass("error");
                email.unbind('keyup');
            }
        } // Keyup

        emailErrorMsg = 'Your email is not valid';

        // Submit, validate then send to php
        formName.submit(function() {
            formName.find('.alert').remove(); // Remove previous php msg
            email = formName.find('.newsletter-email');
            if (!IsEmail(email.val())) { // Validation fail
                // Add error class
                email.addClass("error");
                // If inline error msg span has not been appended, add it
                if (email.parent().find(".inline-error").length === 0 && options.inlineErrors) {
                    email.parent().append('<span class="inline-error">' + emailErrorMsg + '</span>');
                }
                email.keyup(keyupval); // Add keyup validation
            } else {
                formData = formName.serialize();

                // Add spinner and disable button
                formName.find('.subscribe').prop('disabled', true);
                formName.find('.subscribe').prepend('<i class="icon-spinner-6 spin"></i>');
                formName.find('.subscribe i').css({
                    'margin-right': '5px'
                });

                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: formData,
                    success: function(html) {
                        // Prepend returned msg
                        formName.after(html);
                        formName.remove('.icon-spinner-6');
                        formName.slideUp(1000);
                    } // Success
                }); // Ajax

            } // Else
            return false;
        }); // Submit
    }; // Validation
})(jQuery);
/* ===================================================== */
/* Projects
/* ===================================================== */


$.fn.zorbixAjaxPortfolio = function(options) {
    // $(this).each(function() {
    var CreateZorbixAjaxPortfolio = new ZorbixAjaxPortfolio($(this), options);
    // });
};

var ZorbixAjaxPortfolio = function(container, options) {

    var portfolio = '.portfolio',
        portItem = '.port-item',
        noItems = ($(portfolio).data('show')) ? $(portfolio).data('show') : 4,
        projectBtn = '.port-item .port-overlay',
        scrollOffset = -$('.main_menu').outerHeight() + 10,
        load_more_in_category = true,
        filter = portItem,
        slider_name = '.portfolio-slider-ajax';

    // Show fist choosen number of items
    $(portItem + ':nth-child(-n+' + noItems + ')').addClass('showme');

    $('.portfolio').waitForImages(function() {
        $('.portfolio').isotope({
            itemSelector: '.port-item',
            // masonry: {
            //     columnWidth: $('.portfolio').width / 4
            // },
            // animationEnigin: 'best-availible',
            layoutMode: 'fitRows',
            resizable: false,
            filter: '.showme'
        });
    });

    // Isotope Resizing
    $(window).bind("debouncedresize", function() {
        var num;
        // If in 2 columns, devide by 2
        if ($('.port-item').css('width') == '50%') {
            num = 2;
        } else {
            num = noItems;
        }

        $('.portfolio').isotope({
            masonry: {
                columnWidth: $('.portfolio').width() / num
            }
        });
    });

    // HIDE SHOW BTN
    // If there are no more items to show
    // If the number to show is greater then the number of items available
    var hideShowBtn = function() {
        if (noItems >= $(portfolio).find('.port-item').length) {
            $('.load-more').attr('disabled', true);
        } else if (load_more_in_category) {
            // Whats selected
            selector = $('.filter-menu li.selected').data('cat');
            // If we are not loading from all
            if (selector !== '*') {
                filter = '.port-item[data-cat*=' + selector + ']';
            }

            var num_items_in_cat = $(filter).length;
            if (num_items_in_cat <= noItems) {
                $('.load-more').attr('disabled', true);
            } else {
                $('.load-more').attr('disabled', false);
            }
        }
    }; // END: hideShowBtn
    hideShowBtn();

    // > LOAD MORE ITEMS
    $('#load-more').click(function(e) {
        e.preventDefault();

        $(this).prepend('<i class="loader spin fa fa-spinner"></i>');

        $('#load-more i.spin').css('display', 'none').fadeIn('fast');

        // How many to load
        var numToLoad = ($(this).data('num')) ? $(this).data('num') : 4;
        if (noItems < $('.port-item').length) {
            noItems += parseInt(numToLoad);
        }

        // Create Filter
        selector = $('.filter-menu .selected').data('cat');
        var filter = '.port-item[data-cat*=' + selector + ']';
        if (selector === '*' || !load_more_in_category) {
            filter = '.port-item';
        }

        $('.port-item').removeClass('showme');

        // Load all unloaded images
        $('.portfolio div[data-port-thumb]').each(function() {
            path = $(this).data('port-thumb');
            portItem = $(this).parent();
            alt = $(this).attr('alt');
            $(this).after('<img src="' + path + '" alt="' + alt + '">');
            $(this).remove();
            $(this).addClass('new');
        });

        // Add filter
        $('.portfolio').find(filter + ':lt(' + noItems + ')').addClass('showme');

        // Init isotope
        $('.portfolio').waitForImages(function() {
            $('#load-more i.spin').stop().delay(1000).fadeOut('fast', function() {
                $(this).remove();
            })
            $('.portfolio').isotope({filter: '.showme'});
        });

        // Disable button when no more items
        if (noItems === $('.port-item').length) {
            $(this).attr('disabled', true);
        }
    });

    $('.filter-menu li').css({
        'cursor': 'pointer'
    });

    $('.filter-menu li').trigger('click');
    $('.filter-menu li').click(function() {


        if (!$(this).hasClass('selected')) {
            var bgColor = $(this).css('background');
        }
        $(this).fadeTo('background', 'white');

        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-cat');
        var filter = '.port-item[data-cat=' + selector + ']';
        if (selector === '*') {
            filter = '.port-item';
        }
        $('.showme').removeClass('showme');

        $(filter + ':lt(' + noItems + ')').addClass('showme');

        $('.portfolio').isotope({
            filter: '.showme'
        });
    });

    // SHOW THE PROJECT
    var showProject = function(elem, projectWrapper) {
        var projectWrapperHeight;

        // Append project to wrapper
        var projectHTML = $('<div class="project">' + elem + '</div>').appendTo(projectWrapper);

        projectWrapper = this.projectWrapper = $($(this.portfolioWrapper).find('.project-wrapper'));

        var project = this.projectWrapper.find('.project');

        closeButton();

        projectHTML.waitForImages(function() {
            setSlidler();
            // init_internal_video();
            projectWrapper.find('.video-wrapper').fitVids();
            projectWrapperHeight = project.outerHeight() + 110; // Get height of project

            project.css('height', '100%'); // To fix ie visibility bug

            // Animate wrapper height, fade in project and remove loader
            projectWrapper.animate({
                height: projectWrapperHeight
            }, 600, function() {
                projectWrapper.css('height', 'auto'); // Remove fixed height
                project.fadeIn('slow');
                hideSpinner();
            });

            projectWrapper.addClass('open');
            $('.port-overlay .project-btn').removeClass('disabled');
        });

    }; // End ShowProject

    // FETCH THE PROJECT
    var getProject = function(elem, scrollDfd, projectDfd) {
        $.get(elem.attr('href'), function(projectHTML) {
            projectDfd.resolve(projectHTML);
        }, 'html');
    }; // End getProject

    // ADD CLOSE BUTTON
    var closeButton = function() {
        // Needs to know not to add to the project-
        // Prepend close button if it doesn't exist
        if (this.projectWrapper.find('.project .close-btn').length === 0 ) {
            this.projectWrapper.find('.project').prepend('<a href="#" class="close-btn"><i class="fa fa-times-circle-o"></i></a>');
        } else {
        }
        projectWrapper = this.projectWrapper;
        this.projectWrapper.find('.close-btn').click(function() {
            // hideLoader();
            projectWrapper.animate({
                height: 0
            });
            projectWrapper.removeClass('open');

            projectWrapper.find('.project').fadeOut('slow', function() {
                projectWrapper.find('.project').remove();
            });
            return false;
        });
    }; // End closeButton

    // PROJECT SLIDER INIT
    var setSlidler = function() {
        $(slider_name).bxSlider({
            auto: true,
            speed: 1000,
            pause: 8000,
            mode: 'fade'
        });
        $('.video-wrapper').fitVids();
    }; // End setSlider

    // SWITCH TO ANOTHER PROJECT
    var changeProject = function(projectHTML, projectWrapper) {
        projectWrapper.css('height', projectWrapper.outerHeight());
        projectWrapper.find('.project').fadeOut('slow', function() {
            projectWrapper.find('.project').remove();
            showProject(projectHTML, projectWrapper);
        });
    }; // changeProject


    // SHOW A SPINNER
    var showLoader = function(projectWrapper) {
        if (typeof(loader) !== "undefined" && loader.hasClass('temp-hide')) {
            showSpinner();
        }

        if (typeof(loader) === "undefined") {
            addLoader();
        }
    }; // End showLoader

    var addLoader = function() {
        var preloadedHTML = '<div class="loader"><i class="fa fa-spinner spin"></i></div>';
        projectWrapper.prepend(preloadedHTML);
        this.loader = projectWrapper.find('.loader');
    };

    var hideSpinner = function() {
        this.loader.addClass('temp-hide').find('i').fadeOut();
    };

    var showSpinner = function() {
        projectWrapper.find('.loader i').fadeIn();
    };

    var projectInit = function(elem) {
        // Vars
        this.portfolioWrapper = elem.closest('.portfolio-wrapper');
        var projectWrapper = this.projectWrapper = elem.closest('.portfolio-wrapper').find('.project-wrapper'),
            projectFinishedLoading = $.Deferred();

        scrollFinished = projectScroll();

        getProject(elem, scrollFinished, projectFinishedLoading);

        // When project is loaded and page finished loading
        // Load or change project
        $.when(projectFinishedLoading, scrollFinished).done(function(projectHTML) {
            if (projectWrapper.hasClass('open')) {
                changeProject(projectHTML, projectWrapper);
            } else {
                showProject(projectHTML, projectWrapper);
            }
        });

    }; // End projectInit

    var projectScroll = function() {
        var scrollPosOffset;
        // If header is sticky add header height to scroll pos
        if ($('.header').css("position") === "fixed") {
            scrollPosOffset = -($('.header').outerHeight() - 5);
        } else {
            scrollPosOffset = 0;
        }

        var scrollFinished = $.Deferred();

        showLoader(projectWrapper);

        // Scroll up to project loader
        $.smooth(projectWrapper, scrollPosOffset, function() {
            return scrollFinished.resolve();
        });
    };

    $(projectBtn).on('touchstart', function( e ) {});
    $(projectBtn).on("click", function(event) {
        event.preventDefault();
        $('.loader').stop();
        if (!$('.port-overlay .project-btn').hasClass('disabled')) {
            $('.port-overlay .project-btn').addClass('disabled');
            projectInit($(this));
        }
    });

}; //zorbixAjaxPortfolio
/* ===================================================== */
/* Smooth Scrolling                                      */
/* ===================================================== */
(function($) {
    "use strict";

    $.smooth = function(elem, offset, func) {
        var pos;

        offset = typeof offset !== 'undefined' ? offset : 0;
        func = typeof func !== 'undefined' ? func : function() {};

        if ($.isNumeric(elem)) {
            pos = elem;
        } else {
            pos = $(elem).offset().top;
        }

        $('html, body').animate({
            scrollTop: pos + offset
        }, 2000, function() {
            func();
        });
    };

})(jQuery);
/* ===================================================== */
/* Tabs Pluin
/* ===================================================== */

(function($) {

    $.fn.tabs = function(options) {
        $(this).each(function() {
            var CreateTabs = new Tabs($(this), options);
        });
    };

    var Tabs = function(container, options) {
        contents = $(container.find('.content'));
        btnWrap = $(container.find('.trigger'));
        this.container = container;

        container.prepend(btnWrap);

        if(btnWrap.find("a").length < 1) {
            btnWrap.wrapInner("<a href='#' />");
        }

        if(options.type === 'side') {
            btnWrap.wrapAll("<div class='tabs-wrap'></div>");
            contents.wrapAll("<div class='contents-wrap'></div>");
        }

        btn = btnWrap.find('a');

        btnWrap.last().css('margin-right', '0');
        btn.first().addClass('current');

        // Hide content, show first
        contents.hide().first().show();
        btn.data('container', container);

        // Remove focus after click, keyboard accessibility uneffected
        btn.mouseup(function() {
            $(this).blur();
        });

        btn.click(function() {
            var container = $(this).data('container');
            container = $(container);
            var tabNum = $(this).parent().index();
            container.find('a').removeClass('current');
            $(this).addClass('current');
            container.css( 'minHeight', container.height() );
            container.find('.content').fadeOut().hide();
            container.find('.tab'+tabNum).fadeIn(function() {
                container.css('minHeight', '0');
            });
            // container.css( 'height', 'auto' );
            return false;
        });

        return this;
    };

})(jQuery);
/* ===================================================== */
/* Toggle Plugin
/* ===================================================== */

(function($) {
    $.fn.toggle = function() {
        $(this).each(function() {
            var createToggles = new Toggle($(this));
        });
    };

    var Toggle = function(accordian) {
        var toggleContent = accordian.find('.content'),
            btnWrap = accordian.find('.trigger');

        var fullWidth = toggleContent.innerWidth(true);

        btnWrap.wrapInner("<a href='#' />");
        btn = btnWrap.find('a');
        btn.append('<span>+</span>');
        toggleContent.css('width', fullWidth).hide().first().show();
        btn.first().toggleClass('current');

        // Remove focus after click, keyboard accessibility uneffected
        btn.mouseup(function() {
            $(this).blur();
        });

        // Styling for ipad hover
        btn.on('touchstart', function() {
            $(this).addClass('touch-hover');
        });

        btn.click(function(e) {
            if(e.which == 13) {}
            $(this).toggleClass('current').parent().next().slideToggle('normal');
            return false;
        });
    };
})(jQuery);