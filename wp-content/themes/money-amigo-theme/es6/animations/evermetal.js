import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

$('#evermetal').each(function() {

	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		reverse: false
	})
	.addTo(controller)
	.on("enter", e => {
		
		const $videos = $('.blackcard_video_JS');;

		$videos.each(function(index, $video) {

			if (index == 0) {
				$video.play();
			}

			$video.addEventListener('ended', function (e) {
				if ($videos[index+1] !== undefined) {
					$videos[index+1].play();
				}
			}, false);

		});

	});
});