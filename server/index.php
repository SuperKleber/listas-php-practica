<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
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




// var_dump($_SESSION["userId"])
// die;
// $sessionUserId= $_SESSION["userId"] ?? null;
$sessionUserId= $_SESSION["userId"] ?? null;
if ($request->getMethod() == "POST")
{
    // echo json_encode($request->getParsedBody());
    if($request->getParsedBody()["origen"] == "register"){
        $Register = new RegisterController();
        $Register->SaveUser($request);
        // header("Location: $redirect");
        echo json_encode("RGISTRADO");
    }
    if($request->getParsedBody()["origen"] == "login"){
        
        $Login = new LoginController();
        $Login->Logout();
        $Login->Login($request);
        header("Access-Control-Allow-Credentials: true");
        // header("Location: $redirect");
        // echo json_encode("LOGEADO");
    }
    if($request->getParsedBody()["origen"] == "logout"){
    
        $Login = new LoginController();
        $Login->Logout();
        // header("Location: $redirect");
        header("Access-Control-Allow-Credentials: false");
        echo json_encode("SESIÓN CERRADA");
    }
    if(!$sessionUserId)
    {
        echo json_encode("No tienes permisos para hacer esto");
        header("Access-Control-Allow-Credentials: false");
        die;
    }else{
        header("Access-Control-Allow-Credentials: true");
        // var_dump($sessionUserId);
        if ($request->getParsedBody()["origen"] == "add_list"){
            // $sessionUserId= $_SESSION["userId"] ?? null;
                
                // echo json_encode("LISTA AGREGADA");
                $Lista = new SaveController();
                $Lista->Save($request, $sessionUserId);
                
                $read = new ReadController();
                $listas = $read->ReadAction();
                $data = array(
                    "title" => "Listas",
                    "listas" => $listas
                );
                echo json_encode($data);
                // header("Location: $redirect");
        }
        if ($request->getParsedBody()["origen"] == "delete_list"){
            
            // echo json_encode("LISTA BORRADA");
            $Lista = new DeleteController();
            $Lista->Delete($request, $sessionUserId);
            // header("Location: $redirect");
        }
        
    }
}
// $user_id = $_SESSION["userId"];



$read = new ReadController();

// $user_id = $read->getUserId($sessionUserId);
$listas = $read->ReadAction($sessionUserId);
$data = array(
    "title" => "Listas",
    "listas" => $listas,
    "session" => $sessionUserId 
);
// var_dump($listas[0]);
// die;
echo json_encode($data);
?>