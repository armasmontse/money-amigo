<?php 

$averages = [
	'single' => 1709,
	'couple' => 1998,
	'family' => 2256,
];

?>
<section class="gradient-section" data-color="none">
	<div class="save">
		<div class="grid__container">
			<div class="grid__row">
				<div class="col-1">
					<p class="save__text save__text--savings gradient-scroll-change gradient-text">
						<span class="s">$</span>aving<span class="s">$</span> <small >example</small><sup>10</sup>
					</p>
					<p class="save__text save__text--adds gradient-scroll-change gradient-text">
						it all adds up...
					</p>
					<p class="save__text save__text--average max-530 gradient-scroll-change gradient-text">
						<strong>the average person/family can save by using</strong> money<strong>amigo</strong>
					</p>
					<div class="save__icons">
						<?php foreach($averages as $key => $average): ?>
							<div class="save__icon">
								<div class="icon gradient-scroll-change">
									<?php include(get_stylesheet_directory() . '/images/home/' . $key . '.php'); ?>
								</div>
								<div class="ttl"><?php echo $key; ?></div>
								<div class="average gradient-scroll-change gradient-text">
									$<?php echo number_format($average); ?>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>