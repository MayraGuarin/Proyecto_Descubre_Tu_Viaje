<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "INSERT INTO soporte (Nombre, Correo, inquietudes ) values('Prueba', 'prueba@gmail.com', '123456')";

$ins = "insert into soporte(Nombre, Correo, inquietudes) values ('$params->Nombre', '$params->Correo', '$params->inquietudes')";

mysqli_query($conexion, $ins) or die ('no inserto');

class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
