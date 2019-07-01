import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

$('#mobile-secure-video').each(function() {

	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0.3,
		duration: '100%',
		reverse: false
	})
	// .addIndicators()
	.addTo(controller)
	.on("enter", e => {

		const $video1 = $('#mobile-secure')[0];

		if (!$video1.ended) {
			$video1.play();
		}

	});
});