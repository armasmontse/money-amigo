<?php 

$icons = [
	[
		'icon' => '/images/es/icon1.png',
		'text' => 'débito con 1% cash back',
		'number' => '2'
	],
	[
		'icon' => '/images/es/icon2.png',
		'text' => '$100 prestados con 0% APR',
		'number' => '7'
	],
	[
		'icon' => '/images/es/icon3.png',
		'text' => 've un doctor en linea 24/7/365',
		'number' => '9'
	],
	[
		'icon' => '/images/es/icon4.png',
		'text' => 'depósitos hasta 2 días antes',
		'number' => '6'
	],
	[
		'icon' => '/images/es/icon5.png',
		'text' => 'tarjetas para la familia',
		'number' => ''
	],
	[
		'icon' => '/images/es/icon6.png',
		'text' => 'tu dinero 100% a salvo y seguro',
		'number' => ''
	],
	[
		'icon' => '/images/es/icon7.png',
		'text' => 'tarjeta de débito metálica real',
		'number' => ''
	],
	[
		'icon' => '/images/es/icon8.png',
		'text' => 'muchos descuentos',
		'number' => ''
	],
];

get_header();

inc('header-es.php');

?>

<section class="idioma">
	
	<div class="">
		<div class="language__grid">
			<div class="language__column">
				<p class="language__text language__text--hola gradient-scroll-change gradient-text">
					hóla amigó
				</p>
				<p class="language__text language__text--money gradient-scroll-change gradient-text">
					obtén money<strong>amigo</strong> porque las soluciones de vida y dinero deben ser
				</p>
				<p class="language__text language__text--fast gradient-scroll-change gradient-text">
					rápido, justo y amigable
				</p>
				<p class="language__text language__text--app">
					aplicación y soporte 100% en español
				</p>
				<img class="language__image language__image--cards" src="<?php echo THEMEURL ?>images/es/cards.png" alt="">
			</div>
			<div class="language__column">
				<div class="language__masonry">
					<div class="language__masonry-col">
						<div class="language__stores">
							<a href="https://itunes.apple.com/us/app/moneyamigo/id1331116875?ls=1&mt=8" target="_blank">
								<img class="apple" src="<?php echo THEMEURL ?>images/appstore.svg" alt="">
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.inmediatum.moneyamigo" target="_blank">
								<img class="google" src="<?php echo THEMEURL ?>images/googleplaystore.svg" alt="">
							</a>
						</div>
						<p class="language__text language__text--easy">
							descarga la <strong>aplicación</strong> para <strong>registrarte</strong>: <br>
							<strong> <span class="gradient-scroll-change gradient-text">1, 2, 3</span> minutos. <span class="gradient-scroll-change gradient-text">fácil.</span></strong>
						</p>
					</div>
					<div class="language__masonry-col">
						<img class="language__image" src="<?php echo THEMEURL ?>images/pet.png" width="617" height="418" alt="">
					</div>
				</div>
				<div>
					<img class="language__image language__image--cards" src="<?php echo THEMEURL ?>images/es/iphone.png" alt="">
				</div>
			</div>
		</div>
	</div>

	<div class="">
		<div class="grid__row flex-row">
			<div class="col-1">
				<div class="language__icons">
					<ul>
						<?php foreach($icons as $icon): ?>
							<li>
								<div class="icon gradient-scroll-change">
									<img src="<?php echo THEMEURL . $icon['icon']; ?>" alt="">
								</div>
								<p class="text gradient-scroll-change gradient-text">
									<?php echo $icon['text']; ?> <?php if($icon['number']): echo '<sup>' . $icon['number'] . '</sup>'; endif; ?>
								</p>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
				<div class="">
					<p class="language__legal">Disponible solo en los EE. UU. Puede aplicar fácilmente con Social Security number o ITIN number. Los términos y condiciones se aplican a la membresía y servicios de moneyamigo.</p>
				</div>
			</div>
		</div>
	</div>
	
</section>

<?php  ?>