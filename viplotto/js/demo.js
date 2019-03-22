$(function() {

if (!$('.demo').length) return;


var flipsnap = Flipsnap('#demo-transitionDuration .flipsnap', {
		distance: 50, 
		transitionDuration: 500,		
		//autoPlay: 3000,
});
//flipsnap.autoPlay( 3000 );
//자동  
setInterval(function() {
	/*if($(".flipsnap").css("transform") == "matrix(1, 0, 0, 1, -3087.6, 0)"){
		$(".flipsnap").css("transform","translate3d(0%, 0px, 0px)");
	}*/
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
