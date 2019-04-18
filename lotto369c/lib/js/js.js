$( document ).ready(function() {
	$(".nextFocus").on('keyup', function() {
		var nextNum = $(this).data('sel') + 1;
		$(this).slice(0, $(this).attr('maxlength'));
		if($(this).attr('maxlength') <= $(this).val().length) {
			$('.nextFocus[data-sel="'+ nextNum +'"]').focus();
		}
	})
});
