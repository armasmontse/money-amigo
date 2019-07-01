<?php

/**
 * En este archivo se incluyen las Funciones de El Cultivo
 *
 * No agregar funciones del tema
 */

/** ==============================================================================================================
 *                                       Funciones de El Cultivo
 *  ==============================================================================================================
 */


/**
 * Clase para las imagenes del post que contiene el id de la imagen, la src, el tamaño y el alt
 *
 */

	include 'Classes/Cltvo_Img.php';

/**
 * regresa todas las imagenes del post con sus caracteristicas en un array
 *
 * Parametros:
 *
 * @param int $parentId id del post
 * @param boolean|array $exclude imagenes a ser excluidas (por defecto false)
 *
 * @return array con las imagenes y sus caracteristicas
 */

 function cltvo_todasImgsDelPost($parentId, $exclude= false){
	 $query_images_args = array(
	     'post_parent' => $parentId,
	     'post_type' => 'attachment',
	     'post_mime_type' =>'image',
	     'post_status' => 'inherit',
	     'posts_per_page' => -1
	 );

	 if( !empty($exclude) ){
	     $query_images_args['post__not_in'] = $exclude;
	 }

	 $query_images = get_posts( $query_images_args );
	 $images = array();
	 foreach ( $query_images as $image) {
	     $images[] = new Cltvo_Img($image->ID);
	 }
	 return $images;
 }

// ???
function cltvo_wpURL_2_path( $url ){
	$path = get_theme_root();
	$path = str_replace('wp-content/themes', '', $path);
	$path = str_replace(home_url('/'), $path, $url);
	return $path;
}

// modificacion de la funcion print_r
if( !function_exists('cltvo_print_r') ){
	function cltvo_print_r($var){
		echo "<pre>";
		print_r($var);
		echo "</pre>";
	}
}

//convierte int a string con signo de pesos, con punto decimal y dos ceros al final
if( !function_exists('cltvo_dinero') ){
	function cltvo_dinero( $numero ){
		return '$ ' . number_format($numero, 2);
	}
}

/**
 * trae el permalink de una pagina especial
 * @param  string $slug slug de la pagina especial
 * @return string       url de la pagina
 */
function specialPagePermalink($slug) {
	get_permalink( specialPage($slug) );
}

/**
 * verifica si la pagina especial existe
 * @param  string $slug slug de la pagina especial
 * @return boolean       generera una esepcion en caso de  que la pagia especial no exista
 */
function specialPageExists($slug){

	if (!isset( $GLOBALS['special_pages_ids'][$slug] ) ) {

		throw new Exception("Special page -- $slug -- not found");
	}

	return true;
}

/**
 * Trae las paginas especiales
 * @param  string  $slug   Slug de la página especial
 * @param  boolean $object Si se desea traer el un objeto o sólo el id
 * @return objeto o string
 */
function specialPage( $slug, $object = false )
{
	specialPageExists($slug);

	if ($object){
		return get_post($GLOBALS['special_pages_ids'][$slug]);
	}
	return $GLOBALS['special_pages_ids'][$slug];
}

/**
 * funcion auxuliar para las paginas especiales, verifica si la pagina a editar es una pagina especial
 * @param  string  $slug slug de la pagina a verificar
 * @return boolean      si se edita la pagina especual mencionada
 */
function isSpecialPage($slug)
{
	specialPageExists($slug);
	return isset($_GET['post']) && $_GET['post'] == specialPage( $slug);
}

function truncate($text, $length = 100, $options = array()) {
    $default = array(
        'ending' => '...', 'exact' => true, 'html' => false
    );
    $options = array_merge($default, $options);
    extract($options);

    if ($html) {
        if (mb_strlen(preg_replace('/<.*?>/', '', $text)) <= $length) {
            return $text;
        }
        $totalLength = mb_strlen(strip_tags($ending));
        $openTags = array();
        $truncate = '';

        preg_match_all('/(<\/?([\w+]+)[^>]*>)?([^<>]*)/', $text, $tags, PREG_SET_ORDER);
        foreach ($tags as $tag) {
            if (!preg_match('/img|br|input|hr|area|base|basefont|col|frame|isindex|link|meta|param/s', $tag[2])) {
                if (preg_match('/<[\w]+[^>]*>/s', $tag[0])) {
                    array_unshift($openTags, $tag[2]);
                } else if (preg_match('/<\/([\w]+)[^>]*>/s', $tag[0], $closeTag)) {
                    $pos = array_search($closeTag[1], $openTags);
                    if ($pos !== false) {
                        array_splice($openTags, $pos, 1);
                    }
                }
            }
            $truncate .= $tag[1];

            $contentLength = mb_strlen(preg_replace('/&[0-9a-z]{2,8};|&#[0-9]{1,7};|&#x[0-9a-f]{1,6};/i', ' ', $tag[3]));
            if ($contentLength + $totalLength > $length) {
                $left = $length - $totalLength;
                $entitiesLength = 0;
                if (preg_match_all('/&[0-9a-z]{2,8};|&#[0-9]{1,7};|&#x[0-9a-f]{1,6};/i', $tag[3], $entities, PREG_OFFSET_CAPTURE)) {
                    foreach ($entities[0] as $entity) {
                        if ($entity[1] + 1 - $entitiesLength <= $left) {
                            $left--;
                            $entitiesLength += mb_strlen($entity[0]);
                        } else {
                            break;
                        }
                    }
                }

                $truncate .= mb_substr($tag[3], 0 , $left + $entitiesLength);
                break;
            } else {
                $truncate .= $tag[3];
                $totalLength += $contentLength;
            }
            if ($totalLength >= $length) {
                break;
            }
        }
    } else {
        if (mb_strlen($text) <= $length) {
            return $text;
        } else {
            $truncate = mb_substr($text, 0, $length - mb_strlen($ending));
        }
    }
    if (!$exact) {
        $spacepos = mb_strrpos($truncate, ' ');
        if (isset($spacepos)) {
            if ($html) {
                $bits = mb_substr($truncate, $spacepos);
                preg_match_all('/<\/([a-z]+)>/', $bits, $droppedTags, PREG_SET_ORDER);
                if (!empty($droppedTags)) {
                    foreach ($droppedTags as $closingTag) {
                        if (!in_array($closingTag[1], $openTags)) {
                            array_unshift($openTags, $closingTag[1]);
                        }
                    }
                }
            }
            $truncate = mb_substr($truncate, 0, $spacepos);
        }
    }
    $truncate .= $ending;

    if ($html) {
        foreach ($openTags as $tag) {
            $truncate .= '</'.$tag.'>';
        }
    }

    return $truncate;
}
