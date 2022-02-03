/* Sticky Navigation */
$(function () {

    var sticky = $('.sticky');
    var contentOffset;
    var nav_height;

    if (sticky.length) {

        if (sticky.data('offset')) {
            contentOffset = sticky.data('offset');
        } else {
            contentOffset = sticky.offset().top;
        }
        nav_height = sticky.height();
    }

    var scrollTop = $(window).scrollTop();
    var window_height = $(window).height();
    var doc_height = $(document).height();

    $(window).bind('resize', function () {
        scrollTop = $(window).scrollTop();
        window_height = $(window).height();
        doc_height = $(document).height();
        navHeight();
    });

    $(window).bind('scroll', function () {
        stickyNav();
    });

    function navHeight() {
        sticky.css('max-height', window_height + 'px');
    }

    function stickyNav() {
        scrollTop = $(window).scrollTop();
        if (scrollTop > contentOffset) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }
    }

});

// Smooth scoll js

$('document').ready(function () {
    var nav_height = 70;

    $("a[data-role='smoothscroll']").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top - nav_height;

        $("body, html").animate({
            scrollTop: position
        }, 1000);
        return false;
    });

	//preloader js
    $("#status").fadeOut(); 
    $("#preloader").delay(350).fadeOut("slow");

    // Back to top js
    var backTop = $(".back-to-top");

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            backTop.css('visibility', 'visible');
        } else if ($(document).scrollTop() < 400) {
            backTop.css('visibility', 'hidden');
        }
    });

    backTop.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$('document').ready(function () {

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Popovers
    $('[data-toggle="popover"]').popover();

    // Page scroll animate
    new WOW().init();
});

$("document").ready(function () {
	//index carousel
    $(".hero-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<span class='mai-chevron-back'></span>", "<span class='mai-chevron-forward'></span>"],
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            // breakpoint from 0 up
            0: {
                dots: false
            },
            // breakpoint from 480 up
            480: {
                dots: false
            },
            // breakpoint from 768 up
            768: {
                dots: true
            }
        }
    });

	//testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 16
            },
            768: {
                items: 2,
                margin: 24
            },
            992: {
                items: 3,
                margin: 24
            }
        }
    });

	// clients carousel
	$(".clients-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 4
			},
			900: {
				items: 5
			}
		}
	});

	//counter animation
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
});	

$(document).ready(function () {

    $(document).ready(function () {

        $("#sticker").sticky({
            topSpacing: 0
        });
    });

    var scrollLink = $('.smoothScroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
});

//email js

function sendmail() {

    var name = $('#name').val();
    var email = $('#sender').val();
    var service = $('#service').val();
    var contact = $('#contact').val();
    var country = $('#country').val();
    var state = $('#state').val();
    var city = $('#city').val();
    var message = $('#message').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Service Intrested In: ' + service + '<br>Phone: ' + contact + '<br>Country: ' + country + '<br>state: ' + state + '<br>City: ' + city + '<br>Message: ' + message;
    console.log(Body);

    Email.send({
        SecureToken: "596216bb-4d0f-414a-9c1d-f4db1577e632",
        To: 'care@dcove.co.in',
        From: 'care@dcove.co.in',
        Subject: "New message on contact from " + name,
        Body: Body
    }).then(
        message => {
            console.log(message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            } else {
                console.error(message);
                alert('There is error at sending message. ')
            }
        }
    );
}