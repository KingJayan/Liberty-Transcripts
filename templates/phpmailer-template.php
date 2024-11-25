<?php
// DONT USE INCLUDE() FOR THIS SCRIPT: ONLY FOR USE AS A COPY AND PASTE TEMPLATE


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoload file
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';
require 'path/to/PHPMailer/src/Exception.php';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@gmail.com'; // Your Gmail address
    $mail->Password = 'your_gmail_password'; // Your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587; // Gmail SMTP port (TLS)

    // Email content
    $mail->setFrom('your_email@gmail.com', 'Your Name');
    $mail->addAddress('recipient@example.com', 'Recipient Name');
    $mail->isHTML(true);
    $mail->Subject = 'Subject';
    $mail->Body = 'This is the HTML message body';
    $mail->AltBody = 'This is the plain text version of the email';

    // Send email
    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>