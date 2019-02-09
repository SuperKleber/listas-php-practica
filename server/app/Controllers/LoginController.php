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
                // return true;
            } 
        } 
    }
    public function Logout(){
        unset($_SESSION["userId"]);
    }
}

?>