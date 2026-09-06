let canto = [];
let idle = [];
let estadoActual = "idle";
let fondo;
let publico;
let cancion

let velocidadAnimacion = 10;


function preload(){
  fondo = loadImage ("data/fondodoom.png");
  publico = loadImage ("data/publicodoom.png");
  cancion = loadSound ("data/gazzillione.mp3");
  
  //frames de canto
  for (let i = 1; i <= 40; i++){
    let numero = nf(i, 2);
    canto [i-1] = loadImage(`data/canto${numero}.png`);
  }
  //frames de reposo
  for (let i = 1; i <= 9; i++){
    let numero = nf(i, 2);
    idle [i-1] = loadImage (`data/idle${numero}.png`);
  }
}

function setup(){
  createCanvas (800, 600);  
}

function draw(){
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  
  //maquina de estado
  if (estadoActual === "idle"){
    animarPersonaje(idle, width/ 2, 325);
  } else if (estadoActual === "canto") {
    animarPersonaje(canto, width/ 2, 325);
  } 
  
  //publico pogeando
  imageMode(CORNER);
  if (estadoActual === "canto"){
    let saltoX = sin(frameCount * 0.2) * 20; 
    let saltoY = cos(frameCount * 0.3) * 3;    
    image(publico, 0 + saltoX, 0 + saltoY, 850, 690);
  } else {
    image(publico, 0, 0, 850, 690);
  }
  
  mostrarInfoEscenario("Estado actual: " + estadoActual, 30, calcularPosicionTextoY());
}

//para cambiar de estado
function mousePressed(){
  if (estadoActual === "idle") {
    estadoActual = "canto";    
  } else {
    estadoActual = "idle";  
  }
}
function mouseClicked() {
  // Si la canción está sonando, la frena; si no, la reproduce
  if (cancion.isPlaying()) {
    cancion.stop();
  } else {
    cancion.play();
  }
}

//funciones propias

function animarPersonaje (animacion, x, y){
  let indiceFrame = floor(frameCount / velocidadAnimacion) % animacion.length;
  imageMode (CENTER);
  image (animacion[indiceFrame], x, y); 
}

function mostrarInfoEscenario(texto, x, y) {
  fill(255);
  textSize(16);
  text(texto, x, y);
}

function calcularPosicionTextoY() {
  let alturaCalculada = height - 20; 
  return alturaCalculada; 
}
