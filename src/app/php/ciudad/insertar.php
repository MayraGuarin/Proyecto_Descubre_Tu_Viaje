<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//$json = file_get_contents('php://input');

//$params = json_decode($json);

require("../conexion.php");

$ins = "insert into ciudad(nombre, fo_depto) values('Prueba', '1')";

//$ins = "insert into ciudad(nombre, fo_depto) values('$params->nombre', '$params->depto')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
