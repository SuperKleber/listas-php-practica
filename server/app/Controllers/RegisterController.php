<?php
namespace App\Controllers;

use Respect\Validation\Validator as v;

use App\Models\User;

class RegisterController{
    public function SaveUser($request){
        if($request->getMethod() == "POST"){
            $postData = $request->getParsedBody();
            if (!v::email()->validate($postData["email"])){
                echo json_encode(array(
                    "error"=>true,
                    "origen"=>"SaveUser",
                    "message"=>"Este no es un email"
                ));
            }else{
                $user = User::where("email", $postData["email"])->first();
                if($user){
                    echo json_encode(array(
                        "error"=>true,
                        "origen"=>"SaveUser",
                        "message"=>"Este usuario ya está registrado"
                    ));
                }else{
                    $user= new User();
                    $user->email = $postData["email"];
                    $user->password = password_hash($postData["password"],PASSWORD_DEFAULT);
                    $user->save();
                    echo json_encode(array(
                        "error"=>false,
                        "origen"=>"SaveUser",
                        "message"=>"Usuario registrado"
                    ));
                }
            }
        }
    }
}

?>