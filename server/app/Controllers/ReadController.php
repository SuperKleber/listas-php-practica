<?php
namespace App\Controllers;

use App\Models\Lista;

class ReadController {
    public function ReadAction(){
        // $listas = Lista::
        // select("listas.title", "categories.category", "listas.description")
        // ->join("categories", "listas.category_id", "=","categories.category_id")
        // ->get();
        $listas = Lista::
        select("listas.lista_id","listas.title", "listas.description")
        ->where("listas.active", 1)
        ->get();
        return $listas;
    }
}

?>