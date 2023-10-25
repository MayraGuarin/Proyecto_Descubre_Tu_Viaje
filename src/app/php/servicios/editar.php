<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require('../conexion.php');

// Recibe los datos para la edición
$json = file_get_contents('php://input');
$params = json_decode($json);

if ($params) {
    // Escapa las variables para prevenir inyección SQL
    $id_servicio = mysqli_real_escape_string($conexion, $params->id_servicio);
    $nombre = mysqli_real_escape_string($conexion, $params->nombre);
    $codigo = mysqli_real_escape_string($conexion, $params->codigo);
    $fo_depto = mysqli_real_escape_string($conexion, $params->fo_depto);
    $fo_ciudad = mysqli_real_escape_string($conexion, $params->fo_ciudad);

    // Crea la consulta de actualización
    $editar = "UPDATE servicios SET nombre='$nombre', codigo='$codigo', fo_depto=$fo_depto, fo_ciudad=$fo_ciudad WHERE id_servicio=$id_servicio";

    // Ejecuta la consulta de actualización
    if (mysqli_query($conexion, $editar)) {
        $response = array(
            'resultado' => 'OK',
            'mensaje' => 'Datos modificados'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'resultado' => 'Error',
            'mensaje' => 'Error al editar: ' . mysqli_error($conexion)
        );
        echo json_encode($response);
    }
} else {
    $response = array(
        'resultado' => 'Error',
        'mensaje' => 'Datos no recibidos correctamente'
    );
    echo json_encode($response);
}

mysqli_close($conexion);
?>

