import './animations/first'
import './animations/generalScene'
import './animations/scrollbarScenes'
import './animations/twocards'
import './animations/evermetal'
import './animations/yourreal'
import './animations/mobile-secure'
import Tatango from './tatango';
import cltvo_alert from './alert'
import Particles from './particles';
import scrollPositioner from './scrollPositioner';
import R from 'ramda';
import {makeCirclePlayer} from './circle-player'
import './open'
import './vue';

const $ = jQuery
const w = $(window)
// Se multiplica por 5 porque es el numero de gradientes.
const height = w.height() * 5;
// Elementos que se van a mover con el scroll.
const verticalGradientElements = $('.gradient-scroll-change');
const horizontalGradientElements = $('.gradient-scroll-change-horizontal');
const body = $('body')
const makeGradient = !body.hasClass('not-home');

w.load(() => {

	window.cltvo_alert = cltvo_alert('#alert', '#close-alert');
	
	// Run tatango form
	Tatango('.tatango_form_JS');
	
	// Run particles
	Particles('#particles-js');
	
	// Scroll positioner.
	scrollPositioner('#scrollbar__position')

	// Phone mask
	$('.phone-mask').mask("###-###-####", {reverse: true});

	// Make circle players
	if(window.amigo_movement_videos != null) {

		makeCirclePlayer(
			[
				['.welcome__circle-play', '#welcome-player']
			].concat(
				window.amigo_movement_videos.map(video => ['#'+video.container_id, '#'+video.id])
			)
		)

	}

	if(makeGradient){

		// Recorremos el gradiente 100% en 4 segundos cuando carga la página. Solo se hace en la página home.
		TweenMax.to(verticalGradientElements, 4, {backgroundPositionY: "100%", onComplete(){
			
			let welcome = $("#welcome__section");
			let html = $('html');
			let htmlbody = $('body, html');
			let header = $('#header');
			let scrollbar = $('#scrollbar_JS');

			if (welcome.length) {
				if (w.scrollTop() <= w.height()) {
					htmlbody.animate({
						scrollTop: welcome.offset().top - header.height()
					}, 1000);
				}
				header.fadeIn();
				scrollbar.addClass('all')
			}

		}});

	}
	

})

w.scroll(() => {

	if(makeGradient) {

		// Cada w.height() * 5 se tiene que reinicar la gradiente.
		
		// Pixeles que se ha recorrido del gradiente antes de que se genere una nueva.
		let mod = w.scrollTop() % height;
		// Procentaje que se ha recorrido del gradiente.
		let percentage = (mod * 100) / height;

		// let num = (w.scrollTop() * 100) / height;

		verticalGradientElements.css('background-position-y', percentage.toFixed(2) + '%');
		horizontalGradientElements.css('background-position-x',  percentage.toFixed(2) + '%');

	}

});




