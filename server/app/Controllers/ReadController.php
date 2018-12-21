<?php
namespace App\Controllers;

use App\Models\Lista;

class ReadController {
    public function ReadAction(){
        $listas = Lista::all();
        return $listas;
    }
}

?>