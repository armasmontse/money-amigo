<?php get_header(); ?>

<?php inc('header.php'); ?>

<section class="landing">
	<div class="landing__gradiente">

		<div class="landing__container">
			<div class="action__container action__container--inv">
				<div class="action__text-box action__text-box--inv"><span class="action__text"><b>free</b> invitation! <b>no</b> obligation! <b>no</b> credit check!</span></div>
				<div class="action__form-box">
					<form class="action__form action__form--inv tatango_form_JS">
						<input type="text" class="action__input action__input--inv phone-mask" name="phone_number" placeholder="your cell #">
						<?php if (isset($GLOBALS['keyword']) && !empty($GLOBALS['keyword'])): ?>
							<input type="hidden" name="keyword" value="<?php echo $GLOBALS['keyword'] ?>">
						<?php endif ?>
						<button type="submit" class="action__button action__button--inv">get</button>
					</form>
				</div>
			</div>
		</div>

		<div class="landing__img-yah--box">
			<img class="landing__img-yah" src="<?php echo THEMEURL ?>images/landing/yah-landing.png">
		</div>

		<div class="landing__img-peluche--box">
			<img class="landing__img-peluche" src="<?php echo THEMEURL ?>images/landing/dibujo-landing.png">
		</div>

		<div class="landing__img-tarjeta--box">
			<img class="landing__img-tarjeta" src="<?php echo THEMEURL ?>images/landing/tarjeta-landing.png">
		</div>

	</div>

	<div class="row-white flex">

		<div class="col-7 offset-2">
			<div class="landing__img-circulos--box">
				<img class="landing__img-circulos" src="<?php echo THEMEURL ?>images/landing/circulos-landing.png">
				<img class="landing__img-more" src="<?php echo THEMEURL ?>images/landing/more-landing.png">

			</div>
		</div>

		<div class="col-5">
			<div class="landing__img-texto--box">
				<img class="landing__img-texto" src="<?php echo THEMEURL ?>images/landing/texto-landing.png">
				<a href=" <?php echo BLOGURL ?>/#the-amigo-movement " class="landing__button--gradiente">check our videos</a>
			</div>
		</div>

	</div>

	<div class="legales">
		<h5 class="legales--ttl">terms & conditions</h5>

		<div class="legales__container">
			© Copyright 2018 Amigo, Inc. - Terms & conditions apply to moneyamigo’s membership and services.
			<br>
			<br>
			By participating, you consent to receive recurring autodialed SMS/MMS marketing msgs. No purchase required. Msg&data rates may apply. Terms & conditions/privacy policy apply.
			<br>
			<br>
			The MoneyAmigo Prepaid Visa® Card is being issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. “Metropolitan Commercial Bank” and “Metropolitan” are registered trademarks of Metropolitan Commercial Bank © 2014 and is governed by the cardholder agreement set forth by the Terms of Use.
			<br>
			<br>
			See Program Terms of Use for the complete explanation of the rules.
		</div>
	</div>
</section>

<?php get_footer('invitation'); ?>
