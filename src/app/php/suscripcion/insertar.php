<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into suscripcion(fo_cliente, fo_servicios, fo_usuario) values('1', '2', '1')";

$ins = "insert into suscripcion(fo_cliente, fo_servicios, fo_usuario) values('$params->fo_cliente', '$params->fo_servicios', '$params->fo_usuario')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
