<?php $logos = [
	'chucke-cheeses',
	'holiday-inn',
	'discount',
	'edible',
	'Quiznos',
	'WingStop',
	'LittleCaesars'
] ?>

<!-- section -->
<section class="gradient-section" data-color="none">
	<!-- section -->
	<div class="fifty">
		<!-- Container -->
		<div class="grid__container fifty__container">
			<!-- Row -->
			<div class="fifty__wrapper" style="position: relative;">
				<!-- Col -->
				<div class="fifty__col fifty__col--text" style="z-index: 2;">
					<p class="fifty__text fifty__text--360 gradient-scroll-change gradient-text">
						360,000+
					</p>
					<p class="fifty__text fifty__text--daily gradient-scroll-change gradient-text">
						daily discounts
					</p>
					<p class="fifty__text fifty__text--national gradient-scroll-change gradient-text">
						on national and local brands you love
					</p>
				</div>
				<!-- Col -->
				<div class="fifty__col fifty__col--logos">
					<!-- Logos container -->
					<div class="fifty__logo-container">
						<?php foreach ($logos as $logo): ?>
							<!-- Logo box -->
							<div class="fifty__logo-box">
								<!-- Logo image -->
								<img src="<?php echo THEMEURL ?>images/logos/<?php echo $logo ?>.png?ver=<?php echo assetVersion() ?>" alt="">
							</div>
						<?php endforeach ?>
					</div>
					<p class="fifty__powered">
						<img src="<?php echo THEMEURL ?>images/logos/powered.png" class="fifty__powered-image" alt=""> <br>
						Merchants are subject to change and content may not be available in all areas
					</p>
					<!-- Text paragraph -->
					<p class="fifty__text fifty__text--many gradient-scroll-change gradient-text">
						and many, many, many, more<sup>3</sup>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
