(function($) {"use strict"; 

 /* ===================================================== */
/*	Skyline Main Javascript
/* ===================================================== */


var search_id = '014593374506328066574:dlgoncf_usu',

address = "Kensington Gardens Square, London, UK",

ga_code = "UA-47482610-6";


jQuery(document).ready(function($) {

	
/* ===================================================== */
/*	Alerts												 */
/* ===================================================== */

	$('.alert-button').alerts();


// ----------------------------------
// > Google anayltics
// ----------------------------------

gaSSDSLoad(ga_code);
/* ===================================================== */
/*  Animations
/* ===================================================== */

	if (isMobile.any() === null) {
		$('.animated').appear(function() {
			var elem = $(this),
				delay = elem.data('animate-delay'),
				animation = elem.data('animate');
			if( delay === undefined ) {
				delay = '500';
			}

			setTimeout(function(){
				// elem.addClass(animation).css('opacity', '0');
				elem.addClass(animation).find('i').css('opacity', '1');
			}, delay);
		}); // End appear
		$('.appear-hover').appear(function() {
			var delay2 = $(this).data('hover-delay'),
				elem2 = $(this);
			setTimeout(function(){
				elem2.removeClass('appear-hover');
			}, delay2);
		});
	} else {
		$('.animated').css('opacity', '1').find('i').css('opacity', '1');
	}



/* ===================================================== */
/* Back to Top  										 */
/* ===================================================== */

if( $('.top-btn').length ) {

	$('.top-btn').on('click',function(event) {
		event.preventDefault();
		$.smooth('body', -60);
	});

	showTopButton();

	$(window).on('scroll', function() {
		showTopButton();
	});

}

function showTopButton() {
	if( jQuery(window).scrollTop() > 100 ) {
		$('.top-btn').addClass('show');
	} else {
		$('.top-btn').removeClass( 'show' );
	}
}

// ----------------------------------
// > Main
// ----------------------------------

    function init_backgrounds() {
    	$('[data-background]').each(function() {
    		$(this).css('background-image', "url(" + $(this).data("background") + ")");
    	});
    }

    init_backgrounds();


/* ===================================================== */
/*	Contact Forms										 */
/* ===================================================== */

	$('.contact-form').contactValidation();


// ----------------------------------
// > Countdown
// ----------------------------------

$('.counter').countdownTimer();


/* ===================================================== */
/*	Responsive videos									 */
/* ===================================================== */

	$('.video-wrapper').fitVids();


/* ===================================================== */
/* VIDEO BACKGROUND HTML5 Uploaded						 */
/* ===================================================== */

// Only run video on desktop
if (isMobile.any() === null) {
	$('.video-background').parent('.video-slider').after('<div class="video_controls"><a href="#" class="video_pause"><i class="fa fa-play"></i></a> <a href="#" class="video_mute"><i class="fa fa-volume-off"></i></a></div>');

// Pause Video
$('.video_pause').on('click',function (e) {
	e.preventDefault();
	if ($('.video-background').get(0).paused === false) {
		$('.video-background').get(0).pause();
		$(this).find('i').removeClass('fa-play').addClass('fa-pause');
	} else {
		$('.video-background').get(0).play();
		$(this).find('i').removeClass('fa-pause').addClass('fa-play');
	}
});

// Unmute
$('.video_mute').on('click',function (e) {
	e.preventDefault();
	$('.video-background').get(0).muted = !$('.video-background').get(0).muted ;
	$(this).find('i').toggleClass('fa-volume-off').toggleClass('fa-volume-up');
});

} 
/* ==================================================== */
/*	Google Maps											*/
/* ==================================================== */

// http://www.smashinglabs.pl/gmap/documentation

if ( $.isFunction($.fn.gMap) ) {

		var mapStyles = [{
			"featureType": "landscape",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 65
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 51
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway",
			"stylers": [{
				"saturation": -100
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 30
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "road.local",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 40
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "transit",
			"stylers": [{
				"saturation": -100
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "administrative.province",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}, {
				"lightness": -25
			}, {
				"saturation": -100
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"hue": "#ffff00"
			}, {
				"lightness": -25
			}, {
				"saturation": -97
			}]
		}];



	// var address = "Kensington Gardens Square, London, UK";

	$('.google-map').each(function(index, el) {

		var address = $(this).data('address');
		var markers = $(this).data('markers');
		var zoom = $(this).data('zoom');
		zoom = ( zoom ) ? zoom : 16;

		// If no markers are set default to the address
		// Format to json
		if ( !markers ) {
			markers = [{ "address": address } ];
		} else {
			markers = markers.replace(/{/gi, '{"address":"');
			markers = markers.replace(/}/gi, '"}');
			markers = '[' + markers + ']';
			markers = jQuery.parseJSON(markers);
		}

		$(this).gMap({
			address: address,
			markers: markers,
			zoom: zoom,
			styles: mapStyles,
			scrollwheel: false
		});

	});

	$('.map-overlay').on('click',function(event) {
		event.preventDefault();
		$('.map-holder .close-btn').fadeIn();
		$(this).fadeOut(function() {
			$('.map-holder').css('height', '400');
		});
	});

	$('.map-holder .close-btn').on('click',function(e) {
		e.preventDefault();
		var elem = this;
		$('.map-overlay').fadeIn(function() {
			$('.map-holder').css('height', '100');
			$(elem).fadeOut();
		});
	});
}


// ----------------------------------
// --  SVG Masks  --
// ----------------------------------

// Append SVG CLip templates
$('body').prepend('<svg class="hidden_mask"><clipPath id="hexes_mask"><path d="M99.397,18.761 L168.887,58.88 L168.887,139.12 L99.397,179.239 L29.908,139.12 L29.908,58.88 z"/> </clipPath> </svg>');
$('body').prepend('<svg class="hidden_mask"><clipPath id="hexes_mask_bigger"><path d="M129.095,28.183 L233.406,88.451 L233.406,208.989 L129.095,269.257 L24.785,208.989 L24.785,88.451 z"/> </clipPath> </svg>');
// Feature shapes circle
$('body').prepend('<svg class="hidden_mask"><clipPath id="cirlce_mask"><path d="M125,25 C180.228,25 225,69.772 225,125 C225,180.228 180.228,225 125,225 C69.772,225 25,180.228 25,125 C25,69.772 69.772,25 125,25 z"/></clipPath></svg>');

// Create SVG Masks
$('.create-svg').each(function() {
	var src = $(this).attr('src');
	var clip_mask = $(this).data('clip');
	if(clip_mask === '#circle_mask') {
		var svg_circle = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="220" height="220" viewBox="0, 0, 250, 250"><g>' +
			'<image xlink:href="' + src + '" opacity="1" x="25" y="25" width="200" height="200" preserveAspectRatio="xMidYMid" clip-path="url(#cirlce_mask)"/>' +
			'<path d="M125,245.734 C58.32,245.734 4.266,191.68 4.266,125 C4.266,58.32 58.32,4.266 125,4.266 C191.68,4.266 245.734,58.32 245.734,125 C245.734,191.68 191.68,245.734 125,245.734 z" fill-opacity="0" stroke="#000" stroke-width="1"/>' +
			'</g></svg>';
		$(this).after(svg_circle);
	}
	else if( $(this).data('clip') == '#hex_mask') {
		$(this).after('<svg width="235" height="240" viewBox="0, 0, 200, 200"> <g class="feature_hex_svg"> <path d="M186.603,150 L100,200 L13.397,150 L13.397,50 L100,0 L186.603,50 z" fill-opacity="0" fill="#fff" stroke="#ddd" stroke-width="1"/> <image xlink:href="' + src + '" opacity="1" width="100%" height="100%" preserveAspectRatio="xMidYMid" clip-path="url(#hexes_mask)"/> </g> </svg>');
	} else if ( $(this).data('clip') == '#hex_mask_bigger' ) {
		$(this).after('<svg width="260" height="300"> <g class="feature_hex_svg"> <path d="M258,224.866 L130,298.822 L2,224.866 L2,76.955 L130,3 L258,76.955 z" fill-opacity="0" stroke="#000" stroke-width="1"  x="20"/> <image xlink:href="' + src + '" opacity="1" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid" clip-path="url(#hexes_mask_bigger)"/> </g> </svg>');
		$(this).remove();
	}
  $(this).remove();
});
/* ===================================================== */
/* Menu
/* ===================================================== */


/*==========  Open and close Menu  ==========*/



var menuOpenClose = function() {

	// Close all open dropdowns menus
	if( !$('.header').hasClass('opened') ) {
		$('.main_menu').find('ul').removeAttr('display', 'none');
	}

	// Slide open
	$(this).closest('.header').toggleClass('opened').find('.main_menu').slideToggle(function() {
		// Remove slide toggle display none so that it doesn't stay hidden when switching back 
		// to desktop after closing the menu
		if( !$('.header').hasClass('opened')) {
			$('.header .main_menu').removeAttr( 'style' );
		}
	});
	return false;
};

$('.header .open-btn').on('click',menuOpenClose);


$(window).bind("debouncedresize", function() {
	$('#debouncedhits').html( $('#debouncedhits').html() + '\n event fired:'+ (+new Date()) );
});

/*==========  iPad dropdown  ==========*/

$('.menu a').on('click',function( event ) {
	event.returnDefault();
});


/*==========  Dropdown  ==========*/

function init_menu_dropdowns() {
	function menu_is_mobile() {
		return ( $('.main_menu > li > ul').first().css( 'position' ) !== 'absolute' ) ? true : false;
	}

	$('.header .main_menu li').hover(function() {
		if ( !menu_is_mobile() ) {
			$(this).find('>ul, .menu-cols').stop(true, true).fadeIn(500);
		}
	}, function() {
		if ( !menu_is_mobile() ) {
			$(this).find('>ul, .menu-cols').stop(true, true).fadeOut(500);
		}
	});

	$('.main_menu li a').on('click',function(event) {
		if (menu_is_mobile() ) {
			$(this).parent().find('>ul:first, .menu-cols').stop(true, true).slideToggle();
		}
		event.preventDefault();
	});
}


/*==========  Smooth jump  ==========*/

$(".main_menu li, .down").on('click',function() {

	// Get the url from the clicked item
	var url = $(this).attr("href");
	// or an anchor within
	if ( url === undefined ) { url = $(this).find('a').attr("href");  }

	// If is a page jump
	if (url.indexOf("#") >= 0 && url != '#' && url != '#.html') {
		url = url.substring(url.indexOf("#"));
		$(".main_menu a").removeClass('current');
		$(this).addClass('current');
		$.smooth(url, -60);
		menuOpenClose();
		return false;
	} else {
		// If it isn't a dropdown, go to the page
		if( url !== '#') {
			window.location = url;
		}
	}
});


/*==========  Scroll change  ==========*/

function init_menu_scroll_change() {

	var headerClass = '.header';
	var menuHeight = $(headerClass).find('.main_menu').height();
	var menuChangePos = 0;

	// Add a menu height fixed div for solid menus
	if( $(headerClass).hasClass('solid') ) {
		set_menu_height();
	}

	function set_menu_height(){
		// menuHeight = $(headerClass).height();
		var menuFixerClass = 'menu-fixer';
		$(headerClass).after('<div class="' + menuFixerClass + '">');
	}

	$(window).trigger('scroll');

	function menuChange() {
		var pos = jQuery(window).scrollTop();
		if (pos > menuChangePos) {
			$(headerClass).addClass('hd-short');
			$(headerClass).addClass('fixed');
		} else {
			$(headerClass).removeClass('hd-short');
			$(headerClass).removeClass('fixed');
		}
	}
	if( !$(headerClass).data('fixed-height') ) {
		menuChange();
		$(window).on('scroll', menuChange );
	}

}

init_menu_scroll_change();

init_menu_dropdowns();


/* ===================================================== */
/* Milestones
/* ===================================================== */

	$('.milestones').appear(function() {
		$('.count').each(function() {
			var countTo = $(this).data('count');
			$(this).countTo({
				from: 0,
				to: countTo,
				speed: 2200,
				refreshInterval: 60,
				 formatter: function (value, options) {
				    value = value.toFixed(options.decimals);
				    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				    return value;
				  }
			});
		});

	});


/* ===================================================== */
/* Mobile
/* ===================================================== */

// Make hovers work on tap start (rather then after or not at all)
$(".feature-hex-wrap, .feature-shape-wrap").on('touchstart', function( e ) {});

$(".hexes-img").on('touchstart', function( e ) {});
/* ===================================================== */
/*	newsletter											 */
/* ===================================================== */

	$('.newsletter').newsletter({
		inlineErrors: true // Setting to false means it will not display inlines errors
	});


/* ===================================================== */
/*	Init parallax										 */
/* ===================================================== */

if (isMobile.any() === null) {
	if( $('body').hasClass('parallax') ) {
		$('body').removeClass('parallax').find('.sect, section, .slider-wrapper, .footer').addClass('parallax');
	}
	$('.parallax').each(function() {
		if( $(this).css('backgroundImage') !== 'none' ) {
			$(this).css({'backgroundAttachment': 'fixed'}).addClass('parallax').parallax('50%', 0.5, true);
		}
	});
}





/* ===================================================== */
/* Placeholders
/* ===================================================== */

 if( $.isFunction($.fn.placeholder) ) {
	$('input, textarea').placeholder();
} else {
	console.log('Placeholder library not loaded');
}


/* ===================================================== */
/* Projects
/* ===================================================== */

$().zorbixAjaxPortfolio();

	/* ===================================================== */
	/*	Lightbox
	/* ===================================================== */

	$("a[data-pp^='prettyPhoto']").prettyPhoto({
		hook: 'data-pp',
		theme: 'light_square',
		social_tools: ''
	});

/* ===================================================== */
/*	> Progress Bar										 */
/* ===================================================== */


	// For each progress bar, set original width
	var element = ".percent-bar";
	$(element).each(function() {
		var elem = $(this);
		elem.css('width', $(this).data('width'));
		elem.data("origWidth", $(this)[0].style.width) .width(0);
	});

	if (isMobile.any() === null) {
		$(element).appear(function() {
			$(this).each(function() {
				$(this).animate({
					width: $(this).data("origWidth")
				}, 2000);
			});
		});
	} else {
		$(element).each(function() {
			$(this).css('width', $(this).data("origWidth"));
		});
	}

// ----------------------------------
// --  Services & Process --
// ----------------------------------

(function($) {

	$('.services-animated').each(function(index, val) {

		var	hoverElem = $(this).find('.service-box'),
		backBtn = $(this).find('.services-back'),
		hoverInfo = '.service-info',
		infoElem = $(this).next('.service-text').find('.inner'),
		hoverContainerElem = '.services-animated',
		orginal_content = $(infoElem).html();

		$(hoverElem).css('cursor', 'pointer');
		$(hoverElem).on('click',function() {
			var member_info = $(this).find(hoverInfo).html();
			$(infoElem).stop().fadeOut(function() {
				$(infoElem).html(member_info);
				$('.services-back').on('click',{infoElem: infoElem, orginal_content: orginal_content}, servicesBack);
			});
			$(infoElem).fadeIn();
		});

}); // End each



	$('.process-animated').each(function(index, val) {
		var	hoverElem = $(this).find('.process-box'),
		backBtn = $(this).find('.process-back'),
		hoverInfo = '.process-info';

		$(this).find('.process-text').html('<div class="inner">');
		var infoElem = $(this).find('.process-text').find('.inner'),
		hoverContainerElem = '.process-animated',
		orginal_content = $(infoElem).html();

		$(hoverElem).css('cursor', 'pointer');
		$(hoverElem).on('click',function() {
			var member_info = $(this).find(hoverInfo).html();
			$(infoElem).stop().fadeOut(function() {
				$(infoElem).html(member_info);
				$('.process-back').on('click',{infoElem: infoElem, orginal_content: orginal_content}, servicesBack);
			});
			$(infoElem).fadeIn();
		});

}); // End each

	// First to occuply info section
	$('.process-animated .process-box').eq(0).trigger('click');

	var servicesBack = function(event) {
		var infoElem = event.data.infoElem,
		orginal_content = event.data.orginal_content;

		$(infoElem).stop().fadeOut(function() {
			$(infoElem).html(orginal_content);
			$(infoElem).fadeIn();
		});
		event.preventDefault();
	};

})(jQuery);
/* ===================================================== */
/* Main Slider   										 */
/* ===================================================== */

	// Animates the captions
	var animCaps = function(slide) {

		var delay;

		slide.each(function() {
			var elem = $(this),
			animation = elem.data('animation');

			elem.css({
				visibility: 'hidden'
			}).removeClass('animated ' + animation);

			delay = $(this).data('animate-delay');
			if (delay === undefined) {
				delay = '2000';
			}
			setTimeout(function() {
				elem.css({
					visibility: 'visible'
				}).addClass('animated ' + animation);
			}, delay);
		});
	};

	// Hides the animated captions
	$('.main-bxslider').find('.cap-anim').css({
		visibility: 'hidden'
	});

	//MAIN SLIDER OPTIONS
	$('.main-bxslider').bxSlider({
		auto: true,
		speed: 1000,
		pause: 5000,
		mode: 'fade',
		pager: false,
		controls: true,
		onSliderLoad: function(currentIndex) {
			animCaps($('.main-slider').find('li').eq(0).find('.cap-anim'));
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex) {

			animCaps($slideElement.find('.cap-anim'));
		},
		onSlideAfter: function($slideElement) {

		}
	});



/* ===================================================== */
/*	Testimonials slider									 */
/* ===================================================== */

	$('.testimonial').bxSlider({
		auto: true,
		speed: 1000,
		pause: 8000,
		mode: 'fade',
		pager: false,
		controls: false
	});


/* ===================================================== */
/*	Post slider 										 */
/* ===================================================== */

	$('.post-slider').bxSlider({
		auto: true,
		speed: 1000,
		pause: 8000,
		mode: 'fade',
		pager: false
	});


/* ===================================================== */
/*	Promo slider 										 */
/* ===================================================== */

	$('.promo-slider').bxSlider({
		auto: false,
		speed: 1000,
		pause: 8000,
		mode: 'fade',
		pager: false,
		adaptiveHeight: false,
		controls: true
	});


/* ===================================================== */
/*	Portfolio slider 										 */
/* ===================================================== */

	$('.portfolio-slider').bxSlider({
		auto: false,
		speed: 1000,
		pause: 8000,
		mode: 'fade',
		pager: false
	});


/* ===================================================== */
/*	Page Heading Slider 								 */
/* ===================================================== */

	$('.page-heading-slider').bxSlider({
		auto: true,
		speed: 1000,
		pause: 8000,
		mode: 'fade',
		pager: false,
		adaptiveHeight: false
	});

	// Set height
	var page_heading_slider_height = ( $('.page-heading-slider-wrap').data('bxheight') ) ? $('.page-heading-slider-wrap').data('bxheight') : 300 ;
	$('.page-heading-slider-wrap .bx-viewport').css('height', page_heading_slider_height);



/* ===================================================== */
/*	Accordian, Tabs and toggles							 */
/* ===================================================== */

	$('.accordian').accordian();

	$('.tabs').tabs({
		type: 'top'
	});

	$('.sidetabs').tabs({
		type: 'side'
	});

	$('.toggle').toggle();


// ----------------------------------
// --  Team members info  --
// ----------------------------------

(function($) {
	$('.hexes-imgs-wrap').each(function(index, el) {
		var contentContainer = $(this).siblings('.hexes-content');
		if( contentContainer.find('.inner').length > 0 ) {
			contentContainer = contentContainer.find('.inner');
		}

		var orginal_content = contentContainer.html();

		$(this, '.animated-content .hexes-img').css('cursor', 'pointer');

		var selected = $(this, '.animated-content').find('.hexes-img');
		$(selected).on('click',function() {
			var member_info = $(this).find('.feature-hex-info').html();
			$(this).find('.feature-hex-info').css('background', 'purple');
			contentContainer.stop().fadeOut(function() {
				contentContainer.html(member_info);
				$(this).find('.hexes-back').on('click', showOrginalContent );
			});
			contentContainer.fadeIn();
		});

		function showOrginalContent() {
			contentContainer.stop().fadeOut(function() {
				contentContainer.html(orginal_content);
				contentContainer.fadeIn();
			});
		}
	});
})(jQuery);
/* ===================================================== */
/* VIDEO BACKGROUND YTPlayer and UPLOAD
/* ===================================================== */

if (isMobile.any() === null) {
	$(".player").mb_YTPlayer();
}

/* ===================================================== */
/*	Blog
/* ===================================================== */


// ! Must come after post slider
$('.blog-masonry').waitForImages(function() {

	$('.blog-masonry').isotope();

});

$.stellar();

}); // End doc ready


/* ===================================================== */
/*	Preloader											 */
/* ===================================================== */

$('body').waitForImages(function() {
	$('.preloader').fadeOut(1000);
});



/* ===================================================== */
/*	Google custom search								 */
/* ===================================================== */

(function() {
	// Only run on search.html and when the id has been set
	if(search_id !== '' && $('.search-results').length !== 0) {
		var cx = search_id;
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		'//www.google.com/cse/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}
})();

 

})(jQuery);