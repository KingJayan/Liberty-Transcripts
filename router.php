<?php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (strpos($uri, '..') !== false) {
    http_response_code(400);
    echo 'Bad Request';
    return true;
}

$blocked_paths = [
    '/phpinfo.php',
    '/monitor.php',
    '/upload.php',
    '/request-form-handle.php'
];

foreach ($blocked_paths as $blocked) {
    if (stripos($uri, $blocked) !== false) {
        http_response_code(403);
        echo 'Forbidden';
        return true;
    }
}

if (preg_match('/^\/data\//', $uri)) {
    http_response_code(403);
    echo 'Forbidden';
    return true;
}

$file_path = __DIR__ . '/src' . $uri;
$real_path = realpath($file_path);
$base_path = realpath(__DIR__ . '/src');

if ($real_path && is_file($real_path)) {
    if (strpos($real_path, $base_path) !== 0) {
        http_response_code(403);
        echo 'Forbidden';
        return true;
    }
    
    $extension = pathinfo($real_path, PATHINFO_EXTENSION);
    if ($extension === 'php') {
        http_response_code(403);
        echo 'Forbidden - Direct PHP execution not allowed';
        return true;
    }
    
    return false;
}

require __DIR__ . '/src/index.php';
return true;
