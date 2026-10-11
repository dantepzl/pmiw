//TP FINAL: Aventura grafica sobre el influencer Yao Cabrera
//Dante paz 127009/8
//Eric Parra 125655/6
//Comision 3 prof: David Bedoian
//link video: https://youtu.be/xj56JKV7GEY
//link diagrama: https://www.figma.com/design/y0uJQoQKRdvZGRrpaml5Iz/DiagramaTP?node-id=0-1&t=f3zpoL6JeUy6dqMB-1

const USAR_IMAGENES = true;
const USAR_SONIDO = true;

//===================================================================================
//1.estados de programa
//===================================================================================


const PANTALLA_INICIO = -1;
const PANTALLA_CREDITOS = -2;

let estadoActual = PANTALLA_INICIO;


//===================================================================================
//2.nodos de historia
//===================================================================================

let textos = [

// NODO 0
"Hoy es un dia mas en la vida de Yao Cabrera, el se levanta de su cama y nota que sus numeros estan decayendo, desesperadamente yao busca la forma de volver a viralizarse ¿pero como?.\n¿Que puede hacer para viralizarse?",

// NODO 1
"Yao descarta lo simple y busca algo mas grande para viralizarse. ¿Que hace?",

// NODO 2
"Yao explota las redes al mostrar su nuevo auto deportivo dentro de una concesionaria, mientras todo el publico lo halaga y lo envidia.\nyao decide salir a dar una vuelta, ¿pero a donde?",

// NODO 3
"Yao fanatisa a su madre y cancherea por el barrio, aunque es muy de noche.\nyao esta cansado pero igual decide:",
 
// NODO 4
"Al estar con sus amigos, los amigos lo felicitan e incetiban a salir de rumba para festejar.\nyao esta cansado pero igual decide:",
 
// NODO 5 (FINAL)
"Viralizado, duerme tranquilamente y por la mañana vuelve a su casa en su auto, yao se salvo del escrache",
 
// NODO 6 (FINAL)
"Viralizado vuelve a su casa y duerme tranquilamente, yao se salvo del escrache",
 
// NODO 7
"Yao tiene una increible noche, pero no se da cuenta y toma demasiado alcohol, lo que provoca que accidentalmente atropelle a una pobre jubilada.\nA todo esto Yao se desespera y decide:",
 
// NODO 8 (FINAL)
"Yao no consigue escapar de la ley y como todos esperaban porfin se hace justicia",
 
// NODO 9 (FINAL)
"Nathan asustado queda expuesto por Yao y termina cayendo en cana en su lugar, ante cualquier duda Yao contrata otro enano.\nViralizado vuelve a su casa y duerme tranquilamente, yao se salvo del escrache",
 
// NODO 10
"Le decis a uno de tus amigos que te espere a la salida del colegio mas cercano, donde se hara pasar por un narcotraficante y que al sentirse amenazado debera apuñalarte con un cuchillo falso, mientras que otro amigo estara grabando desde su coche\nAntes Yao cree que deberia:",

// NODO 11
"Despues de grabar, vuelves a generar polemica y odio aunque notas que accidentalmente se filtro la direccion de tu casa actual y ya es demasiado tarde para borrarlo\nCon panico Yao piensa que deberia:",
 
// NODO 12
"Nadie te cree y notas como duki y Fede vigevani estan afuera de tu casa\n¿Bajas cagon?",
 
// NODO 13
"Subes historias y publicaciones de fotos viajas diciendo que en este momento estas en Uruguay, aunque nadie te cree y creen que sigues ahi\nTras pensarlo mucho Yao decide:",
 
// NODO 14 (FINAL)
"Viralizado y cagado, se queda en casa y duerme tranquilamente, yao se salvo de la cagada a palo",
 
// NODO 15 (FINAL)
"Al supuestamente no estar en tu casa, muchos haters, artistas e influencers deciden allanar tu hogar, encontrando junto a ti, un enano sobreexplotado, drogas y 60 cajas de pizza.\nComo todos esperaban porfin Yao cae en cana",
 
// NODO 16
"Nada mas salir y dar un par de pasos encaras a Fede Vigevani junto a Duki totalmente enbroncados, te acercas a hablar pero los dos te empiezan a cagar a palos. Con la situacion totalmente descontrolada, Yao empieza a pensar como escapar de esta situacion\nEl movimiento de Yao sera:",
 
// NODO 17 (FINAL)
"Despues de un buen tiempo, Fede y Duki empiezan a sentir pena por vos, lo que los lleva a dejarte en paz pero sin antes grabarte y escracharte por difundir informacion falsa sobre ellos.\nFuiste viralizado pero nuevamente te ganaste el odio de la gente y te fuiste ESCRACHADO",
 
// NODO 18 (FINAL)
"Hecho pelota salis corriendo y empezas a grabarlos, tratandolos de abusadores violentos y diciendo a la camara que Javi Ayul te obligo a decir esas cosas para generar polemica, nadie te cree y decide dejar de darte mas atencion\nviralizado y aunque nuevamente te ganaste el odio de la gente, Yao se salvo del escrache",

// NODO 19 (escrache falso: el enano)
"Entras a la Deep web para alquilar un enano que le hara compania a Nathan Castro. una vez que llega a tu casa le enseñas tus reglas y sobre lo que planeas grabar con tus amigos\nPero antes Yao piensa que deberia:",
 
// NODO 20 (alimentar al enano)
"Al darle de comer te estara agradecido y te dira que podras contar con el para lo que sea, dandote a entender que esta dispuesto a que te viralices. Con tal disposicion haces que el enano se ponga a grabar contenido generico y morboso junto a Nathan.\nYao nota que el enano no lo hace mas viral, entonces decide:",
 
// NODO 21 (FINAL: descartarlo)
"Al descartarlo, yao se salva del envenenamiento que planeaba el nuevo enano, al tiempo consigue viralizarse por todos los acontecimientos sucedidos.\nViralizado, yao se salvo del envenenamiento",
 
// NODO 22 (otra oportunidad)
"Al darle otra oportunidad, tiempo despues, yao se da cuenta que el enano esta planeando envenenarlo para adueñarse con el canal de youtube y toda su fama.\na todo esto Yao en shock piensa en:",
 
// NODO 23 (FINAL: policía)
"antes que llegue la policia a yao se le ocurre prender el stream para mostrar toda la secuencia. La policia llega rapidamente a su casa, yao les enseña las pruebas y se llevan al enano preso.\nViralizado, aunque tu amigo te siga esperando en el colegio, yao se salvo del envenenamiento",
 
// NODO 24 (FINAL: encarar al enano)
"A todo esto, yao busca desesperadamente al enano por todo la casa, lo encuentra en su habitacion, pero mientras iba a encararlo yao se empieza a desvanecer. El enano lo habia envenenado por la mañana sin que el se de cuenta...\nlamentablemente yao no estuvo lo suficientemente pillo y muere.",
 
// NODO 25 (dos colegios)
"Una vez que estas por llegar al lugar te das cuenta por el Google maps que hay dos colegios, y sin haberte fijado ni avisado antes empiezas a preocuparte. Te estas por quedar sin bateria y no sabes a donde fue tu amigo\n¿A que colegio deberia ir Yao?",
 
// NODO 26 (FINAL: el tranza de verdad)
"llegas al colegio, te dirigis a la salida del lugar y empezas hablar con tu amigo totalmente encapuchado, notando que esta tomandose el papel re enserio y haciendolo muy bien. cuando empiezas a amenazarlo te das cuenta que ese no es tu amigo y es un tranza de verdad recontra caliente, que saca una fakon de 7 pulgadas y te la clava en medio de la panza. te paralizas y ves como el tranza se va corriendo\nPor imprudente y ambicioso, lamentablemente esta vez no fue un experimento social...",
 
// NODO 27 (llegas al lugar, SIN enano)
"Llegas al lugar y ves a tu amigo en escena, asique te acercas y empezas a tomar tu papel de heroe que expone criminales. cuando tu amigo finge enojarse y te apuñala con un cuchillito de plastico, te tiras al piso a pedir ayuda.\nDespues de grabar la escena decidis buscar un lugar donde seguir grabando el terrible video que estas haciendo.\n¿pero a donde deberia ir Yao?",
 
// NODO 28 (llegas al lugar, CON enano: mismo texto que el 27)
"Llegas al lugar y ves a tu amigo en escena, asique te acercas y empezas a tomar tu papel de heroe que expone criminales. cuando tu amigo finge enojarse y te apuñala con un cuchillito de plastico, te tiras al piso a pedir ayuda.\nDespues de grabar la escena decidis buscar un lugar donde seguir grabando el terrible video que estas haciendo.\n¿pero a donde deberia ir Yao?",
 
// NODO 29 (FINAL: hospital, sin enano)
"Despues de grabar todo y subir el video, te volves recontra viral pero de lo berreta que te salio el video y por todas las pruebas falsas que te olvidaste de cubrir, haciendo que absolutamente nadie te crea y auqnue te odien por chanta, ahora todos hablan de vos\nviralizado y aunque nuevamente te ganaste el odio de la gente, Yao se salvo del escrache",
 
// NODO 30 (FINAL: quedarse en el colegio)
"Al quedarte en el colegio uno de los padres de una alumna te reconoce como Yao, el violin que habia besado a su hija menor de edad en un meet an greet. Todos los padres y la gente de la calle te empiezan a reconocer mientras te graban y bardean a mas no poder. No te queda de otra que correr al auto y aceptar el escrache",
 
// NODO 31 (FINAL: hospital, CON enano)
"Despues de grabar todo y subir el video, te volves recontra viral pero de lo berreta que te salio el video y por todas las pruebas falsas que te olvidaste de cubrir, haciendo que absolutamente nadie te crea y aunque te odien por chanta, ahora todos hablan de vos\nAunque si elegiste llevar al enano, este te traicionara mientras disfrutas de tu viralidad, apuñalandote con un fakon de su tamaño para poder quedarse con tu canal y fama\nlamentablemente yao no estuvo lo suficientemente pillo y muere."
];



