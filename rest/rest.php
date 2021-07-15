<?php
$allowed_methods = array(
    'products'
);

class Omj
{
    public static  function Products()
    {
        # code...

        $list = array();
        for ($n = 0; $n < 20; $n++) :
            $list[] = $n . "Item";
        endfor;

        echo JSON(array(
            'kind' => 'productList',
            'list' => $list
        ));
    }
}
