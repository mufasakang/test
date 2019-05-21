$(function() {

if (!$('.demo').length) return;


var flipsnap = Flipsnap('#demo-transitionDuration .flipsnap', {
		distance: 16.666, 
		transitionDuration: 500
});

//자동  
setInterval(function() {
	flipsnap.toNext()
}, 4000); 

var $next = $('#prev').click(function() {
	   flipsnap.toNext();
});

var $next = $('#next').click(function() {
	   flipsnap.toPrev();
});


var $flipsnapclick = $('.flipsnap').click(function() {
	   flipsnap.toNext();
});

/*
(function transitionDuration() {
	Flipsnap('#demo-transitionDuration .flipsnap', {
		distance: 15.8, 
		transitionDuration: 500
	});
})();


var $next = $('#next').click(function() {
});




$('.sample a').click(function(e) {
  e.preventDefault();
  var $a = $(this);
  var $code = $a.parents('.sample').find('pre');
  $code.slideToggle('fast', function() {
    $a.text($code.is(':visible') ? 'hide code' : 'show code');
  });
});
*/
});
