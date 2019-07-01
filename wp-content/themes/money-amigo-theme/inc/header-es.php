<?php 

global $keyword;

?>
<header class="action gradient-scroll-change-horizontal <?php if(is_home() || $keyword): echo 'is-home'; endif; ?>" id="header">
	<div class="action__container">
		<div class="action__lang hidden-md">
			<ul>
				<li><a href="<?php echo BLOGURL ?>">en</a></li>
				<li class="current-language"><a href="<?php echo BLOGURL ?>/es"><span class="gradient-scroll-change-horizontal gradient-text">es</span></a></li>
			</ul>
		</div>
		<div class="action__text-box">
			<span class="action__text">
				para suscribirte <b>descarga gratis la premiada aplicación</b>
			</span>
		</div>
		<div class="action__form-box">
			<form class="action__form tatango_form_JS">
				<input type="text" class="action__input phone-mask" name="phone_number" placeholder="tu # celular">
				<?php if ($keyword): ?>
					<input type="hidden" name="keyword" value="<?php echo $keyword ?>">
				<?php endif ?>
				<button type="submit" class="action__button">obtener</button>
			</form>
		</div>
	</div>
</header>