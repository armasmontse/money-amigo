<?php 

$icons = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
];

?>
<section class="gradient-section" data-color="none">
	<div class="doctor">
		<div class="doctor__container">
			<div class="grid__row flex-row doctor__row">
				<div>
					<div class="doctor__benefits gradient-scroll-change gradient-text">
						<img src="<?php echo THEMEURL; ?>images/includes/money-amigox-grey.svg" alt="">
						<span>benefits</span>
					</div>
					<div class="doctor__icon-box">
						<div class="gradient-scroll-change doctor__icon--big">
							<?php include(get_stylesheet_directory() . '/images/home/teledoctor.php'); ?>
						</div>
					</div>
				</div>
				<div>
					<div class="doctor__text doctor__text--doctor gradient-scroll-change gradient-text">
						see the <strong>doctor</strong>
					</div>
					<div class="doctor__text doctor__text--24 gradient-scroll-change gradient-text">
						24/7
					</div>
					<div class="doctor__text doctor__text--anytime gradient-scroll-change gradient-text">
						anytime, anywhere<sup>&nbsp;9</sup>
					</div>
					<div class="doctor__icons">
						<ul>
							<?php foreach($icons as $icon): ?>
								<li class="gradient-scroll-change">
									<?php include(get_stylesheet_directory() . '/images/home/svgs/' . $icon . '.php'); ?>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
