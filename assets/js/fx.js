var options = { duration: 750, stagger: 60 };

$('p, h2, h3, h4, li').velocity("transition.slideUpIn" , options);
$('a').velocity("fadeIn" , options);