import R from 'ramda'

const $ = jQuery
const controller = new ScrollMagic.Controller();

const gradients = [
	'gradientBlue',
	'gradientGreen',
	'gradientYellow',
	'gradientOrange',
	'gradientPurple'
];

const gradientClasses = {
	gradientBlue: 'blue',
	gradientGreen: 'green',
	gradientYellow: 'yellow',
	gradientOrange: 'orange',
	gradientPurple: 'purple',
	all: 'all'
};

const mainContainer = $('.main-container');
const header = $('#header');
const scrollbar = $('#scrollbar_JS');

$('.general-section').each(function() {
	
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0,
		duration: '100%'
	})
	.on("enter", e => {

		const classes = e.target.triggerElement().classList;
		
		// El id de gradiente que tiene el current trigger.
		const [gradientIdClass] = R.intersection(gradients, classes)
		const removeableGradients = R.without([gradientIdClass], gradients)

		const gradientClass =  gradientClasses[gradientIdClass] || 'ninguna'
		
		removeableGradients.forEach(gradClass => {
			mainContainer.removeClass(gradientClasses[gradClass])
			scrollbar.removeClass(gradientClasses[gradClass])
			header.removeClass(gradientClasses[gradClass])			
		})
		mainContainer.addClass(gradientClass)
		scrollbar.addClass(gradientClass)
		header.addClass(gradientClass)

	})
	.on('leave', function(e) {
		
		const removeClass = (value, key) => {
			mainContainer.removeClass(value)
			header.removeClass(value)
		};

		R.forEachObjIndexed(removeClass, gradientClasses);

	})
	.addTo(controller);
});