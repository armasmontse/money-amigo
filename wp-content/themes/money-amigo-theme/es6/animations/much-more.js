import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

$('.muchmore').each(function() {
	
	var tween = new TimelineMax()
		.add(TweenMax.to($(this).find('#muchmore__o'), 200, {height: '150px', width: '162px', top: '-4px'}), 0)
		.add(TweenMax.to($(this).find('#muchmore__o-center'), 100, {height: '65px', width: '70px', top: '0px'}), 0)
		.add(TweenMax.to($(this).find('#muchmore__o-center'), 50, {height: '105px', width: '110px', backgroundColor: 'rgba(255,255,255,0)'}), 100)
		.add(TweenMax.to($(this).find('#muchmore__o-center img'), 50, {opacity:1}), 120)


	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0,
		duration: '100%'

	})
	.setPin(this)
	.setTween(tween)
	// .addIndicators()
	.addTo(controller);
});

// , {pushFollowers: false} // Si está en false Todo lo que está abajo se queda fijo, si está en true todo lo que está abajo se pone encima.
