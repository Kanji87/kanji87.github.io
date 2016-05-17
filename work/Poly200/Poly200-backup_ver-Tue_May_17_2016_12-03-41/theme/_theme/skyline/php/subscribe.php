<?php

if(isset($_POST['newsletter-email'])) { // Check if the form was submitted else redirect to home page.

	// Validate email and send to mailchip on success
	$email = $_POST['newsletter-email'];	
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo '<div class="alert error">Please enter a valid email address</div>';	
	} else { 

		require_once 'MCAPI.class.php';
		require_once 'config.php'; //contains apikey

		$api = new MCAPI($apikey);

		$batch[] = array('EMAIL'=>$email, 'FNAME'=>'Joe');

		$optin = true; //yes, send optin emails
		$up_exist = true; // yes, update currently subscribed users
		$replace_int = false; // no, add interest, don't replace

		$vals = $api->listBatchSubscribe($listId,$batch,$optin, $up_exist, $replace_int);

		if ($api->errorCode){
			echo "<div class='alert error'>Sorry we couldn't add your email address.</div>";
			$error = "Mailchimp: Failed to add a email,\n";
			$error .= "code:".$api->errorCode."\n";
			$error .= "msg :".$api->errorMessage."\n";
			error_log($error);
		} else {
			// Log Errors to php_error_log
			foreach($vals['errors'] as $val){
				$error = "Mailchimp: Failed to add a email,\n";
				if(isset($val['email_address'])) {
					$error .= $val['email_address']. " failed\n";
				}
				$error .= "code:".$val['code']."\n";
				$error .= "msg :".$val['message']."\n";
				error_log($error);
			}

			if($vals['error_count'] < 1) {;
				// Success message to use
				echo '<div class="alert success">Thank you, your email has been added.</div>';	
			}
		}
	}
} else {
	header('Location: ../index.html'); 
}
?>