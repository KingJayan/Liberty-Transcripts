 <?php
// If the request is made from our space preview functionality then turn on PHP error reporting
if (isset($_SERVER['HTTP_X_FORWARDED_URL']) && strpos($_SERVER['HTTP_X_FORWARDED_URL'], '.w3spaces-preview.com/') !== false) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}
?>
<?php
/*
// Check if the request URI matches "/ads"
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/request-form', '/request-form/'), true)) {
    include('request-form.html');
    // Stop further execution
    exit();
}
 SEE BELOW */
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/request-form', '/request-form/'), true)) {
    include('requestform.html');
    // Stop further execution
    exit();
}
 // $requestUri = strtolower($_SERVER['REQUEST_URI']);
 // if (in_array($requestUri, array('/form', '/form/'), true)) {
    // If it matches, include the content of "form.html"
 //   include('form.html');
    // Stop further execution
 //   exit();
 // }
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/form', '/form/'), true)) {
    // If it matches, include the content of "form.html"
    include('sendfile.html');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('', '/', '/home', '/home/'), true)) {
    include('index.html');
    // Stop further execution
    exit();
}
 // $requestUri = strtolower($_SERVER['REQUEST_URI']);
 // if (in_array($requestUri, array('/upload.php', '/upload.php/','/form/upload.php', '/form/upload.php/'), true)) {
//   include('upload.php');
    // Stop further execution
//    exit();
// }
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/request-form-handle.php/','/request-form-handle.php','/request-handle','/request-handle/'), true)) {
    include('request-form-handle.php');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/send/','/send','/sendfile.html','/sendfile.html/'), true)) {
    include('sendfile.html');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/bios', '/bios/', '/management-bios', '/management-bios/', '/management-bios.html/, /management-bios.html'), true)) {
    include('management-bios.html');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/federal-bankruptcy', '/federal-bankruptcy/', '/fed-bank', '/fed-bank/', '/federal-bankruptcy.html/, /federal-bankruptcy.html'), true)) {
    include('federal-bankruptcy.html');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/federal-district', '/federal-district/', '/fed-dist', '/fed-dist/', '/federal-district.html/, /federal-district.html'), true)) {
    include('federal-district.html');
    // Stop further execution
    exit();
}
$requestUri = strtolower($_SERVER['REQUEST_URI']);
if (in_array($requestUri, array('/state-courts', '/state-courts/', '/state', '/state/', '/state.html/, /state.html'), true)) {
    include('state.html');
    // Stop further execution
    exit();
}
?>
<?php
// Read the contents of config.json
$jsonConfig = file_get_contents('../config.json');

// Parse JSON data into a PHP associative array
$config = json_decode($jsonConfig, true);

// Check if JSON parsing was successful
if ($config === null) {
    die('Error parsing config.json');
}

// Access and use specific configuration values
echo "App Name: " . $config['name'] . "\n";
echo "Server Port: " . $config['server']['port'] . "\n";
echo "Server Host: " . $config['server']['host'] . "\n";
echo "Default Language: " . $config['defaultsetting']['language'] . "\n";
echo "Default Theme: " . $config['defaultsetting']['theme'] . "\n";
?>
