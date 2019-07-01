const $ = jQuery;

$(document).ready(() => {

	const open = $('.open_JS');

	open.click(function(e){
		
		e.preventDefault();
		
		let $el = $(this);
		let $target = $($el.data('target'));
		
		$el.toggleClass('open');

		if ($el.hasClass('open')) {
			$el.text($el.data('open'));
		}else {
			$el.text($el.data('close'));
		}

		$target.toggleClass('open');

	});

});