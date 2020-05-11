/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Progress Bars
============================================ */

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/* =========================================
                Portfolio
============================================ */


$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* =========================================
               Magnific-Popup
============================================ */

$(function () {

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
});

/* =========================================
               Testimonials
============================================ */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
               Stats
============================================ */
$(function () {
    $('.counter h3').counterUp({
        delay: 10,
        time: 2000
    });
});

/* =========================================
               Our Clients
============================================ */



$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =========================================
               Navigation
============================================ */

$(function () {
    $(window).scroll(function(){
        
        if( $(window).scrollTop() > 50){
            
        $("nav").addClass("white-nav-top");
            
        $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        
        $("#back-to-top").fadeIn();
            
        } else {
            
        
        $("nav").removeClass("white-nav-top");
        
        $(".navbar-brand img").attr("src", "img/logo/logo.png");

        $("#back-to-top").fadeOut();
        }
        
    });
});

/* =========================================
               Easing
============================================ */

$(function () {
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault(); // to prevent the default event of a element

        // get section id like #about #services, #work etc...
        var section_id=$(this).attr("href");
        // this - means the element that was just clicked

        $("html, body").animate({
            scrollTop: $(section_id).offset().top -64 //
        }, 1250, "easeInOutExpo"); // will get the vertical scroll position of section_id, if #about section is clicked than this statement eill get the coordonate of section $(section_id).offset().top and will asigne to scrollTop: section
        });
    }); 


















































