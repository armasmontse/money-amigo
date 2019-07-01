<?php

global $keyword;

$path = $keyword ? 'front-page.php' : 'simple-page.php';

include get_stylesheet_directory() . '/' . $path;