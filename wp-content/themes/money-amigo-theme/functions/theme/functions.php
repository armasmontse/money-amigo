<?php

/**
 * En este archivo se incluyen las funciones del tema 
 *
 */


/** ==============================================================================================================
 *                                              FUNCIONES DEL TEMA
 *  ==============================================================================================================
 */


// funciones aqui ...

function keyword($slug = '')
{	
	global $wp_query;

	if(!isset($wp_query->post)) { return ''; }

	$slug = $slug ? $slug : $wp_query->post->post_name;

	$keywords = array(
		'standout' 		=> "metal",
		'momlife' 		=> "mom",
		'ladies' 		=> "cashback",
		'getitgotit' 	=> "get",
		'antibank' 		=> "new",
	);

	return array_key_exists($slug, $keywords) ? $keywords[$slug] : '';
}

function inc($path)
{ 
	include get_stylesheet_directory() . '/inc/' . $path;
}

function return404()
{
	global $wp_query;

	$wp_query->set_404();
	status_header(404);
	get_template_part(404);

	exit();
}

function assetVersion()
{
	return defined('WP_ASSET_VERSION') ? WP_ASSET_VERSION : '1.0';
}

function textboom_message()
{
	return defined('TEXTBOOM_MESSAGE') ? TEXTBOOM_MESSAGE : 'moneyamigo_web';
}

function textboom_api_key()
{
	if(!defined('TEXTBOOM_API_KEY')){
		throw new Exception('Invalid api_key');
	}

	return TEXTBOOM_API_KEY;
}

function textboom_username()
{
	if(!defined('TEXTBOOM_USERNAME')){
		throw new Exception('Invalid username');
	}

	return TEXTBOOM_USERNAME;
}

function textboom_password()
{
	if(!defined('TEXTBOOM_PASSWORD')){
		throw new Exception('Invalid password');
	}

	return TEXTBOOM_PASSWORD;
}