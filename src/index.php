 <?php
if (isset($_SERVER['HTTP_X_FORWARDED_URL']) && strpos($_SERVER['HTTP_X_FORWARDED_URL'], '.w3spaces-preview.com/') !== false) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}

$requestUri = strtolower($_SERVER['REQUEST_URI']);

if (in_array($requestUri, array('', '/', '/home', '/home/'), true)) {
    include('index.html');
    exit();
}

if (in_array($requestUri, array('/form', '/form/'), true)) {
    include('sendfile.html');
    exit();
}

if (in_array($requestUri, array('/request-form', '/request-form/'), true)) {
    include('requestform.html');
    exit();
}


if (in_array($requestUri, array('/send', '/send/', '/sendfile.html', '/sendfile.html/'), true)) {
    include('sendfile.html');
    exit();
}

if (in_array($requestUri, array('/bios', '/bios/', '/management-bios', '/management-bios/', '/management-bios.html', '/management-bios.html/'), true)) {
    include('management-bios.html');
    exit();
}

if (in_array($requestUri, array('/federal-bankruptcy', '/federal-bankruptcy/', '/fed-bank', '/fed-bank/', '/federal-bankruptcy.html', '/federal-bankruptcy.html/'), true)) {
    include('federal-bankruptcy.html');
    exit();
}

if (in_array($requestUri, array('/federal-district', '/federal-district/', '/fed-dist', '/fed-dist/', '/federal-district.html', '/federal-district.html/'), true)) {
    include('federal-district.html');
    exit();
}

if (in_array($requestUri, array('/state-courts', '/state-courts/', '/state', '/state/', '/state.html', '/state.html/'), true)) {
    include('state.html');
    exit();
}

http_response_code(404);
echo '<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 - Page Not Found</h1></body></html>';
?>
