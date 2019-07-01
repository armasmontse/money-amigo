<?php

$videos = [
	[
		"url" => "https://www.youtube.com/embed/Dn69Sn94igA?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "introducing <span class='money-amigo'>money<strong>amigo</strong></span>",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/X5CULDRk8fQ?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> bad relationship",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/cp13yxIIZf8?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> love",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/5ZUf60IqPms?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> metal card",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/cwRLX4obmxg?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0o",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> calling all moms",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/jRLGxm_2IW8?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> ladies pay yourself first",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/mPgYwzxm4zw?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> borrow 100 dollars 1",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/UrjmG8JS1Cs?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> borrow 100 dollars 2",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/xpxNdYEuVy0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> bad relationship sp",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/8BkJNMBwi9I?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> mamas sp",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/Q9QJacg8L5U?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> metal card sp",
		"withNumber" => false
	],
	[
		"url" => "https://www.youtube.com/embed/CsJqEsPISW0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0",
		"copy" => "<span class='money-amigo'>money<strong>amigo</strong></span> borrow 100 dollars 1 sp",
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
	<div class="grid__container amigo-movement">
		
		<h2 class="amigo-movement__ttl">
			the amigo <span>movement</span>
			<small>National TV campaign commercials</small>
		</h2>

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
