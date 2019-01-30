<?php
namespace App\Controllers;

use App\Models\Lista;

class SaveController{
    public function Save($request, $sessionUserId){
        if ($request->getMethod() == "POST"){
            $postData = $request->getParsedBody();

            $lista = new Lista();
            $lista->title = $postData["title"];
            $lista->description = $postData["description"];
            $lista->user_id = $sessionUserId;
            $lista->save();


        }
    }
} 
?>