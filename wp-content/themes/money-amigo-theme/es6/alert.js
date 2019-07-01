const $ = jQuery;

class Alert {
	
	constructor(alert, close){
		
		this.div = $(alert);
		this.close = $(close);
		this.isOpen = false;
		
		this.close.click(event => { 
			this.closeAlert() 
		})

		$('body').click(e => {
			if (e.target == this.div.get( 0 )) { this.closeAlert() }
		});

	}

	openAlert(text){
		
		if (this.isOpen) { return }
		
		this.isOpen = true;
		
		setTimeout(e => { 
			this.closeAlert();
		}, 5000);

	}

	closeAlert() {

		if (!this.isOpen) { return }
		
		this.div.removeClass('success');
		this.div.removeClass('error');
		this.isOpen = false;

	}

	openSuccess(text) {

		this.div.addClass('success');
		this.openAlert(text);

	};

	openError(text){

		this.div.addClass('error');
		this.openAlert(text);

	}

}

export default (alert, close) => {
	return new Alert(alert, close);
}

