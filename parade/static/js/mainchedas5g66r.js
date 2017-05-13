Date.prototype.yyyyMmDd = function() {
    var e = this.getMonth(),
        t = this.getDate();
    return [this.getFullYear(), "-", (e + 101 + "").substring(1, 3), "-", (t + 100 + "").substring(1, 3)].join("")
}, String.prototype.width = function(e) {
    var t = e || "12px arial",
        n = $("<div>" + this + "</div>").css({
            position: "absolute",
            "float": "left",
            "white-space": "nowrap",
            visibility: "hidden",
            font: t
        }).appendTo($("body")),
        a = n.width();
    return n.remove(), a + 10
};

animateMainContent();
animateCoverGradient();
animateHeader();

function animateMainContent() {
    var bottomPos = $('.main-content').css('bottom').substr(0, 2) * 1,
        bottomPosAfterScroll = bottomPos,
        lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            if ( $(window).scrollTop() >= $('.main-cover').height() / 3 ) {
                bottomPosAfterScroll = 40;
                $('.main-content').css('bottom', bottomPosAfterScroll + 'px');
            }
            else {
                bottomPosAfterScroll -= 1;
                $('.main-content').css('bottom', bottomPosAfterScroll + 'px');
            }
        } else {
            if ( $(window).scrollTop() <= 0 ) {
                bottomPosAfterScroll = 70;
                $('.main-content').css('bottom', bottomPos + 'px');
            } else {
                if ( $(window).scrollTop() <= $('.main-cover').height() / 3 ) {
                    bottomPosAfterScroll += 1;
                    $('.main-content').css('bottom', bottomPosAfterScroll + 'px');
                }
            }
        }
        lastScrollTop = st;
    });
}

function animateCoverGradient() {
    var gradientOpacity = 1,
        lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            if ( $(window).scrollTop() >= $('.main-cover').height() / 2 ) {
                gradientOpacity = 0;
                $('.main-cover__gradient').css('opacity', gradientOpacity);
            }
            else {
                gradientOpacity -= 0.05;
                $('.main-cover__gradient').css('opacity', gradientOpacity);
            }
        } else {
            if ( $(window).scrollTop() <= 0 ) {
                gradientOpacity = 1;
                $('.main-cover__gradient').css('opacity', gradientOpacity);
            } else {
                if ( $(window).scrollTop() <= $('.main-cover').height() / 2 ) {
                    gradientOpacity += 0.05;
                    $('.main-cover__gradient').css('opacity', gradientOpacity);
                }
            }
        }
        lastScrollTop = st;
    });
}

function animateHeader() {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            if ( $(window).scrollTop() >= $('.main-cover').height() ) {
                $('.header').addClass('is-visible');
            }
        } else {
            if ( $(window).scrollTop() <= $('.main-cover').height() ) {
                $('.header').removeClass('is-visible');
            }
        }
        lastScrollTop = st;
    });
}