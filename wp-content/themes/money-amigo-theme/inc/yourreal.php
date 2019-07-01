<!-- Section -->
<section class="gradient-section" data-color="none">
	<div id="trigger" class="yourreal">
		<!-- Container -->
		<div class="grid__container yourreal__container">
			<!-- Row -->
			<div class="yourreal__wrapper" style="position: relative;">
				<!-- Col -->
				<div class="yourreal__col yourreal__col--text">
					<p class="yourreal__text yourreal__text--real gradient-scroll-change gradient-text">
						your real
					</p>
					<p class="yourreal__text yourreal__text--metal gradient-scroll-change gradient-text">
						metal card
					</p>
					<p class="yourreal__text yourreal__text--replace gradient-scroll-change gradient-text">
						replace your old plastic relationship <sup>8</sup>
					</p>
				</div>
				<!-- Col -->
				<div class="yourreal__col yourreal__col--vr">
					<!-- Sequence -->
					<img id="sequence" src="<?php echo THEMEURL ?>images/blackcard-vr/0_0.jpg?ver=<?php echo assetVersion() ?>"><br>
				</div>
			</div>
		</div>
	</div>
	<?php for($i=0; $i<36; $i++): ?>
		<img src="<?php echo THEMEURL ?>images/blackcard-vr/0_<?php echo $i ?>.jpg?ver=<?php echo assetVersion() ?>" style="position: absolute; width: 1px; height: 1px; opacity: 0.001;">
	<?php endfor ?>
</section>
