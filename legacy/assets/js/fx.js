var options = { duration: 700, stagger: 150 };
var $sel = $('.slide');
$sel.velocity("transition.slideLeftIn" , options);

var $attn = $('.attn');
$attn.velocity("callout.flash", {duration: 1500});