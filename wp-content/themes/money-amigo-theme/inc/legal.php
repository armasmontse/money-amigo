<?php $legal = new Cltvo_Page_Legal ?>
<?php $privacy = new Cltvo_Page_Privacy ?>

<section class="legal" data-color="none">
	<div class="grid__container legal__container">
		<div class="legal__wrapper">
			<div class="legal__col">
				<p class="legal__text gradient-scroll-change gradient-text">
					...and the legal yada yada yada
				</p>
			</div>
			<div class="legal__col--content">
				<div class="legal__content">
					<?php echo wpautop($legal->post->post_content) ?> <br>
					<a class="legal__link open_JS" data-target="#legal-modal">Privacy Policy</a>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="legal__modal" id="legal-modal">
	<div class="grid__container legal__modal-container">
		<span class="legal__modal-button open_JS" data-target="#legal-modal">&times;</span>
		<div class="legal__content legal__modal-content">
			<?php echo wpautop($privacy ->post->post_content) ?>
		</div>
	</div>
</div>
