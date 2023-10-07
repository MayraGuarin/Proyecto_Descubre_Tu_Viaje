<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into usuario(usuario, clave, correo, celular, tipo_usuario) values('Prueba', '12345', 'prueba', 'prueba', 'Invitado')";

$ins = "insert into usuario(nombre, usuario, clave, celular, tipo_usuario) values('$params->nombre', '$params->usuario', '$params->clave', '$params->celular', '$params->tipo_usuario')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
