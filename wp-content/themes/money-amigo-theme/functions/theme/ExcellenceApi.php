<?php 

class ExcellenceApi
{
	protected $api_key;

	protected $base_url = 'https://my.textboom.com/exlapiservice/';

	public function __construct($api_key)
	{
        $this->api_key = $api_key;
	}
	
	public function api_caller($url, $params = [])
	{
		$api_key = $this->api_key;
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->base_url . $url);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, ['apikey:' . $api_key]);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		$info = curl_getinfo($ch);
		curl_close($ch);

		$error = [];

		if ($result === false) {
			$result->status = 'failure';
			$result->error = "Curl is not responding";
		} else {
			if(!$result = json_decode($result)) {
				$result->status = 'failure';
				$result->error = "API Key Validation Error for " . $api_key .". Contact your administrator!";
			}
		}

		return $result;
	 }
}