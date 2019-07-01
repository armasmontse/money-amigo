<?php 

get_header();

// Nav header
inc('header.php');

// Homescreen, only show if the page is a landing page.
inc('homescreen.php');

// Hero: your money. fast. fair. friendly.
inc('hero.php'); 

// hola! moneyamigo - the nre revolutionary way to manage your manage your money - your way.
inc('welcome.php');

// say yes to no. NO hidden fees minimum deposit
inc('sayyes.php'); 

// two cards. two options
inc('twocards.php');

// 1st ever metal cash back debit card.
inc('firstcard.php'); 

// 1% cash back on everything you buy
inc('onecashback.php');

// Show me the money
get_template_part('views/front-page/showme');

// your real metal card. replace your old plastic
// inc('yourreal.php'); 

// $100 loan. 0% APR
inc('loan.php');

// See the doctor
get_template_part('views/front-page/doctor');

// Conveniently treat
 get_template_part('views/front-page/conveniently-treat');

// Save on
// get_template_part('views/front-page/saveon');

// 500,000+ daily discounts on national and local brands you love.
inc('fifty.php');

// 100% mobile & secure. Your money is safe, secure and FDIC insured.
inc('mobilesecure.php');

// The x factor
get_template_part('views/front-page/xfactor');

// Save
get_template_part('views/front-page/save');

// be one of the first. free invitation! no obligation! no credit check!
inc('beone.php');

// the amigo movement
inc('amigomovement.php');

// Where amigos meet
get_template_part('views/front-page/where-amigos-meet');

// Yah! award winning
get_template_part('views/front-page/yah');

// legal
inc('legal.php');

// Scroll bar
inc('scrollbar.php');

get_footer();