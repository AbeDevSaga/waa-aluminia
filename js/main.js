(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

function toggleDescription(event) {
    console.log("event")
    console.log("event clicked")
    event.preventDefault(); // Prevent default anchor click behavior
    const description = event.target.previousElementSibling; // Get the description element
    const moreText = description.querySelector('.more-text');

    if (moreText.style.display === "none") {
        moreText.style.display = "inline"; // Show the full text
        event.target.innerText = "Read Less "; // Change link text to "Read Less"
        event.target.innerHTML += '<i class="fa fa-angle-left"></i>'; // Add a left angle icon
    } else {
        moreText.style.display = "none"; // Hide the full text
        event.target.innerText = "Read More "; // Change link text back to "Read More"
        event.target.innerHTML = event.target.innerHTML.replace('<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'); // Restore right angle icon
    }
}
