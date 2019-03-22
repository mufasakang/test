(function($){
    var defaults = {
        message: '',
        feedbackClass: 'feedback'
    };
    $.fn.validate = function(options) {
        options = $.extend(defaults, options||{});
        return this.each(function() {
            var $form = $(this);
            $form.bind('submit', function (e) {
                var valid = true;
                $form.find('[required]').each(function(i, field) {
                    if (valid && !field.value) {
                    	alert('필수입력값을 채워주세요');
                        valid = false;
                        
                        $(field).trigger('focus');
                        /*
                        if (field.id) {
                            $form.find('label[for="' + field.id + '"]')
                                 .fadeOut().fadeIn();
                        }
						*/
                    }
                });
                if (!valid) {
                    if (!$form.find('.' + options.feedbackClass).length) {
                        $form.prepend('<div class="' + options.feedbackClass + '"/>');
                    }
                    $form.find('.' + options.feedbackClass)
                         .html(options.message).fadeOut().fadeIn();
                    e.preventDefault(); return false;
                }
            });
        });
    };
})(jQuery);