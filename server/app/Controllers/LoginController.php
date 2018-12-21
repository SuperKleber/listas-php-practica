<?php
namespace App\Controllers;
use App\Models\User;

class LoginController{
    public function Login($request){
        if($request->getMethod() == "POST"){
            $postData = $request->getParsedBody();

            $user = User::where("email", $postData["email"])->first();
            if ($user){
                if(\password_verify($postData["password"], $user->password)){
                    $_SESSION["userId"] = $user->id;
                } else{
                    echo "CONTRASEÑA INCORRECTA";
                    die;
                }
            } else{
                echo "EL USUARIO NO EXISTE";
                die;
            }

        }
    }
    public function Logout(){
        unset($_SESSION["userId"]);
    }
}

?>