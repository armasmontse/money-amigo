import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();


const header = $('#header')
header.is_shown = false
const toggleHeader = (element, is_reverse) => {
	//esto es un superasco... lo sé, pero lo evento del scrollmagic no funcionan tan bien como quisiera y tuve que hacer esto
	if(!is_reverse) {//cuando vas hacia adelante
		if (element.dataset.header === 'hide') {
			if (header.is_shown === true) {

				header.fadeOut()
				header.is_shown = false
			}
		} else {
			header.fadeIn()
			header.is_shown = true
		}
	} else {//cuando vas en reversa, la lógica de arriva se revierte
		if (element.dataset.header === 'hide') {
			header.fadeIn()
			header.is_shown = true
		}
	}
}

//Scrollbar 
const scrollbar = $('#scrollbar_JS')
const gradients = ['blue', 'green', 'yellow', 'orange', 'purple', 'all', 'none'];
const changeScrollbarColor = (element) => {
	const gradient_color = element.dataset.color;
	const removeableGradients = R.without([gradient_color], gradients)
	removeableGradients.forEach(gradient => {
		scrollbar.removeClass(gradient)
		// header.removeClass(gradient)
	})
	scrollbar.addClass(gradient_color)
	// header.addClass(gradient_color)
}



$('.gradient-section').each(function() {
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0.5,
		duration: '100%'
	})
	// .addIndicators()
	.on("start", e => {
		changeScrollbarColor(e.target.triggerElement())
		toggleHeader(e.target.triggerElement(), e.scrollDirection === "REVERSE")
	})

	.addTo(controller);
});