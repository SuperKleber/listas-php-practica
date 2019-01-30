<?php
namespace App\Controllers;

use App\Models\Lista;
use App\Models\User;

class ReadController {
    public function ReadAction($sessionUserId){
        // $listas = Lista::
        // select("listas.title", "categories.category", "listas.description")
        // ->join("categories", "listas.category_id", "=","categories.category_id")
        // ->get();
        $listas = Lista::
        select("listas.id","listas.title", "listas.description", "listas.user_id")
        ->where("user_id", $sessionUserId)
        ->where("listas.active", 1)
        ->get();
        return $listas;
    }
    public function getUserId($sessionUserId){
        $user = User::
        select("id")
        ->where("id", $sessionUserId)
        ->first();
        return $user["id"];
    }
}

?>