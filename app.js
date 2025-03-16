<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Amigos</title>
</head>
<body>
    <h1>Lista de Amigos</h1>
    <input type="text" id="nombreAmigo" placeholder="Ingrese el nombre de su amigo">
    <button onclick="agregarAmigo()">Agregar</button>

    <script>
        // Lista inicial de amigos
        let amigos = ["Steve", "Joseph", "Jhon", "Gerard", "Marc", "Antonelly", "Jude", "Crist", "Sophia", "Alessandro"];

        function agregarAmigo() {
            // Capturar el valor del campo de entrada
            let nombreAmigo = document.getElementById("nombreAmigo").value;

            // Validar la entrada
            if (nombreAmigo.trim() === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }

            // Actualizar el array de amigos
            amigos.push(nombreAmigo);

            // Limpiar el campo de entrada
            document.getElementById("nombreAmigo").value = "";

            // Mostrar el array actualizado en la consola (opcional)
            console.log(amigos);
        }
    </script>
</body>
</html>
