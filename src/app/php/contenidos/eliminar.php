<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

 $del = "DELETE FROM contenidos WHERE id_servicios =" .$_GET['id'];
 mysqli_query($conexion, $del) or die ("no elimino");


class Result {}

$response = new Result();
$response ->resultado = 'OK';
$response ->mensaje = 'datos borrados';

header('Content-Type: application/json');
echo json_encode($response);
?>
