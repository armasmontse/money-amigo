<?php

abstract class Cltvo_Ajax_Master implements Cltvo_Ajax_Interface{

	const isNotAdmin = true;

	/**
	 * registra las ajax
	 */
	final static function registerAjax(){
		$className = get_called_class();

		if ( $className::isNotAdmin ) { // solo si no es admin
			add_action( "wp_ajax_nopriv_".$className, function() use ($className) {
				$className::noPrivMethod();
			});
		}

		add_action( "wp_ajax_".$className,function() use ($className){
			$className::privMethod();
		});
	}


	/**
	 * metodo de respuesta del ayax no privado
	 */
	static function noPrivMethod(){
		$className = get_called_class();
		$className::privMethod();
	}

	// /**
	//  * metodo de respuesta del ayax
	//  */
	// abstract static function privMethod();

	public function defaultMessages()
	{
		return [
			'required' => 'Please fill all the fields.'
		];
	}

	public function parse($inputs)
	{
		return array_filter(array_map(function($input) {
			return trim($input);
		}, $inputs));
	}

	public function validate($inputs, $rules)
	{
		foreach($rules as $name => $rule){
			if($rule == 'required'){
				if(!isset($inputs[$name]) && !strlen($inputs[$name])){
					$this->returnValidationError($name, $rule);
				}
			}
		}
	}

	public function returnValidationError($name, $rule)
	{
		$messages = array_merge($this->deafultMessages(), $this->messages());

		$message = array_key_exists($name.'.'.$rule, $messages) ? $messages[$name.'.'.$rule] : $messages[$rule];
		
		return $this->returnError();
	}

	public function returnError($message)
	{		
		$this->setHeaders();
		header('HTTP/1.1 422 Unprocessable Entity');
		echo json_encode(['message' => $message]);
		die;
	}

	public function success()
	{
		$this->setHeaders();
		echo json_encode(['message' => 'Thank you. We have sent you a message to confirm your subscription.']);
		die;
	}

	public function setHeaders()
	{
		header('Content-Type: application/json; charset=UTF-8');
	}

}
