// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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

    // Actualizar la lista en la interfaz
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultadoSorteo").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

// Inicializar la lista en la interfaz
actualizarListaAmigos();
