import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

$('.twocards_video_JS').each(function() {

	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0.55,
		duration: '100%',
		reverse: false
	})
	// .setPin(this)
	// .addIndicators()
	.addTo(controller)
	.on("enter", e => {

		this.play();
		
		// const $videosXS = $('.twocards_video_JS.hidden-sm');
		// const $videosSM = $('.twocards_video_JS.hidden-over-sm');

		// $videosXS.each(function(index, $video) {
			// if (index == 0) {
			// }
			// $video.addEventListener('ended', function (e) {
			// 	if ($videosXS[index+1] !== undefined) {
			// 		$videosXS[index+1].play();
			// 	}
			// }, false);
		// });

	});
});