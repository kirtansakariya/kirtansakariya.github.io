//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
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

//JavaScript to help with theme change
var color = 1;
var intro = document.getElementById("intro");
var about = document.getElementById("about");
var certificates = document.getElementById("certificates");
var hobbies = document.getelementyById("hobbies");
var goals = document.getElementById("goals");
var contact = document.getElementById("contact");
var bottom = document.getElementById("bottom");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");