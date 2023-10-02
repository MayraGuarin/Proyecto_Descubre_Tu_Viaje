<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into soporte(nombre, correo, fo_cliente ) values('Prueba', 'prueba@gmail.com', '3')";

$ins = "insert into soporte(nombre, correo, fo_cliente) values('$params->nombre', '$params->correo', '$params->fo_cliente')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
