<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');

$params= json_decode($json);


require("../conexion.php");


//$editar = "UPDATE into usuario(nombre, usuario, clave, celular, tipo_usuario) values('prueba2', 'prueba2@gmail.com', sha1('123456'), '123456789', 'Administrador')";


$editar = "UPDATE usuario SET nombre='$params->nombre', usuario='$params->usuario', clave=('$params->clave'),  celular='$params->celular', tipo_usuario='$params->tipo_usuario' WHERE id_usuario=$params->id_usuario";
mysqli_query($conexion, $editar) or die('no edito');


class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>