let textosA = [

//-----------------------------------------------------------------------------------
//primer camino
//-----------------------------------------------------------------------------------

"Subir una historia polemica insultando a todos los influencers y artistas de la escena",
// 0
"Se le ocurre comprar y grabar su nuevo auto lujoso para publicarlo en las redes",
// 1
"Decide ir a la casa de su madre para mostrarselo",
// 2
"Quedarse en casa de su madre",
// 3
"Rechazar la propuesta, e ir a dormir a su casa",
// 4
"",
// 5
"",
// 6
"Darse a la fuga",
// 7
"",
// 8
"",
// 9

//-----------------------------------------------------------------------------------
//segundo camino
//-----------------------------------------------------------------------------------

"alquilar un enano para sobreexplotarlo laboralmente en videos",
// 10
"Decir que era un experimento social y lavarse las manos",
// 11
"no, no salis a ningun lado",
// 12
"Salir e ir a otro lugar",
// 13
"",
// 14
"",
// 15
"Aceptar el error y dejarse golpear",
// 16
"",
// 17
"",
// 18

//-----------------------------------------------------------------------------------
//tercer camino
//-----------------------------------------------------------------------------------

"Alimentar al nuevo enano",                                                                 
// 19
"Descartarlo",                                                                              
// 20
"",                                                                                         
// 21
"Llamar a la policia",                                                                      
// 22
"",                                                                                         
// 23
"",                                                                                         
// 24
"Al que esta por la calle izquierda",                                                       
// 25
"",                                                                                         
// 26
"ir a un hospital con una herida falsa",                                                    
// 27
"ir a un hospital con una herida falsa",                                                    
// 28
"",                                                                                         
// 29
"",                                                                                         
// 30
""                                                                                          
// 31
];


