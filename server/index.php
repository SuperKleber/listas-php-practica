<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Access-Control-Allow-Credentials: true");
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
    $_FILES,
    $_SESSION
);  


// $redirect="https://listas-php-react.now.sh/";
$redirect="http://localhost:3000/";




$sessionUserId= $_SESSION["userId"] ?? null ;
if ($request->getMethod() == "POST")
{
    
    if($request->getParsedBody()["origen"] == "register"){
        
        $Register = new RegisterController();
        $Register->SaveUser($request);
        
    }
    if($request->getParsedBody()["origen"] == "login"){
        
        $Login = new LoginController();
        // $Login->Logout();
        $Login->Login($request);
           
        // header("Location: $redirect");
            
    }
    if($request->getParsedBody()["origen"] == "logout"){
    
        $Login = new LoginController();
        $Login->Logout();
        // header("Location: $redirect");
       
    }
    
    if(!$sessionUserId)
    {
        // echo json_encode("No tienes permisos para hacer esto");
       
        // die;
    }else{
        if ($request->getParsedBody()["origen"] == "add_list"){
                $Lista = new SaveController();
                $Lista->Save($request, $sessionUserId);
        }
        if ($request->getParsedBody()["origen"] == "delete_list"){
            
            // echo json_encode("LISTA BORRADA");
            $Lista = new SaveController();
            $Lista->Delete($request);
            // header("Location: $redirect");
        }
        if ($request->getParsedBody()["origen"] == "complete"){
            $Lista = new SaveController();
            $Lista->Complete($request);
        }
        
    }
    
        
}
if ($request->getMethod() == "GET"){
    $read = new ReadController();
    $listas = $read->ReadAction($sessionUserId);
    $user = $read->getUserEmail($sessionUserId);
    $data = array(
        "title" => "Listas",
        "listas" => $listas,
        "session" => $sessionUserId,
        "user"=> $user
    );
    echo json_encode($data);
}
// echo json_encode($data);


?>