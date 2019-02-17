<?php
namespace App\Controllers;
use App\Models\User;

class LoginController{
    public function Login($request){
        $postData = $request->getParsedBody();
        $user = User::where("email", $postData["email"])->first();
        if ($user){
            if(\password_verify($postData["password"], $user->password)){
                $_SESSION["userId"] = $user->id;
                $sessionUserId = $user->id;
                echo json_encode(array(
                    "error"=>false,
                    "origen"=>"login",
                    "message"=>"Datos correctos"
                ));
            }else{
                echo json_encode(array(
                    "error"=>true,
                    "origen"=>"login",
                    "message"=>"el nombre de usuario o contraseña no es correcto"
                ));
            }
            
        }else{
            echo json_encode(array(
                "error"=>true,
                "origen"=>"login",
                "message"=>"el nombre de usuario o contraseña no es correcto"
            ));
        }
    }
    public function Logout(){
        unset($_SESSION["userId"]);
        echo json_encode(array(
            "error"=>false,
            "origen"=>"logout",
            "message"=>"El usuario ha cerrado sessión"
        ));
    }
}

?>