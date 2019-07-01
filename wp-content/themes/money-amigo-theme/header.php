<!DOCTYPE html>
<html lang="<?php echo substr(get_bloginfo ( 'language' ), 0, 2);?>">
<head>
	<meta charset="UTF-8">
	<title>
		<?php
			global $page, $paged;

			wp_title( '|', true, 'right' );
			bloginfo( 'name' );

			$site_description = get_bloginfo( 'description', 'display' );

			if ( $site_description && ( is_home() || is_front_page() ) ) echo " | $site_description";
			if ( $paged >= 2 || $page >= 2 ) echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );
		?>
	</title>

	<meta name="author" content="<?php echo THEMEURL;?>humans.txt">

	<?php
	//generar el favicon usando http://www.favicomatic.com/ y agregar los archivos a images/favicon/
	include_once('inc/favicon.php');?>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

	<link rel="stylesheet" href="<?php echo THEMEURL ?>style.css?ver=<?php echo assetVersion() ?>"/>
	<link rel="stylesheet" href="<?php echo THEMEURL ?>css/mazorca.css?ver=<?php echo assetVersion() ?>"/>
	
	<script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

	<?php wp_head(); ?>
</head>
<?php 

global $keyword;

// Obtenemos si la página es una landing page.
$keyword = keyword();

?>
<body class="<?php if(!is_home() && !$keyword): echo 'not-home ' . get_field('color'); endif; if(is_page('car')): echo 'car'; endif; ?>">
	<?php

	/**
	 *CLTVO: poner esto en true sólo en la versiones locales.
	 */

	if( !defined('CLTVO_ISLOCAL') || CLTVO_ISLOCAL != true ){ include_once('inc/analytics.php'); }

	?>

	<!--[if gt IE 8]><div style="z-index: 1000; padding: 5px 0; text-align: center; position: absolute; top: 0; left: 0; width: 100%; background-color: #312822;"><p style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: white;">Consider <a style="color: #EA7640;
	text-decoration: underline;" href="http://www.google.com/intl/es/chrome/browser/" target="_blank">updating your browser</a> in order to render this site correctly.</p></div><!-->
	<!--<![endif]-->

	<!-- Aquí podría abrir el main-wrap -->

	<div id="alert" class="alert">
		<div class="alert__content">
			<span id="close-alert" class="alert__close">&times;</span>
			<img class="alert__img success" src="<?php echo THEMEURL ?>images/popup-THNKS.png" alt="">
			<img class="alert__img error" src="<?php echo THEMEURL ?>images/popup-ERROR.png" alt="">
		</div>
	</div>
