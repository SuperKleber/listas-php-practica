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
            echo json_encode(array(
                "error"=>false,
                "origen"=>"SaveList",
                "message"=> "La lista '".$postData["title"]."' ha sido guardada"
            ));
        }
    }
    public function Delete($request){
        $postData = $request->getParsedBody();
        $id = $postData["delete_list"];
        $delete = Lista::where("id", $id)
        ->update(array("active" => 0));
        echo json_encode(array(
            "error"=>false,
            "origen"=>"DeleteList",
            "message"=>"Lista borrada"
        ));
    }
    public function Complete($request){
        $postData = $request->getParsedBody();
        $id = $postData["id"];
        function complete($comp){
            if ($comp){
                return 1;
            }else{
                return 0;
            }
        }
        $complete = Lista::where("id", $id)
        ->update(array("complete" =>$postData["complete"]));
        echo json_encode(array(
            "error"=>false,
            "origen"=>"CompleteList",
            "message"=>"Lista completada"
        ));
    }
} 
?>