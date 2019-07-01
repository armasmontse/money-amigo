<?php 

$icons = [
	[
		'icon' => '/images/home/cashback.php',
		'text' => 'debit card with 1% cash back',
		'number' => '2'
	],
	[
		'icon' => '/images/home/apr.php',
		'text' => 'borrow $100 for 0% APR',
		'number' => '7'
	],
	[
		'icon' => '/images/home/doctor.php',
		'text' => 'see a doctor online 24/7/365',
		'number' => '9'
	],
];

$background = THEMEURL . 'images/home/videoimage.jpg';

?>
<section id="welcome__section" class="gradient-section" data-color="green" style="z-index: 9999;">
	<div class="welcome" style="position: relative; overflow: hidden;">
		<div class="grid__container">
			<div class="grid__row flex-row">
				<div class="grid__col-1-2">
					<div class="welcome__text gradient-scroll-change gradient-text">
						hóla!
					</div>
					<div class="welcome__text welcome__text--bottom max-530 gradient-scroll-change gradient-text">
						money<strong>amigo</strong> - the revolutionary new way to manage your life and money - your way
					</div>
					<div class="welcome__icons">
						<ul>
							<?php foreach($icons as $icon): ?>
								<li>
									<div class="icon gradient-scroll-change">
										<?php include(get_stylesheet_directory() . $icon['icon']); ?>
									</div>
									<p class="text gradient-scroll-change gradient-text">
										<?php echo $icon['text']; ?> <?php if($icon['number']): echo '<sup>' . $icon['number'] . '</sup>'; endif; ?>
									</p>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>
				<div class="grid__col-1-2">
					<!-- Circle -->
					<div class="welcome__circle-play-container">
						<div class="welcome__circle-play gradient-scroll-change">
							<div id="welcome-player" class="player__container">
								<div class="player__close">
									&times;
								</div>
								<iframe data-src="https://www.youtube.com/embed/Dn69Sn94igA?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
							</div>
							<div class="icon">
								<?php include(get_stylesheet_directory() . '/images/play-01.php') ?>
							</div>
							<div class="image" <?php if($background): echo 'style="background-image: url(' . $background . ');"'; endif; ?>>
							</div>
						</div>
					</div>
					<!-- Text -->
					<div class="welcome__text welcome__text--bottom max-530 welcome__text--center gradient-scroll-change gradient-text">
						see the money<strong>amigo</strong> experience
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
