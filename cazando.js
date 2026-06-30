let canvas = document.getElementById('areaJuego');
let cxt = canvas.getContext('2d');

// Variables de posición
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

// Constantes de tamaño
const ALTO_GATO = 10;
const ANCHO_GATO = 50;

const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

function iniciarJuego() {
    reiniciarJuego();
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, 'brown');
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, 'blue');
}


function graficarRectangulo(x,y,ancho,alto,color){
    cxt.fillStyle=color;
    cxt.fillRect(x,y,ancho,alto);
}

//Funcion limpiar canvas
function limpiarCanva(){
    cxt.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    
    limpiarCanva();
    graficarGato();
    graficarComida();

    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10;

    limpiarCanva();
    graficarGato();
    graficarComida();

    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;

    limpiarCanva();
    graficarGato();
    graficarComida();

    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10;

    limpiarCanva();
    graficarGato();
    graficarComida();

    detectarColision();
}


function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);

        if (puntaje == 6) {
            alert("¡Ganaste!");
            clearInterval(intervaloTiempo);
            juegoTerminado = true;
        } else {
            moverComidaAleatoria();

            limpiarCanva();
            graficarGato();
            graficarComida();
        }
    }
}

function moverComidaAleatoria() {
    comidaX = Math.floor(Math.random() * (canvas.width - ANCHO_COMIDA));
    comidaY = Math.floor(Math.random() * (canvas.height - ALTO_COMIDA));
}

function mostrarEnSpan(id, valor) {
    let componente = document.getElementById(id);
    componente.textContent = valor;
}

let puntaje=0; //Variable puntaje

function actualizarPuntaje() {
    mostrarEnSpan("puntos", puntaje);
}

let tiempo = 10; //Variable tiempo
let intervaloTiempo; // Variable intervalo

function restarTiempo() {
    if (tiempo > 0) {
        tiempo = tiempo - 1;
        mostrarEnSpan("tiempo", tiempo);
    }

    if (tiempo == 0) {
        alert("Game Over");
        clearInterval(intervaloTiempo);
        juegoTerminado = true;
    }
}

let juegoTerminado = false; // Juego terminado

function reiniciarJuego() {
    clearInterval(intervaloTiempo);

    puntaje = 0;
    tiempo = 10;
    juegoTerminado = false;

    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);

    limpiarCanva();
    graficarGato();
    graficarComida();

    intervaloTiempo = setInterval(restarTiempo, 1000);
}



