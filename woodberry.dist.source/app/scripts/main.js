//layout of home tiles
'use strict';
var $container = $('.wlc-masonry');
// initialize
$container.masonry({
    columnWidth: 142,
    gutter: 10,
    itemSelector: '.feature-frame'
});
var msnry = $container.data('masonry');
console.log(msnry);

//smooth scroll to sections
var hashTagActive = '';
$('.anchorLink').click(function (event) {
        if(hashTagActive !== this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;
        }
    });


    // Assuming jQuery.noConflict(); has been called
jQuery(function () {
    jQuery(document).ready(function () {
        jQuery('#toplink').hide();
        jQuery(function () {
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('#toplink').fadeIn('slow');
                } else {
                    jQuery('#toplink').fadeOut('slow');
                }
            });
            jQuery('#toplink').click(function () {
                jQuery('body,html').animate({
                    scrollTop : 0
                }, 1300);
                return false;
            });
        });
    });
});



