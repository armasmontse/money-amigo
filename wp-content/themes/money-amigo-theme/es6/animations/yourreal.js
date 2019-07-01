const $ = jQuery;

// define images
var images = [
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_16.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_17.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_18.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_19.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_20.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_21.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_22.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_23.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_24.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_25.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_26.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_27.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_28.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_29.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_30.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_31.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_32.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_33.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_34.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_35.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_0.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_1.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_2.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_3.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_4.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_5.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_6.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_7.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_8.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_9.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_10.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_11.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_12.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_13.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_14.jpg",
	"wp-content/themes/money-amigo-theme/images/blackcard-vr/0_15.jpg",
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5, {
		curImg: images.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index
		repeat: 2,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
			$("#sequence").attr("src", images[obj.curImg]); // set the image source
		}
	}
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
if ($('#trigger').lenght) {
	var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		duration: '50%',
	})
	.setTween(tween)
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
}

// handle form change
// $("form.move input[name=duration]:radio").change(function () {
// 	scene.duration($(this).val());
// });