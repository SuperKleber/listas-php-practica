<?php
namespace App\Controllers;
use App\Models\Lista;

class DeleteController{
    public function Delete($request){
        $postData = $request->getParsedBody();
        $id = intval($postData["delete_list"]);
        $delete = Lista::where("lista_id", "=", $id);   
        $delete->update(["active" => 0]);
    }
}
?>