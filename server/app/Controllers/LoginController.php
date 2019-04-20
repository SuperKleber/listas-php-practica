<?php
namespace App\Controllers;

use Respect\Validation\Validator as v;

use App\Models\User;

class LoginController{
    public function Login($request){
        $postData = $request->getParsedBody();
        if(!v::email()->validate($postData["email"])){
            echo json_encode(array(
                "error"=>true,
                "origen"=>"login",
                "message"=>"Este no es un email Válido"
            ));
        }else{
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
                        "message"=>"la contraseña no es correcta"
                    ));
                }
                
            }else{
                echo json_encode(array(
                    "error"=>true,
                    "origen"=>"login",
                    "message"=>"el nombre de usuario no es correcto"
                ));
            }
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