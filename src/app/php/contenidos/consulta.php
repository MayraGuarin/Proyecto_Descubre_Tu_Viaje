<?php
  header('Access-Control-Allow-Origin:*');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../conexion.php");

  $con ="SELECT c.* ,  s.nombre AS nnombre FROM contenidos c
         INNER JOIN servicios s ON c.fo_servicios = s.id_servicio
         ORDER BY c.Informacion";
  $res = mysqli_query($conexion, $con) or die ('no consulto clientes');

  $vec =[];
  while ($reg=mysqli_fetch_array($res))
  {
    $vec[]=$reg;
  }

  $cad=json_encode($vec);
  echo $cad;
  header ('Content-Type: application/json');
?>
