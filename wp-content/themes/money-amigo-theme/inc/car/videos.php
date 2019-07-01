<?php

$videos = [
	[
		"url" => "https://www.youtube.com/embed/eKFtsQz-u2k?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='light'>money</span><span class='bold'>amigo</span> <span class='medium'>Iseta film</span>",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/nhuaDW-OsxE?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='medium'> old german <span class='bold'>Isetta</span> comercial</span>",
		"withNumber" => false
	],
	
];

//agrega llave "id" así: "amigo-movement__player".$index
$videos_with_ids = array_map(function($video_key) use ($videos){
	$videos[$video_key]["container_id"] = "amigo-movement__player__container".$video_key;
	$videos[$video_key]["id"] = "amigo-movement__player".$video_key;
	return $videos[$video_key];
}, array_keys($videos));

?>
<section class="gradient-section" data-color="none">
	<div class="amigo-movement">
		<div class="amigo-movement__container">

			<?php foreach ($videos_with_ids as $video): ?>
				<div class="amigo-movement__col-1-3">
					<div id="<?= $video["container_id"] ?>" class="amigo-movement__player">
						<div id="<?= $video["id"] ?>" class="player__container">
							<div class="player__close">
								&times;
							</div>
							<iframe data-src="<?= $video["url"] ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
						</div>
						<div class="icon">
							<?php include(get_stylesheet_directory() . '/images/play-01.php') ?>
						</div>
					</div>
					<p class="amigo-movement__copy">
						<?= $video["copy"] ?>
						<?php if ($video['withNumber']): ?>
							<sup class="number number-5">5</sup>
						<?php endif ?>
					</p>
				</div>
			<?php endforeach ?>
		</div>
	</div>
</section>

<script>
	window.amigo_movement_videos = <?= json_encode($videos_with_ids) ?>
</script>
