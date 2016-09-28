var options = { duration: 700, stagger: 150 };

// var $sel = $('.velo * p, .velo * h2, .velo * h3, .velo * h4, .velo * li, .velo * dl')
var $sel = $('.slide');

$sel.velocity("transition.slideLeftIn" , options);