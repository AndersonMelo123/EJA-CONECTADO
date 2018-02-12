/*

Sketch de teste para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(31/01/2018)

*/

var bkgImg;
var btProxImg;
var btProxImgVetor;

var numBlocos = 35;

var listaSilabasArray = [
"Ba", "Be", "Bi", "Bo", "Bu",
"Ca", "Ce", "Ci", "Co", "Cu",
"Da", "De", "Di", "Do", "Du",
"Fa", "Fe", "Fi", "Fo", "Fu",
"Ga", "Ge", "Gi", "Go", "Gu",
"Ha", "He", "Hi", "Ho", "Hu",
"Ja", "Je", "Ji", "Jo", "Ju",
"ka", "Ke", "Ki", "Ku",
"La", "Le", "Li", "Lo", "Lu"];

var palavras = [
"Balde", "Balança", "Barco",
"Beleza", "Besta", "Beliscar",
"Biscoito", "Bipolar", "Bisnaga",
"Bolo", "Bom", "Bonito",
"Buraco", "Burocracia", "Bucho",
"Casa", "Caixa", "Calabresa",
"Céu", "Cera", "Celular",
"Cirurgia", "Cinico", "Ciência",
"Colar", "Cobrir", "Cobrar",
"Cursica", "Curso", "Curió",
"Dado", "Dar", "Danado",
"Dedo", "Descolar", "Desfazer",
"Discar", "Disse", "Disco",
"Dor", "Dose", "Dobrar",
"Duro", "Durante", "Dual",
"Faca", "Fazer", "Falar",
"Fedor", "Feliz", "Feira",
"Ficar", "Filho", "Final",
"Folha", "Força", "Fora",
"Furar", "Fuga", "Furia",
"Galho", "Garfo", "Gaiato",
"Gelo", "Geral", "Genio",
"Girar", "Giz", "Girassol",
"Goiaba", "Gostar", "Gol",
"Gustavo", "Guia", "Guerra",
"Habito", "Halito", "Haste",
"Helio", "Hesitar", "Herege",
"Historia", "Higiene", "Histerico",
"Houve", "Hoje", "Hospital",
"Hugo", "Humilhar", "Humano",
"Jato", "Jarra", "Janela",
"Jeito", "Jerimum", "Jeans",
"Jiboia", "Jiló", "Jipe",
"Joia", "Jovem", "Jogo",
"Julgar", "Justo", "Julho",
"Karaokê", "Kaiser", "Kart",
"Ketchup", "Kelvin", "Keppler",
"Kilo", "Kilograma", "Kilometro",
"Kung fu", "Kurt", "Kuririn"


];

var blocoAtual = 0;

var blocos = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/back-mapa2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
}

function setup() {

  console.log(listaSilabasArray.length);

  frameRate(15);
  createCanvas(innerWidth, innerHeight);
  btProxImgVetor = createVector((width / 12) * 8, (innerHeight / 10) * 2);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaSilabasArray[i], listaSilabasArray[i], listaSilabasArray[i], listaSilabasArray[i], listaSilabasArray[i]);
  }
}

function draw() {

  background(bkgImg);
  blocos[blocoAtual].mostrar();
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);

}

function mousePressed() {

  var centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  var centroImgY =  btProxImgVetor.y + btProxImg.height/6 -20;
  console.log("mouse:" , mouseX, mouseY);
  console.log("windows" , innerWidth, innerHeight);
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

  if(distancia < 50) {
    blocoAtual++;
    if(blocoAtual > numBlocos-1) {
      blocoAtual = 0;
    }
  }
}


class Bloco {

  constructor(listaSilabas, palavra1, palavra2, palavra3, palavra4) {
    this.listaSilabas = listaSilabas;
    this.palavra1 = palavra1;
    this.palavra2 = palavra2;
    this.palavra3 = palavra3;
    this.palavra4 = palavra4;
  }

  mostrar() {
    // textFont(fonte);
    textSize(85);
    fill(255);
    text(this.listaSilabas, 4*(innerWidth/10), 8*(innerHeight/10));
    fill(0);
  }
}