let textosB = [

//-----------------------------------------------------------------------------------
//primer camino
//-----------------------------------------------------------------------------------

"Hacer algo mas grande",
// 0
"Planificar un 'escrache' a un tranza que te apuñalara falsamente",
// 1
"Decide ir a la casa de su grupo de amigos para mostrarselo",
// 2
"Irse de rumba a un boliche",
// 3
"Irse de rumba a un boliche",
// 4
"",
// 5
"",
// 6
"Grabar y echarle la culpa a su amigo Nathan Castro",
// 7
"",
// 8
"",
// 9

//-----------------------------------------------------------------------------------
//segundo camino
//-----------------------------------------------------------------------------------

"Dirigirse al colegio acordado con tu amigo para seguir con el video",
// 10
"Fingir que no estas en tu casa",                                                           
// 11
"si, salir y dar la cara",                                                                  
// 12
"Quedarte en tu casa",                                                                      
// 13
"",                                                                                         
// 14
"",                                                                                         
// 15
"Salir corriendo para grabarlos y victimizarse",                                            
// 16
"",                                                                                         
// 17
"",                                                                                          
// 18

//-----------------------------------------------------------------------------------
//tercer camino
//-----------------------------------------------------------------------------------

"Llevartelo junto a vos al colegio del 'escrache' planeado",                                
// 19
"Darle otra oportunidad",                                                                   
// 20
"",                                                                                         
// 21
"Encarar al enano",                                                                         
// 22
"",                                                                                         
// 23
"",                                                                                         
// 24
"Al que esta doblando por la calle derecha",                                                
// 25
"",                                                                                         
// 26
"quedarse en el colegio para seguir al 'narco'",                                            
// 27
"quedarse en el colegio para seguir al 'narco'",                                            
// 28
"",                                                                                         
// 29
"",                                                                                         
// 30
""                                                                                          
// 31
  
];

