<?php

ini_set("display_errors", 1);
ini_set("display_starup_error", 1);
error_reporting(E_ALL);

require_once './vendor/autoload.php';

session_start();
$dotenv = new Dotenv\Dotenv(__DIR__ . "/");
$dotenv->load();

use Illuminate\Database\Capsule\Manager as Capsule;
use Zend\Diactoros\Response\RedirectResponse;
use Aura\Router\RouterContainer;
use App\Controllers\ReadController;
use App\Controllers\SaveController;
use App\Controllers\RegisterController;
use App\Controllers\LoginController;
use App\Controllers\DeleteController;



$capsule = new Capsule;

$capsule->addConnection([
    "driver" => getenv("DB_DRIVER"),
    "host" => getenv("DB_HOST"),
    "database" => getenv("DB_NAME"),
    "username" => getenv("DB_USER"),
    "password" => getenv("DB_PASS"),
    "charset" => "utf8",
    "collation" => 'utf8_unicode_ci',
    "prefix" => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent(); 

$request = Zend\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);  



if ($request->getMethod() == "POST")
{
    if ($request->getParsedBody()["origen"] == "add_list"){
        $sessionUserId= $_SESSION["userId"] ?? null;
        if(!$sessionUserId)
        {
            echo"No tienes permisos para hacer esto";
            die;
        }else{
            $Lista = new SaveController();
            $Lista->Save($request);
            header('Location: http://localhost:3000');
           
        }
    }
    if ($request->getParsedBody()["origen"] == "delete_list"){
        $sessionUserId= $_SESSION["userId"] ?? null;
        if(!$sessionUserId)
        {
            echo"No tienes permisos para hacer esto";
            die;
        }else{
            $Lista = new DeleteController();
            $Lista->Delete($request);
            header('Location: http://localhost:3000');
           
        }
    }
    
    elseif($request->getParsedBody()["origen"] == "register"){
    
        $Register = new RegisterController();
        $Register->SaveUser($request);
        header('Location: http://localhost:3000');
    }
    elseif($request->getParsedBody()["origen"] == "login"){
    
        $Login = new LoginController();
        $Login->Login($request);
        header('Location: http://localhost:3000');
    }
    
}else{
    $read = new ReadController();
    $listas = $read->ReadAction();
    
    
    $data = array(
        "title" => "Listas",
        "listas" => $listas
    );
    echo json_encode($data);
}



?>
