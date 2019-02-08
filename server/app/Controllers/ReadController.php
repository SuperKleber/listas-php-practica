<?php
namespace App\Controllers;

use App\Models\Lista;
use App\Models\User;

class ReadController {
    public function ReadAction($sessionUserId){
        // var_dump($sessionUserId);
        // die;
        // $listas = Lista::
        // select("listas.title", "categories.category", "listas.description")
        // ->join("categories", "listas.category_id", "=","categories.category_id")
        // ->get();
        $listas = Lista::
        select("id","title", "description", "user_id")
        ->where("user_id", $sessionUserId)
        ->where("active", 1)
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