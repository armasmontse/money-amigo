<?php global $wp_query; ?>
<?php if (isset($GLOBALS['keyword']) && !empty($GLOBALS['keyword'])): ?>
<section class="scrollbar-section" data-color="all">
	<div class="homescreen">
		<img class="homescreen__image hidden-xs" src="<?php echo THEMEURL ?>images/welcome/<?php echo $wp_query->post->post_name . '.png'; ?>?ver=<?php echo assetVersion() ?>" alt="">
		<img class="homescreen__image hidden-xl" src="<?php echo THEMEURL ?>images/welcome/responsive/<?php echo $wp_query->post->post_name . ".png" ?>?ver=<?php echo assetVersion() ?>" alt="">
	</div>
</section>
<?php endif;?>
