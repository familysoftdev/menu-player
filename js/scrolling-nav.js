
$(window).scroll(function() {
    if ($(".navbar").offset().top < 80) {
        $(".navbar-fixed-top").css("display", "none");
    } else {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css("display", "block");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
