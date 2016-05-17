<?php

if(isset($_POST['email'])) { // Check if the form was submitted else redirect to home page.
	require_once 'config.php';

	$message = '';
	$error = '';

	$to = $config['contact_email'];

	$name = strip_tags($_POST['name']);
	$message = strip_tags($_POST['message']);
	$email = $_POST['email'];
	if(isset($_POST['subject'])) {
		$subject = strip_tags($_POST['subject']);
	}

	if(strlen($name)<2) {
		$errors[] = 'Please enter your name';
	}

	if(strlen($message)<1) {
		$errors[] = 'Please leave a message.';
	} elseif(strlen($message)<5) {
		$errors[] = 'Please leave a message. It should have at least 5 characters.';
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errors[] = 'Please enter a valid email address';	
	}

	$body = "From: $name \n \n";

	if(isset($subject)) {
		$subject_pre = "Subject: ";
		if(strlen($subject)<1) {
			$subject = $subject_pre.'None';
		} else {
			$subject = $subject_pre.$subject;
		}
		$body .= $subject." \n \n";
	} else {
		$subject = '';
	}

	$body .= $message;
	$headers = "From: $email";

	if(mail($to, $subject, $body, $headers)) {
		$message = 'Thank you, your message was sent';
	} else {
		$errors[] = 'Sorry there was a error sending you message';
	}

	if(isset($errors) && count($errors) > 1) {
		$html = "<div class='contact-error alert error'>";
		foreach($errors as $error) {
			$html .="$error<br>";
		}
		$html .= '</div>';
	} else {
		$html = "<div class='alert success'>";
		$html .= $message;
		$html .= "</div>";
		
	}

	echo $html;
} else {
	header('Location: ../index.html'); 
}
?>
