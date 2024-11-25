 <?php
// URL to monitor
$url = "http://libertytranscripts.com/";  // Replace with your actual website URL

// Use file_get_contents() to check if the website is up
$response = @file_get_contents($url);

if ($response === FALSE) {
    // If the site is down, send an email to alert you
    $subject = "Website Down";
    $message = "The website $url is currently down. Please check the server.";
    mail("jayanp0202@example.com", $subject, $message);
} else {
    // Optionally, log success or take other actions
    // file_put_contents('monitor.log', "Site is up at " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);
}
?>
