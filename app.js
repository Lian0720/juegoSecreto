let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P',`Eres un genio, acertaste el número en ${intentos} ${(intentos === 1) ? 'intento.': 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
            //el usuario no acertó
         if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor.');
        } else { 
         asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja() {
  
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos la totalidad de los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto ();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'El juego del número secreto');
    asignarTextoElemento('p', `Elige un número entre el 1 y el ${numeroMaximo}, por favor.`);
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarLaCaja
    limpiarCaja();
    //indicarMensajeIntervaloNumeros
    condicionesIniciales();
    //generarNumeroSecreto
    numeroSecreto = generarNumeroSecreto();
    //limpiarContadorIntentos
    intentos = 1;
    //deshabilitarDeNuevoelBoton
    document.querySelector('#reiniciar').setAttribute('disebled','true');
    
}

condicionesIniciales();
