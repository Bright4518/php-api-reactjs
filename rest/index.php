<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__ . "/core.php");
require(__DIR__ . "/rest.php");



if (!isset($_GET['action'])) {
    apiErro('No methods spicified');
}

if (!in_array($_GET['type'], $allowed_methods)) {
    apiErro('That methods is not allowed');
}

if (!isset($_GET['type'])) {
    apiErro('Either action is missing or  is not allowed');
}

//echo camelcasse("list_products");

$action = $_GET['action'];
$type = $_GET['type'];
//echo camelcasse($action) . '::' . camelcasse($type);
try {
    call_user_func(camelcasse($action) . '::' . camelcasse($type));
} catch (Exception $e) {
    apiErro("Mothod don't exist");
}
