/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(13/03/2018)

*/

var listaPalavrasArray = [
  "Lá", "Oi", "Eu", "Seu", "Tu",
  "Lápis", "Bola", "Rosa", "Coca", "Bolo",
  "Viola", "Batata", "Macaco", "Janela", "Salada",
  "Sabonete", "Macaxeira", "Receita", "Quebrado", "Acordar"
];



var palavrasQuebradas = [
  "Lá", "Oi", "Eu", "Seu", "Tu",
  "Lá - pis", "Bo - la", "Ro - Sa", "Co - ca", "Bo - lo",
  "Vi - o - la", "Ba - ta - ta", "Ma - ca - co", "Ja - ne - la", "Sa - la - da",
  "Sa - bo - ne - te", "Ma - ca - xei - ra", "Re - cei - ta", "Que - bra - do", "A - cor - dar"
];



//
// ██╗      ██████╗  ██████╗ ██╗ ██████╗ █████╗
// ██║     ██╔═══██╗██╔════╝ ██║██╔════╝██╔══██╗
// ██║     ██║   ██║██║  ███╗██║██║     ███████║
// ██║     ██║   ██║██║   ██║██║██║     ██╔══██║
// ███████╗╚██████╔╝╚██████╔╝██║╚██████╗██║  ██║
// ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝
//


var bkgImg;

var btProxImg;

var btProxImgVetor;

var btVoltarImg;

var btVoltarImgVetor;

var btSomImg;

var btSomImgVetor;

var numBlocos = 20;

var blocoAtual = 0;

var blocos = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/back-mapa2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  angleMode(DEGREES)
  frameRate(15);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 12) * 8, (innerHeight / 10) * 2);
  btSomImgVetor = createVector((width / 12) * 7, (innerHeight / 10) * 2);
  btVoltarImgVetor = createVector((width / 12) * 4,(innerHeight / 10) * 2.7);


  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaPalavrasArray[i], palavrasQuebradas[i]);
  }

  blocos[0].tocar();
}

function draw() {

  background(bkgImg);
  blocos[blocoAtual].mostrar();
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);

}

function mousePressed() {


  var centroImgX =  btVoltarImgVetor.x + btVoltarImg.width/4 -80;
  var centroImgY =  btVoltarImgVetor.y + btVoltarImg.height/6 -75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual--;
    if(blocoAtual < 0) {
      blocoAtual = numBlocos-1;
    }
    blocos[blocoAtual].tocar();
  }

  centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  centroImgY =  btProxImgVetor.y + btProxImg.height/6 -24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    if(blocoAtual > numBlocos-1) {
      blocoAtual = 0;
    }
    blocos[blocoAtual].tocar();
  }

  var inicioBtSomX = btSomImgVetor.x;
  var inicioBtSomY = btSomImgVetor.y;

  var fimBtSomX = btSomImgVetor.x + 50;
  var fimBtSomY = btSomImgVetor.y + 50;

  if(mouseX > inicioBtSomX
    && mouseX < fimBtSomX
    && mouseY > inicioBtSomY
    && mouseY < fimBtSomY) {
    blocos[blocoAtual].tocar();
  }
}

class Bloco {

  constructor(palavra, palavrasQuebrada) {
    this.palavra = palavra;
    this.palavrasQuebrada = palavrasQuebrada;
  }

  mostrar() {
    textSize(85);
    fill(255);
    var alturaPalavras = 45;
    var scl = 80;
    var t1 = text(this.palavrasQuebrada, 8 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    textSize(100);
    text(this.palavra, 34 * (innerWidth / scl), 25 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
