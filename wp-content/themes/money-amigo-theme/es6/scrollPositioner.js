const $ = jQuery
const w = $(window)

export default scrollbar_positioner_selector => {
	const scrollbar_positioner = $(scrollbar_positioner_selector)
	const doc_height = $(document).height()
	
	let w_scroll_pos = w.scrollTop()
	let percentage = 100 - (doc_height - w_scroll_pos)/doc_height*100
	let w_height_percentage = w.height()/doc_height
	let w_height_adjustment = w_height_percentage*percentage

	w.scroll(() => {
		w_scroll_pos = w.scrollTop()
		percentage = 100 - (doc_height - w_scroll_pos)/doc_height*100		
		w_height_adjustment = w_height_percentage*percentage
		scrollbar_positioner.css('top', percentage + w_height_adjustment+'%')
	})

}