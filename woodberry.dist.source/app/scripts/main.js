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



