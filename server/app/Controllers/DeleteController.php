<?php
namespace App\Controllers;
use App\Models\Lista;

class DeleteController{
    public function Delete($request){
        $postData = $request->getParsedBody();
        $id = $postData["delete_list"];
        $delete = Lista::where("id", $id)
        ->update(array("active" => 0));
    }
}
?>