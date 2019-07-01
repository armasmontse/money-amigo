<?php 

global $keyword;

?>
<header class="action gradient-scroll-change-horizontal <?php if(is_home() || $keyword): echo 'is-home'; endif; ?>" id="header">
	<div class="action__container">
		<div class="action__lang hidden-md">
			<ul>
				<li class="current-language"><a href="<?php echo BLOGURL ?>"><span class="gradient-scroll-change-horizontal gradient-text">en</span></a></li>
				<li><a href="<?php echo BLOGURL ?>/es">es</a></li>
			</ul>
		</div>
		<div class="action__text-box">
			<span class="action__text">
				download the <b>free award winning</b> app to sign up
			</span>
		</div>
		<div class="action__form-box">
			<form class="action__form tatango_form_JS">
				<input type="text" class="action__input phone-mask" name="phone_number" placeholder="your cell #">
				<?php if ($keyword): ?>
					<input type="hidden" name="keyword" value="<?php echo $keyword ?>">
				<?php endif ?>
				<button type="submit" class="action__button">get</button>
			</form>
		</div>
	</div>
</header>