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
    // Centrar el gato en el canvas
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    // Colocar la comida en la esquina inferior derecha
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    graficarGato();
    graficarComida();
}

function graficarGato() {
    cxt.fillStyle = 'brown';
    cxt.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    cxt.fillStyle = 'blue';
    cxt.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}




