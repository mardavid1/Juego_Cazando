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

// Variables del juego
let puntaje = 0;
let tiempo = 10;
let intervaloTiempo;
let juegoTerminado = false;

function iniciarJuego() {
    reiniciarJuego();
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, 'brown');
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, 'blue');
}

function graficarRectangulo(x, y, ancho, alto, color) {
    cxt.fillStyle = color;
    cxt.fillRect(x, y, ancho, alto);
}

function limpiarCanva() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
}

function actualizarPantalla() {
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverIzquierda() {
    if (juegoTerminado) {
        return;
    }

    gatoX = gatoX - 10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha() {
    if (juegoTerminado) {
        return;
    }

    gatoX = gatoX + 10;
    actualizarPantalla();
    detectarColision();
}

function moverArriba() {
    if (juegoTerminado) {
        return;
    }

    gatoY = gatoY - 10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo() {
    if (juegoTerminado) {
        return;
    }

    gatoY = gatoY + 10;
    actualizarPantalla();
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
            clearInterval(intervaloTiempo);
            juegoTerminado = true;
            mostrarEnSpan("mensaje", "¡Ganaste!");
        } else {
            moverComidaAleatoria();
            actualizarPantalla();
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

function restarTiempo() {
    if (juegoTerminado) {
        return;
    }

    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo <= 0) {
        tiempo = 0;
        mostrarEnSpan("tiempo", tiempo);

        clearInterval(intervaloTiempo);
        juegoTerminado = true;
        mostrarEnSpan("mensaje", "Game Over");
    }
}

function reiniciarJuego() {
    clearInterval(intervaloTiempo);

    puntaje = 0;
    tiempo = 10;
    juegoTerminado = false;

    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    moverComidaAleatoria();

    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("mensaje", "");

    actualizarPantalla();

    intervaloTiempo = setInterval(restarTiempo, 1000);
}