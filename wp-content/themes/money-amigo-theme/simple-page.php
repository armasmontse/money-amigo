<?php 

get_header();

inc('header.php');

?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<section class="simple-page__section--title">
	<div class="grid__container">
		<div class="grid__row">
			<div class="simple-page__title-box">
				<h1 class="simple-page__title"><?php the_title(); ?></h1>
			</div>
		</div>
	</div>
</section>

<section class="simple-page__section">
	<div class="grid__container">
		<div class="grid__row">
			<div class="simple-page__content">
				<?php the_content(); ?>
			</div>
		</div>
	</div>
</section>

<section class="simple-page__section">
	<div class="grid__container">
		<div class="grid__row">
			<?php if( have_rows('sections') ): ?>
				<ul class="simple-page__navigation">
					<?php while ( have_rows('sections') ) : the_row(); ?>
						<li><a href="#<?php echo sanitize_title(get_sub_field('title')); ?>"><?php the_sub_field('title'); ?></a></li>
					<?php endwhile; ?>
				</ul>
			<?php endif; ?>
		</div>
	</div>
</section>

<section class="simple-page__section">
	<div class="grid__container">
		<div class="grid__row">
			<?php if( have_rows('sections') ): ?>
				<?php while ( have_rows('sections') ) : the_row(); ?>
					<div class="simple-page__subsection" id="<?php echo sanitize_title(get_sub_field('title')); ?>">
						<h2 class="simple-page__subsection-title gradient-text"><?php the_sub_field('title'); ?></h2>
						<div class="simple-page__subsection-content">
							<?php the_sub_field('content'); ?>
						</div>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</section>

<?php endwhile; endif; ?>

<?php


get_footer();