<?php
namespace App\Controllers;

use App\Models\Lista;

class SaveController{
    public function Save($request){
        if ($request->getMethod() == "POST"){
            $postData = $request->getParsedBody();

            $lista = new Lista();
            $lista->title = $postData["title"];
            $lista->category = $postData["category"];
            $lista->description = $postData["description"];
            $lista->save();


        }
    }
}
?>