<?php

include_once get_template_directory() . '/functions/theme/ExcellenceApi.php';

class Cltvo_Tatango_Ajax extends Cltvo_Ajax_Master
{
	public static function privMethod()
	{
		$class = get_class();
		
		$controller = new $class();
		
		$input = $controller->parse($_POST);

		$controller->validate($input, [
			'phone_number' => 'required'
		]);

		return $controller->handle($input);
	}

	public function messages()
	{
		return [
			'phone_number.required' => 'The phone number is a required field.'
		];
	}

	public function handle($input)
	{
		$phone_number = str_replace('-', '', $input['phone_number']);

		try{
			$api_key = textboom_api_key();
			$username = textboom_username();
			$password = textboom_password();
		}catch(Exception $e){
			$this->returnError($e->getMessage());
		}

		$excellente_api = new ExcellenceApi($api_key);

		// Login
		$response = $excellente_api->api_caller('users/login', [
			'username' => $username,
			'password' => $password
		]);

		if($response->status == 'failure'){
			$this->returnError($response->error);
		}

		$auth = $response->data;

		// Make networklookup
		$response = $excellente_api->api_caller('member/networklookup', [
			'user_key' => $auth->user_key,
			'client_id' => $auth->client_id,
			'cellphone' => $phone_number
		]);

		if($response->status == 'failure'){
			$this->returnError($response->error);
		}

		$carrier = $response->data;

		// Create record.
		$response = $excellente_api->api_caller('sms/mo', [
			'user_key' => $auth->user_key,
			'client_id' => $auth->client_id,
			'cellnumber' => $phone_number,
			'carrier_id' => $carrier->id,
			'message' => textboom_message(),
			'shortcode_id' => 34,
			'trigger' => 'doubleoptin'
		]);

		if($response->status == 'failure'){
			$this->returnError($response->error);
		}

		// Logout
		$response = $excellente_api->api_caller('/users/logout', [
			'user_key' => $auth->user_key
		]);

		if($response->status == 'failure'){
			$this->returnError($response->error);
		}

		$this->success();
	}
}
