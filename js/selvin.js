$(function() {
    var MQL = 1170;
    var nav = $("#nav");
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = nav.height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && nav.hasClass('navbar-fixed-top')) {
                        nav.addClass('is-visible');
                    } else {
                        nav.removeClass('is-visible');
                    }
                } else {
                    //if scrolling down...
                    nav.removeClass('is-visible');
                    if (currentTop > headerHeight && !nav.hasClass('navbar-fixed-top')) $('.navbar-custom').addClass('navbar-fixed-top');
                }
                this.previousTop = currentTop;
            });
    }
});