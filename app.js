
let amigos = [];
let amigosSorteados = [];


function agregarAmigo() {
    
    let nombreInput = document.getElementById("amigo").value;

    
    if (nombreInput.trim() === "") {
        document.getElementById("mensajeAdvertencia").style.display = "block";
        return; 
    }

    
    document.getElementById("mensajeAdvertencia").style.display = "none";
    amigos.push(nombreInput);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    
    let listaAmigosElement = document.getElementById("listaAmigos");

    
    listaAmigosElement.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
    
        let listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${amigos[i]}`; 
        listaAmigosElement.appendChild(listItem);
    }
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
    
        document.getElementById("mensajeAdvertencia").style.display = "block";
        return;
    }

    
    document.getElementById("mensajeAdvertencia").style.display = "none";

    if (amigosSorteados.length === amigos.length) {
        
        mostrarMensajeReinicio();
        return;
    }

    let indiceAleatorio;
    let amigoSorteado;

    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado)); 

    amigosSorteados.push(amigoSorteado);

    
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto seleccionado es: <strong>${amigoSorteado}</strong></li>`;
}


function reiniciarSorteo() {
    
    amigos = [];
    amigosSorteados = [];

    
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";

    
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    
    ocultarMensajeReinicio();

    
    document.getElementById("mensajeAdvertencia").style.display = "none";
}

function mostrarMensajeReinicio() {
    let mensajeReinicio = document.getElementById("mensajeReinicio");
    mensajeReinicio.style.display = "block";
}

function ocultarMensajeReinicio() {
    let mensajeReinicio = document.getElementById("mensajeReinicio");
    mensajeReinicio.style.display = "none";
}