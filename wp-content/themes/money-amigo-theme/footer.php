
	
	<footer class="footer gradient-scroll-change <?php if(is_page('about' ) or is_page('contact-us')): echo 'is-about'; endif; if(is_page('press')): echo 'is-press' ; endif; if(is_page('press-release')): echo 'is-press-release' ; endif;  if(is_page('partner-with-us')): echo 'is-partner' ; endif; ?>">

		<div class="grid__container">
			<div class="grid__row">
				<?php 

				wp_nav_menu(array(
					'theme_location' => 'footer_menu',
					'container' => 'nav',
					'container_class' => 'footer__menu',
					'container_id' => '',
					'menu_class' => '',
				));

				?>
			</div>
		</div>
		
		<div class="grid__container">
			<div class="grid__row footer__row">
				<div class="footer__col">
					<div class="footer__social">
						<ul>
							<li><a href="https://twitter.com/MyMoneyAmigo"><i class="fab fa-twitter" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.facebook.com/moneyamigo/"><i class="fab fa-facebook-f" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.instagram.com/mymoneyamigo/"><i class="fab fa-instagram" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.youtube.com/channel/UCoVR5VSwUE99z2xsSZBkjtA"><i class="fab fa-youtube" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="footer__col hidden-over-sm">
					<div style="width: 72px; height: 72px;">
						<?php include get_stylesheet_directory() . '/images/logo.php' ?>
					</div>
				</div>
				<div class="footer__col">
					<div class="footer__col-box footer__copyright">
						<b>amigo inc.</b> <br>
						&copy; copyright <?php echo date("Y"); ?>. all rights reserved.
					</div>
				</div>
				<div class="footer__col hidden-sm">
					<div style="width: 72px; height: 72px;">
						<?php include get_stylesheet_directory() . '/images/logo.php' ?>
					</div>
				</div>
			</div>
		</div>

		<div class="footer__pet">
			<img src="<?php echo THEMEURL ?>images/pet.png?ver=<?php echo assetVersion() ?>" width="617" height="418" alt="">
		</div>

	</footer>

	<!-- Vimeo API -->
	<script src="//player.vimeo.com/api/player.js"></script>
	<!-- Ramda -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.js"></script>
	<!-- Canvas for drawing text -->
	<script src="<?= THEMEURL ?>js/canvas.js?ver=<?php echo assetVersion() ?>"></script>
	<!-- Particles JS -->
	<script src="//cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
	<!-- VUE JS -->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
	
	<?php wp_footer(); ?>

	<script>
		// Revisamos el soporte de playsinline 
		Modernizr.addTest('playsinline', function () {
            return navigator.userAgent.match(/(iPhone|iPod)/g) ? ('playsInline' in document.createElement('video')) : true;
		});

		if(!Modernizr.video || !Modernizr.playsinline) {
			jQuery('video').each(function(index, video) {
				fallback(video)
			})
		}

		function fallback(video){
			var img = video.querySelector('img');
			if (img)
				video.parentNode.replaceChild(img, video);
		}
	</script>
	
	</body>

</html>
