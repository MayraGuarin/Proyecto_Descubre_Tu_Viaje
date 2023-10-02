<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//$json= file_get_contents('php://input');

//$params= json_decode($json);

require("../conexion.php");

$ins = "insert into cliente (identificacion, nombre, dirección, celular, correo, fo_ciudad) values('1234567', 'Prueba', 'Cra Prueba', '3111230987', 'prueba@gmail.com', '2')";

//$ins = "insert into administradores(identificacion, nombre, dirección, celular, correo, fo_ciudad) values('$params->identificacion','$params->nombre', '$params->dirección', '$params->celuar', '$params->correo', '$params->fo_ciudad')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
