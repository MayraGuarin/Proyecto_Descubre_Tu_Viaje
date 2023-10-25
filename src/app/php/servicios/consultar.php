<?php
  header('Access-Control-Allow-Origin:*');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require("../conexion.php");

  $con ="SELECT s.*, d.nombre AS ndepartamento, c.nombre AS nciudad
  FROM servicios s
  INNER JOIN departamento d ON s.fo_depto = d.id_depto
  INNER JOIN ciudad c ON s.fo_ciudad = c.id_ciudad
  ORDER BY s.nombre";


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
