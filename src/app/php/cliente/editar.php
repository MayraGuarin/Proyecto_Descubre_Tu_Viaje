<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');

$params= json_decode($json);

require("../conexion.php");

$editar = "UPDATE cliente SET identificacion='$params->identificacion', nombre='$params->nombre', dirección='$params->dirección', celular='$params->celular', correo='$params->correo', fo_ciudad='$params->fo_ciudad' WHERE id_cliente=$params->id_cliente";
mysqli_query($conexion, $editar) or die('no edito');


class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>
