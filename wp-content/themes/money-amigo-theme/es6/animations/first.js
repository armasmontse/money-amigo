import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

$('#hero__container-main').each(function() {
	// var smiley = new TimelineMax()
	// 	.add(TweenMax.to($(this).find('#smile__container--for-hero'), 50, {opacity: 1}), 0)
	// 	.add(TweenMax.to($(this).find('#smile__circle--hero'), 100, {
	// 		transform: 'translate3d(-50%, -50%, 0) scale(1)', 
	// 		onComplete(){
	// 			$('#header').fadeIn();
	// 			// $('#header').fadeIn().addClass('orange')
	// 			$('#scrollbar_JS').addClass('all')
	// 		}, 
	// 		onStart(){
	// 			$('#header').hide(); 
	// 			// $('#scrollbar_JS').removeClass('all')
	// 		}
	// 	}), 0)
	// 	.add(TweenMax.to($(this).find('#smile__text--hero'), 100, {opacity: 1}), 100)
	// 	.add(TweenMax.to($(this).find('#smile__face--hero'), 100, {opacity: 1}), 100)

	// var tween = new TimelineMax()
	// 	.to($(this).find('#hero__title'), 200, {opacity: 1})
	// 	.to($(this).find('#hero__subtitle'), 100, {opacity: 1})
	// 	.add(smiley)

	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: this,
	// 	triggerHook: 0,
	// 	duration: '0'
	// })
	// .setPin(this)
	// // .setTween(tween)
	// .on("enter", e => {
	// 	$("#header").fadeOut()
	// })
	// // .addIndicators()
	// .addTo(controller);
});

// , {pushFollowers: false} // Si está en false Todo lo que está abajo se queda fijo, si está en true todo lo que está abajo se pone encima.
