const $ = jQuery;
const particle_js = 'particles-js';
const path = '/js/particles.json';

export default particle => {

	if ($(particle).length) {
		
		particlesJS.load(
			particle_js,
			cltvo_js_vars.template_url + path
		);
		
	}

}