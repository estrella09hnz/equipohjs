<?php
//esto setendra quemodificar
$conexion = new mysqli("localhost", "root", "", "equipohjs");
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
$conexion->set_charset("utf8mb4");
$mensaje = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST["nombre"]);
    if ($nombre != "") {
        $sql = $conexion->prepare(
            "INSERT INTO integrantes (nombre) VALUES (?)"
        );
        $sql->bind_param("s", $nombre);
        if ($sql->execute()) {
            $mensaje = "¡Integrante registrado correctamente!";
        } else {
            $mensaje = "Error al registrar.";
        }
        $sql->close();
    } else {
        $mensaje = "Escribe un nombre.";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equipo HJS - Registro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8eff8;
            text-align: center;
            padding: 60px 15px;
        }
        .contenedor {
            background-color: white;
            padding: 30px;
            margin: auto;
            width: 350px;
            max-width: 90%;
            border-radius: 12px;
            box-shadow: 0 3px 10px #d9bfd9;
            border: 1px solid #efd8ef;
        }
        h2 {
            color: #a64ca6;
            margin-bottom: 8px;
        }
        p {
            color: #777777;
        }
        input {
            padding: 12px;
            width: 90%;
            margin: 15px 0;
            border: 1px solid #dfc5df;
            border-radius: 6px;
            box-sizing: border-box;
        }
        input:focus {
            outline: none;
            border-color: #bd75bd;
        }
        button {
            padding: 12px 25px;
            background-color: #bd75bd;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 6px;
        }
        button:hover {
            background-color: #9e579e;
        }
        .mensaje {
            color: #a64ca6;
            margin-top: 18px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <h2>Equipo HJS</h2>
        <p>Registro de integrantes</p>
        <form method="POST">
            <input
                type="text"
                name="nombre"
                placeholder="Escribe tu nombre completo"
                required
            >
            <br>
            <button type="submit">Registrar</button>
        </form>
        <p class="mensaje">
            <?php echo htmlspecialchars($mensaje); ?>
        </p>
    </div>
</body>
</html>
<?php
$conexion->close();
?>