var palavras = [
  "BEIJO",
  "CABELO",
  "DADO",
  "MESA",
  "NUVEM",
  "SAPATO",
  "JANELA",
  "VACA",
  "ALICATE",
  "XICARA",
  "REVISTA",
  "ESCADA",
  "TELEFONE",
  "GARFO",
  "FOGO",
  "PORTARIA",
  "VASO",
  "ESCOVA",
  "ROSADO",
  "BATIDA"
];

var silabas = [
  ["Jo", "Be", "I"],
  ["Be", "Lo", "Ca"],
  ["Do", "Da"],
  ["Sa", "Me"],
  ["Vem", "Nu"],
  ["Sa", "To", "Pa"],
  ["La", "Ja", "Ne"],
  ["Ca", "Va"],
  ["Li", "Ca", "A", "Te"],
  ["Xi", "Ra", "Ca"],
  ["Vis", "Re", "Ta"],
  ["Ca", "Es", "Da"],
  ["Te", "Le", "Ne", "Fo"],
  ["Fo", "Gar"],
  ["Go", "Fo"],
  ["Ta", "Por", "Ria"],
  ["So", "Va"],
  ["Co", "Es", "Va"],
  ["Do", "Sa", "Ro"],
  ["Ti", "Ba", "Da"]
];

var formasErradas = [
  [1, 3, 2],
  [3, 1, 4],
  [1, 2],
  [1, 4],
  [3, 2],
  [3, 2, 1],
  [2, 1, 4],
  [3, 1],
  [4, 3, 2, 1],
  [2, 3, 4],
  [1, 2, 3],
  [4, 2, 3],
  [1, 2, 3, 4],
  [2, 3],
  [1, 3],
  [3, 4, 1],
  [1, 2],
  [3, 1, 2],
  [2, 3, 1],
  [4, 2, 3]
];

var formasCertas = [
  [3, 2, 1],
  [4, 3, 1],
  [2, 1],
  [4, 1],
  [2, 3],
  [3, 1, 2],
  [1, 4, 2],
  [1, 3],
  [2, 4, 3, 1],
  [2, 4, 3],
  [2, 1, 3],
  [2, 4, 3],
  [1, 2, 4, 3],
  [3, 2],
  [3, 1],
  [4, 3, 1],
  [2, 1],
  [1, 3, 2],
  [1, 3, 2],
  [2, 4, 3]
];

var sons = [];
var blocoAtual = 0;
var blocos = [];
var numBlocos = 20;

var bkgImg;
var btProxImg;
var btProxImgVetor;
var btSomImg;

var posInput;

var input, button;

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/back-mapa2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btVoltarImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");

}

function setup() {

  angleMode(DEGREES);
  frameRate(15);
  textAlign(CENTER);
  createCanvas(innerWidth, innerHeight);

  posInput = createVector((innerWidth / 12) * 4.5, (innerHeight / 10) * 7);

  input = createInput();
  input.position(posInput.x, posInput.y);

  button = createButton("OK");
  button.position(input.x + 0.5 * input.width - 99, posInput.y + input.height);
  button.mousePressed(darEntrada);
  input.changed(darEntrada);

  btProxImgVetor = createVector((innerWidth / 12) * 10.6, (innerHeight / 10) * 3.3);
  btSomImgVetor = createVector((innerWidth / 12) * 10.6, (innerHeight / 10) * 2);
  btVoltarImgVetor = createVector((innerWidth / 12) * 11, (innerHeight / 10) * 1.5);

  for (var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(silabas[i], formasErradas[i], formasCertas[i], palavras[i]);
  }




  // blocos[0].tocar();

}

function draw() {

  background(bkgImg);
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  push();
  rotate(180);
  image(btVoltarImg, -btVoltarImgVetor.x, -btVoltarImgVetor.y, 50, 50);
  pop();
  image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);
  textAlign(CENTER);
  blocos[blocoAtual].mostrar();

}

function darEntrada() {

  let entrada = input.value();

  if (blocos[blocoAtual].escolher(entrada)) {
    input.value("");
    avancarBloco();
  } else {
    input.value("");
  }

}

function avancarBloco() {
  blocoAtual++;
  if (blocoAtual > numBlocos - 1) {
    blocoAtual = 0;
  }
}

