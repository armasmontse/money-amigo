const $ = jQuery
export const circlePlayer = ([player_selector, video_selector]) => {
	const player = $(player_selector)
	const video = $(video_selector)
	const icon = $(player.find('.icon').get(0))
	const image = $(player.find('.image').get(0))

	const iframe = video.find('iframe').get(0)

	player.is_open = false
	player.on('click', (e) => {
		iframe.src = iframe.dataset.src
		// const Vimeo = iframe.src ? new window.Vimeo.Player(iframe) : null
		let {top, left} = player.offset()
		let scroll_top = $(window).scrollTop()
		let player_top = Math.abs(scroll_top - top)
		
		if(player.is_open) {
			player.is_open = false
			player.attr('style', '')
			video.removeClass('open')
			icon.removeClass('open')
			image.removeClass('open')
			iframe.src = ''
			// Vimeo.pause()

		} else {
			player.is_open = true
			player.css({
				transform: 'scale(1)',
				position: 'fixed',
				top: player_top,
				left
			})

			setTimeout(() => 
				player.css({
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					borderRadius: '10px',
					zIndex: 99999999
				}),
				20
			)

			video.addClass('open')
			icon.addClass('open')
			image.addClass('open')

			setTimeout(()=> {
				// Vimeo.play()
			}, 700)
		}
	})
}

export const makeCirclePlayer = vs => vs.forEach(circlePlayer)