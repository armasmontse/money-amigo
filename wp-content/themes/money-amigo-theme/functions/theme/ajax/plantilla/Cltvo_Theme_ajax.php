<?php

include_once get_template_directory() . '/functions/theme/TatangoHelper.php';

class Cltvo_Theme_ajax extends Cltvo_Ajax_Master
{
	static function privMethod()
	{	
		var_dump($_POST);
		die;

		$phone_number = $_POST['phone_number'];

		$tatango = new TatangoHelper($phone_number);

		if (isset($_POST['keyword']) && ! empty($_POST['keyword'])) {
			$tatango->keyword($_POST['keyword']);
		}

		return $tatango->subscribe();
	}
}
