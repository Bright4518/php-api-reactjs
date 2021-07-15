<?php
function JSON($arr = array())
{
    return @json_encode($arr, 128);
}

function apiErro($msg)
{
    echo JSON(array(
        'error' => true,
        'reason' => $msg
    ));
}

function camelcasse($str, $delimeter = "_")
{
    # code...
    return str_replace($delimeter, "", ucwords($str, $delimeter));
}
