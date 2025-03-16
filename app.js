// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//inicio la lista de amigos - Crear un array para almacenar los nombre
let amigos = [];

//funcion para agregar amigos - Implementa una función para agregar amigos
function agregarAmigo() {
	//selecciono el valor del input
	const amigo = document.getElementById("amigo").value;
	//agrego al amigo a la lista si no esta vacio el input
	if (amigo != "") {
		amigos.push(amigo);
		//muestro los amigos
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	//limpio el input
	document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
	//selecciono el ul correspondiente para agregarle los li
	const amigosHTML = document.querySelector("#listaAmigos");
	// limpio el ul para evitar repetidos
	amigosHTML.innerHTML = "";
	//itero sobre la lista de amigos para crear los li para cada amigo y agregarlos al ul
	for (let i = 0; i < amigos.length; i++) {
		const amigo = amigos[i];
		//creo el li
		const li = document.createElement("li");
		//le doy como contenido el nombre del amigo actual
		li.textContent = amigo;
		//agrego el li con el amigo actual al ul
		amigosHTML.appendChild(li);
	}
}

function sortearAmigo() {
	//corroboro si no hay amigos para sortear, en tal caso, salgo de la funcion informando al usuario
	if (amigos.length == 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	//selecciono el ul correspondiente para agregarle el li con el amigo sorteado
	const resultadoHTML = document.querySelector("#resultado");
	//selecciono un amigo sorteado
	const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	//le doy como contenido el nombre del amigo sorteado
	resultadoHTML.innerHTML = `${amigoSorteado}`;
	//desabilito el boton de sortear para evitar que se sortee mas de una vez
	document.querySelector(".button-draw").disabled = true;
	//desabilito el boton de agregar para evitar que se agreguen mas amigos
	document.querySelector(".button-add").disabled = true;
}
