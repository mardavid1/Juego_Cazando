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
    // Centrar GATO
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    // Colocar comida esquina inferior derecha
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    graficarGato();
    graficarComida();
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

function moverIzquierda(){
    gatoX=gatoX-10;
    
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverDerecha(){
    gatoX=gatoX+10;

    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverArriba(){
    gatoY=gatoY+10;

    limpiarCanva();
    graficarGato();
    graficarComida();

    
}