let siguienteA = [    11,  2,  3, 5, 6, -1, -1, 8, -1, -1, 19, 12, 14, 16, -1, -1, 17, -1, -1, 20, 21, -1, 23, -1, -1, 27, -1, 29, 31, -1, -1, -1 ];
let siguienteB = [     1, 10,  4, 7, 7, -1, -1, 9, -1, -1, 25, 13, 16, 15, -1, -1, 18, -1, -1, 28, 22, -1, 24, -1, -1, 26, -1, 30, 30, -1, -1, -1 ];


//=================================================================================
//3.creditos(el texto sube solo)
// ================================================================================

let lineasCreditos = [
  "CRÉDITOS",
  "",
  "AVENTURA GRÁFICA",
  "Un dia viral de Yao Cabrera",
  "",
  "PROGRAMACIÓN Y GUIÓN",
  "Eric Parra legajo: 125655/6",
  "Dante Paz legajo: 127009/8",
  "",
  "Comisión 3",
  "Año 2026",
  "",
  "TECNOLOGÍAS",
  "HTML - JavaScript - p5.js",
  "",
  "IMÁGENES",
  "Generadas con IA (Gemini)",
  "",
  "MIL GRACIAS POR JUGAR"
];

let yCreditos = 450;



//==============================================================================
//4.botones (objetos simples)
//==============================================================================



let botonA = { x: 40, y: 385, ancho: 350, alto: 50 };
let botonB = { x: 410, y: 385, ancho: 350, alto: 50 };
 
let botonInicio = { x: 300, y: 280, ancho: 200, alto: 50 };
let botonCreditos = { x: 300, y: 350, ancho: 200, alto: 50 };
let botonReiniciar = { x: 300, y: 385, ancho: 200, alto: 50 };
let botonVolver = { x: 300, y: 395, ancho: 200, alto: 45 };



// =============================================================================
//5.imagenes,fuentes y sonidos
// =============================================================================


