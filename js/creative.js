(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Github links on click
    $('#bartindergit').click(function(event) {
      window.open('https://github.com/Sahedeva/BarTinder2.0', '_blank');
      return false;
    });

    $('#collegetrackergit').click(function(event) {
      window.open('https://github.com/ConnerO/TeamDanger', '_blank');
      return false;
    });

    $('#cvdgit').click(function(event) {
      window.open('https://github.com/Sahedeva/catsvsdogs', '_blank');
      return false;
    });

    $('#diygit').click(function(event) {
      window.open('https://github.com/Sahedeva/my_lowes_project/tree/imageLoader', '_blank');
      return false;
    });

    $('#rpsrtgit').click(function(event) {
      window.open('https://github.com/Sahedeva/rpsrt4', '_blank');
      return false;
    });

    $('#marssimgit').click(function(event) {
      window.open('https://github.com/Sahedeva/marshabitatsim', '_blank');
      return false;
    });

    // App links on click
    $('#collegetracker').click(function(event) {
      window.open('https://dry-tundra-9497.herokuapp.com/', '_blank');
      return false;
    });

    $('#bartinder').click(function(event) {
      window.open('https://sheltered-dusk-11169.herokuapp.com', '_blank');
      return false;
    });

    $('#cvd').click(function(event) {
      window.open('http://sahedeva.github.io/catsvsdogs', '_blank');
      return false;
    });

    $('#diy').click(function(event) {
      window.open('https://peaceful-bayou-81879.herokuapp.com', '_blank');
      return false;
    });

    $('#rpsrt').click(function(event) {
      window.open('https://rpsrt4.herokuapp.com', '_blank');
      return false;
    });

    $('#marssim').click(function(event) {
      window.open('https://cryptic-basin-28088.herokuapp.com/', '_blank');
      return false;
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
