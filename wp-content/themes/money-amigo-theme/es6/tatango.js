const $ = jQuery;

// Test phone number
const testPhoneNumber = '2063344012';

// The submit handler of the form.
const submitHandler = function(form, e){
	
	e.stopPropagation();
	
	e.preventDefault();
	
	let data = $(form).serializeArray();
	
	data.push({name: 'action', value: 'Cltvo_Tatango_Ajax'});
	
	$.post(cltvo_js_vars.ajax_url, data).done(function(response) {
	
		$(form)[0].reset();
	
		try {
			cltvo_alert.openSuccess(response.message);
		} catch (e) {
			return false;
		}
	
		return true;
	
	}).fail(function(response){
	
		try {
			cltvo_alert.openError(response.responseJSON.message);
		} catch (e) {
			return false;
		}
	
		return true;
	
	});
}

// Rules for validation.
const rules = {
	'phone_number': 'required',
}

export default form => {

	$(form).each(function() {
	
		$(this).validate({
			submitHandler: submitHandler,
			rules: rules
		});
	
	});

}