let imagenes = [];
let imagenPortada;
let imagenCreditos;
let sonidoClick;
let musicaFondo;
let fuenteTitulo;


// =============================================================================
//6.preload
// =============================================================================
 
 
 
function preload() {
  fuenteTitulo = loadFont("assets/fuentes/pricedow.ttf");
 
  if (USAR_IMAGENES) {
    
    // Una imagen por cada nodo (usamos un for).
    for (let i = 0; i < textos.length; i++) {
      imagenes[i] = loadImage("assets/imagenes/img" + i + ".jpg");
    }
 
    imagenPortada = loadImage("assets/imagenes/portada.jpg");
    imagenCreditos = loadImage("assets/imagenes/creditos.jpg");
  }
 
  if (USAR_SONIDO) {
    sonidoClick = loadSound("assets/audio/click.mp3");
    musicaFondo = loadSound("assets/audio/musicafondo.mp3");
    
  }
}



//==============================================================================
//7.SETUP
//==============================================================================
 
 
 
function setup() {
 
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  
}


// =================================================================
//8.DRAW
// =================================================================
 
function draw() {
 
  background(30);
 
  if (estadoActual == PANTALLA_INICIO) {
 
    dibujarInicio();
 
  } else if (estadoActual == PANTALLA_CREDITOS) {
 
    dibujarCreditos();
 
  } else {
 
    dibujarHistoria();
  }
}



//===================================================================================
//9.pantalla de inicio
//===================================================================================
 
function dibujarInicio() {
 
  if (USAR_IMAGENES) {
    image(imagenPortada, 0, 0, width, height);
  } else {
    background(40, 25, 70);
  }
 
  // Franja para que se lea el título.
  fill(0, 150);
  noStroke();
  rect(0, 150, width, 100);
 
  textFont(fuenteTitulo);
  fill(255);
  textSize(50);
  text("LA VIRALIZACION DE YAO CABRERA", width / 2, 200);
  textFont("Unispace-Bold-48");
  dibujarBoton(botonInicio, "COMENZAR");
  dibujarBoton(botonCreditos, "CRÉDITOS");
}


// ==================================================================================
//10.pantalla de creditos con animacion
// ==================================================================================
 
function dibujarCreditos() {
 
  if (USAR_IMAGENES) {
    image(imagenCreditos, 0, 0, width, height);
  } else {
    background(20, 20, 40);
  }
 
  fill(255);
  noStroke();
  textSize(20);
 
  for (let i = 0; i < lineasCreditos.length; i++) {
    text(lineasCreditos[i], width / 2, yCreditos + i * 32);
  }
 
  //el texto sube un pixel
  yCreditos = yCreditos - 1;
 
  //cuando la última línea sale de la pantalla vuelve a empezar
  if (yCreditos < -lineasCreditos.length * 32) {
    yCreditos = height;
  }
 
  dibujarBoton(botonVolver, "VOLVER");
}



// ====================================================================================
// 11. DIBUJAR HISTORIA
// ====================================================================================
 
function dibujarHistoria() {
 
  let nodo = estadoActual;
 
  //Imagen de fondo.
  dibujarFondo(nodo);
 
  //para no sobrepasar la franja
  let altoFranja = 85;
  if (textos[nodo].length > 250) {
    altoFranja = 135;
  }
  if (textos[nodo].length > 450) {
    altoFranja = 170;
  }

  fill(0, 190);
  noStroke();
  rect(0, 375 - altoFranja, width, altoFranja);

  fill(255);
  textSize(14);
  textAlign(LEFT, TOP);
  text(textos[nodo], 25, 385 - altoFranja, 750, altoFranja - 15);
  textAlign(CENTER, CENTER);
 
  //Botones, dos opciones o reiniciar si es un final
  if (siguienteA[nodo] != -1) {
 
    dibujarBoton(botonA, textosA[nodo]);
    dibujarBoton(botonB, textosB[nodo]);
 
  } else {
 
    dibujarBoton(botonReiniciar, "REINICIAR");
  }
}
 
 
// ================================================================================
// 12. DIBUJAR FONDO
// ===================================================================================
// Recibe el número de nodo y dibuja su imagen
 