function voltarBloco() {
  blocoAtual--;
  if (blocoAtual < 0) {
    blocoAtual = numBlocos - 1;
  }
}

function mousePressed() {

  var centroImgX = btVoltarImgVetor.x + btVoltarImg.width / 4 - 80;
  var centroImgY = btVoltarImgVetor.y + btVoltarImg.height / 6 - 75;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if (distancia < 50) {
    voltarBloco();
    blocos[blocoAtual].tocar();
  }

  centroImgX = btProxImgVetor.x + btProxImg.width / 4 - 20;
  centroImgY = btProxImgVetor.y + btProxImg.height / 6 - 24;
  distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if (distancia < 50) {
    avancarBloco();
  }

  var inicioBtSomX = btSomImgVetor.x;
  var inicioBtSomY = btSomImgVetor.y;

  var fimBtSomX = btSomImgVetor.x + 50;
  var fimBtSomY = btSomImgVetor.y + 50;

  if (mouseX > inicioBtSomX &&
    mouseX < fimBtSomX &&
    mouseY > inicioBtSomY &&
    mouseY < fimBtSomY) {
    console.log("som");
  }
}

class Bloco {

  constructor(silabas, erradas, certas, palavra) {

    this.silabas = silabas;
    this.nSilabas = this.silabas.length;
    this.erradas = erradas;
    this.certas = certas;
    this.palavra = palavra;

    this.alturaPecas = 35;

    this.p1 = createVector(30 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));
    this.p2 = createVector(35 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));
    this.p3 = createVector(40 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));
    this.p4 = createVector(45 * (innerWidth / 80), this.alturaPecas * (innerHeight / 80));

    this.posSilaba1 = createVector(20 * (innerWidth / 80), 15 * (innerHeight / 80));
    this.posSilaba2 = createVector(30 * (innerWidth / 80), 15 * (innerHeight / 80));
    this.posSilaba3 = createVector(40 * (innerWidth / 80), 15 * (innerHeight / 80));
    this.posSilaba4 = createVector(50 * (innerWidth / 80), 15 * (innerHeight / 80));

    this.posSilaba = [this.posSilaba1, this.posSilaba2, this.posSilaba3, this.posSilaba4];

    this.posPErrada = [this.p1, this.p2, this.p3, this.p4];

  }

  // TODO: organizar indexes (-1, +1) pra 0

  desenharCerto(tipo, pos) {
    let posP = this.posPErrada[pos - 1];

    switch (tipo) {
      case 1:
        push();
        ellipse(posP.x + 40, posP.y + 40, 60, 40);
        pop();
        break;
      case 2:
        push();
        ellipse(posP.x + 40, posP.y + 40, 55, 60);
        pop();
        break;
      case 3:
        push();
        rect(posP.x, posP.y + 20, 60, 40);
        pop();
        break;
      case 4:
        push();
        arc(posP.x + 40, posP.y + 60, 80, 80, 180, 0);
        pop();
        break;
    }

  }

  desenharErrado(silaba, tipo, pos) {

    let posP = this.posSilaba[pos - 1];

    switch (tipo) {
      case 1:
        push();
        ellipse(posP.x + 40, posP.y + 40, 120, 80);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 2:
        push();
        ellipse(posP.x + 40, posP.y + 40, 110, 120);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
      case 3:
        push();
        rect(posP.x, posP.y, 120, 80);
        textSize(40);
        text(silaba, posP.x + 55, posP.y + 50);
        pop();
        break;
      case 4:
        push();
        arc(posP.x + 40, posP.y + 80, 160, 160, 180, 0);
        textSize(40);
        text(silaba, posP.x + 40, posP.y + 50);
        pop();
        break;
    }

  }

  mostrar() {

    for (var i = 1; i < this.nSilabas + 1; i++) {
      this.desenharErrado(this.silabas[i - 1], this.erradas[i - 1], i);
      this.desenharCerto(this.certas[i - 1], i);
    }

  }

  escolher(entrada) {
    if (entrada.toUpperCase() == this.palavra) {
      console.log("certo");
      return true;
    } else {
      console.log("errado");
      return false;
    }
  }

  tocarCerto() {
    console.log("certo");
  }

  tocarErrado() {
    console.log("errado");
  }
}
