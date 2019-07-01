<section class="gradient-section" id="just-a-click-away" data-color="none" data-header="hide">
	<div class="beone gradient-scroll-change-horizontal purple">
		<div class="grid__container">
			<div class="grid__row flex-row">

				<div class="col-1-2">

					<div class="beone__text-box">
						<div class="beone__text beone__text--just">
							<span class="just">Just</span> <br>
							<span class="click">a&nbsp;click</span> <br>
							<span class="away">away</span> <br>
						</div>
						<div class="hidden-over-xs" style="padding: 10px;">
							<img src="<?php echo THEMEURL ?>images/appicon.svg" alt="">
						</div>
					</div>

					<div class="beone__text--bottom">
						download the app. <br>
						sign up. done.
					</div>

				</div>

				<div class="col-1-2">

					<div class="beone__img hidden-xs">
						<img src="<?php echo THEMEURL ?>images/appicon.svg" alt="">
					</div>

					<form class="beone__form tatango_form_JS">
						<input name="phone_number" type="text" class="beone__input phone-mask" placeholder="your cell # number here">
						<?php if (isset($GLOBALS['keyword']) && !empty($GLOBALS['keyword'])): ?>
							<input type="hidden" name="keyword" value="<?php echo $GLOBALS['keyword'] ?>">
						<?php endif ?>
						<button type="submit" class="beone__button">get</button>
					</form>

					<div class="beone__stores">
						<a href="https://itunes.apple.com/us/app/moneyamigo/id1331116875?ls=1&mt=8" target="_blank">
							<img class="apple" src="<?php echo THEMEURL ?>images/appstore.svg" alt="">
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.inmediatum.moneyamigo" target="_blank">
							<img class="google" src="<?php echo THEMEURL ?>images/googleplaystore.svg" alt="">
						</a>
					</div>

				</div>

			</div>
		</div>
	</div>
</section>