function dibujarFondo(nodo) {
 
  if (USAR_IMAGENES) {
 
    image(imagenes[nodo], 0, 0, width, height);
 
  }
}
 
 
// ================================================================================
// 13. DIBUJAR BOTÓN
// ================================================================================
// Parámetros
 
function dibujarBoton(boton, textoBoton) {
 
  if (clicSobre(boton.x, boton.y, boton.ancho, boton.alto)) {
    fill(28, 100, 23);
  } else {
    fill(87, 178, 63);
  }
 
  stroke(255);
  rect(boton.x, boton.y, boton.ancho, boton.alto, 10);
 
  fill(255);
  noStroke();
  textSize(12);
 
  //con 4 parámetros, el texto se acomoda dentro del rectangulo
  text(textoBoton, boton.x + 8, boton.y, boton.ancho - 16, boton.alto);
}
 
 
// ==================================================================================
// 14. MOUSE PRESSED
// ==================================================================================
 
function mousePressed() {
 
// ---------------------------------------------------------------
// INICIO
// ---------------------------------------------------------------
  
  if (estadoActual == PANTALLA_INICIO) {
 
    if (clicSobre(botonInicio.x, botonInicio.y, botonInicio.ancho, botonInicio.alto)) {
 
      reproducirClick();
      estadoActual = 0;
      if (USAR_SONIDO && !musicaFondo.isPlaying()) {
    musicaFondo.setVolume(0.060);   // música más baja, para que se escuche el click
    musicaFondo.loop();
  }
      
 
    } else if (clicSobre(botonCreditos.x, botonCreditos.y, botonCreditos.ancho, botonCreditos.alto)) {
 
      reproducirClick();
      estadoActual = PANTALLA_CREDITOS;
 
      // Los créditos arrancan desde abajo cada vez.
      yCreditos = height;
    }
  }
 
// ---------------------------------------------------------------
// CRÉDITOS
// ---------------------------------------------------------------
  else if (estadoActual == PANTALLA_CREDITOS) {
 
    if (clicSobre(botonVolver.x, botonVolver.y, botonVolver.ancho, botonVolver.alto)) {
 
      reproducirClick();
      estadoActual = PANTALLA_INICIO;
    }
  }
 
 
// ---------------------------------------------------------------
// HISTORIA
// ---------------------------------------------------------------
  
  
  else {
 
    let nodo = estadoActual;
 
    //opcion A
    if (siguienteA[nodo] != -1 &&
        clicSobre(botonA.x, botonA.y, botonA.ancho, botonA.alto)) {
 
      reproducirClick();
      estadoActual = siguienteA[nodo];
    }
 
    //opcion B
    else if (siguienteB[nodo] != -1 &&
             clicSobre(botonB.x, botonB.y, botonB.ancho, botonB.alto)) {
 
      reproducirClick();
      estadoActual = siguienteB[nodo];
    }
 
    // Final: volver al inicio
    else if (siguienteA[nodo] == -1 &&
             clicSobre(botonReiniciar.x, botonReiniciar.y, botonReiniciar.ancho, botonReiniciar.alto)) {
 
      reproducirClick();
      estadoActual = PANTALLA_INICIO;
    }
  }
}
 
 
// ===================================================================================
// 15.sonido del click
// ===================================================================================

 
function reproducirClick() {
 
  if (USAR_SONIDO) {
    sonidoClick.play();
  }
}
 
 
// ==================================================================================
// 16.clic sobre(función con retorno)
// ==================================================================================

 
function clicSobre(x, y, ancho, alto) {
 
  if (mouseX >= x &&
      mouseX <= x + ancho &&
      mouseY >= y &&
      mouseY <= y + alto) {
 
    return true;
 
  } else {
 
    return false;
  }
}
 
