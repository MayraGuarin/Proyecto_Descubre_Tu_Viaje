<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');

$params= json_decode($json);

require("../conexion.php");

$editar = "UPDATE contenidos SET contenidos='$params->contenidos', titulo='$params->titulo', autor='$params->autor', fo_administrador='$params->fo_administrador' WHERE id_servicios=$params->servicios";

mysqli_query($conexion, $editar) or die('no edito');


class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>
