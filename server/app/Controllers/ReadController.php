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
        select("id","title", "description", "user_id","complete")
        ->where("user_id", $sessionUserId)
        ->where("active", 1)
        ->orderBy("complete", "asc")
        ->orderBy("created_at", "des")
        ->get();    
        return $listas;
    }
    public function getUserEmail($sessionUserId){
        $user = User::
        select("email")
        ->where("id", $sessionUserId)
        ->first();
        return $user["email"];
    }
}

?>