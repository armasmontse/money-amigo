
	
	<footer class="footer footer-car gradient-scroll-change">
		
		<div class="solutions text-center">
			<span class="bold">see</span>
			<span class="solutions__box">
				<img class="solutions__img" src="<?php echo THEMEURL ?>images/car/moneyamigologo.svg" alt="">	
			</span>
			<span class="bold">solutions</span>
		</div>
		
		<div class="grid__container">
			<div class="grid__row footer__row">
				<div class="footer__col">
					<div class="footer__social">
						<ul class="hide-mobile">
							<li><a href="https://twitter.com/MyMoneyAmigo"><i class="fab fa-twitter" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.facebook.com/moneyamigo/"><i class="fab fa-facebook-f" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.instagram.com/mymoneyamigo/"><i class="fab fa-instagram" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
							<li><a href="https://www.youtube.com/channel/UCoVR5VSwUE99z2xsSZBkjtA"><i class="fab fa-youtube" data-fa-mask="fas fa-circle" data-fa-transform="shrink-7"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="footer__col">
					<a class="footer-car__link-home" href="<?php echo BLOGURL ?>">go to main site</a>
				</div>
				<div class="footer__col">
				</div>
				
			</div>
		</div>

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
						<ul class="show-mobile">
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
	
	<?php wp_footer(); ?>
	
	</body>

</html>
