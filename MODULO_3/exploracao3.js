/*

Sketch para nova forma de implementação
usando os novos padrões ECMASCRIPT6.

Uso de classes para criação de bloco de informação.

//DATE(24/02/2018)

*/




//
// ███████╗  ██╗  ██╗      █████╗   ██████╗    █████╗   ███████╗
// ██╔════╝  ██║  ██║     ██╔══██╗  ██╔══██╗  ██╔══██╗  ██╔════╝
// ███████╗  ██║  ██║     ███████║  ██████╔╝  ███████║  ███████╗
// ╚════██║  ██║  ██║     ██╔══██║  ██╔══██╗  ██╔══██║  ╚════██║
// ███████║  ██║  ███████╗██║  ██║  ██████╔╝  ██║  ██║  ███████║
// ╚══════╝  ╚═╝  ╚══════╝╚═╝  ╚═╝  ╚═════╝   ╚═╝  ╚═╝  ╚══════╝
//

var listaSilabasArray = [
"BA", "BE", "BI", "BO", "BU",
"CA", "CE", "CI", "CO", "CU",
"DA", "DE", "DI", "DO", "DU",
"FA", "FE", "FI", "FO", "FU",
"GA", "GE", "GI", "GO", "GU",
"HA", "HE", "HI", "HO", "HU",
"JA", "JE", "JI", "JO", "JU",
"KA", "KE", "KI", "KU",
"LA", "LE", "LI", "LO", "LU",
"MA", "ME", "MI", "MO", "MU",
"NA", "NE", "NI", "NO", "NU",
"PA", "PE", "PI", "PO", "PU",
"QA", "QE", "QI", "QO",
"RA", "RE", "RI", "RO", "RU",
"SA", "SE", "SI", "SO", "SU",
"TA", "TE", "TI", "TO", "TU",
"VA", "VE", "VI", "VO", "VU",
"XA", "XE", "XI",
"ZA", "ZE", "ZI", "ZO", "ZU"
];





//
// ██████╗  █████╗ ██╗      █████╗ ██╗   ██╗██████╗  █████╗ ███████╗
// ██╔══██╗██╔══██╗██║     ██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝
// ██████╔╝███████║██║     ███████║██║   ██║██████╔╝███████║███████╗
// ██╔═══╝ ██╔══██║██║     ██╔══██║╚██╗ ██╔╝██╔══██╗██╔══██║╚════██║
// ██║     ██║  ██║███████╗██║  ██║ ╚████╔╝ ██║  ██║██║  ██║███████║
// ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
//




var palavras = [
"BALDE", "BALANÇA", "BARCO",
"BELEZA", "BESTA", "BELISCAR",
"BISCOITO", "BIPOLAR", "BISNAGA",
"BOLO", "BOM", "BONITO",
"BURACO", "BUROCRACIA", "BUCHO",
"CASA", "CAIXA", "CALABRESA",
"CÉU", "CERA", "CELULAR",
"CIRURGIA", "CINICO", "CIÊNCIA",
"COLAR", "COBRIR", "COBRAR",
"CURSICA", "CURSO", "CURIÓ",
"DADO", "DAR", "DANADO",
"DEDO", "DESCOLAR", "DESFAZER",
"DISCAR", "DISSE", "DISCO",
"DOR", "DOSE", "DOBRAR",
"DURO", "DURANTE", "DUAL",
"FACA", "FAZER", "FALAR",
"FEDOR", "FELIZ", "FEIRA",
"FICAR", "FILHO", "FINAL",
"FOLHA", "FORÇA", "FORA",
"FURAR", "FUGA", "FURIA",
"GALHO", "GARFO", "GAIATO",
"GELO", "GERAL", "GENIO",
"GIRAR", "GIZ", "GIRASSOL",
"GOIABA", "GOSTAR", "GOL",
"GUSTAVO", "GUIA", "GUERRA",
"HABITO", "HALITO", "HASTE",
"HELIO", "HESITAR", "HEREGE",
"HISTORIA", "HIGIENE", "HISTERICO",
"HOUVE", "HOJE", "HOSPITAL",
"HUGO", "HUMILHAR", "HUMANO",
"JATO", "JARRA", "JANELA",
"JEITO", "JERIMUM", "JEANS",
"JIBOIA", "JILÓ", "JIPE",
"JOIA", "JOVEM", "JOGO",
"JULGAR", "JUSTO", "JULHO",
"KARAOKÊ", "KAISER", "KART",
"KETCHUP", "KELVIN", "KEPPLER",
"KILO", "KILOGRAMA", "KILOMETRO",
"KUNG FU", "KURT", "KURIRIN",
"LAPIS", "LAVRAR", "LAMENTO",
"LEPRA", "LESO", "LEITE",
"LIVRO", "LINDO", "LIBERDADE",
"LOGO", "LOTADO", "LONGE",
"LUGAR", "LUZ", "LUCRO",
"MAR", "MASTIGAR", "MAÇÃ",
"MESA", "MÊS", "MELHOR",
"MITO", "MINISTRO", "MILHO",
"MOSCA", "MORAR", "MORRER",
"MURO", "MURRO", "MUSCULO",
"NARIZ", "NÃO", "NASCER",
"NEVE", "NEGOCIO", "NENHUM",
"NINHO", "NITIDO", "NIVEL",
"NOVELA", "NOVO", "NORMAL",
"NUVEM", "NUNCA", "NUBLADO",
"PATO", "PARIR", "PARTILHA",
"PEITO", "PERA", "PESO",
"PISTOLA", "PIRÊ", "PIEDADE",
"POTE", "PORTA", "POR",
"PURO", "PUDIM", "PUXAR",
"QUANTO", "QUANDO", "QUAL",
"QUENTE", "QUERO", "QUEIJO",
"QUITAR", "QUISER", "QUIETO",
"QUOTA", "QUOTIDIANO", "QUORUM",
"RATO", "RAIZ", "RASGO",
"RETA", "REPRISE", "REFAZER",
"RICO", "RISO", "RIDICULO",
"ROSTO", "ROER", "RODAR",
"RUA", "RURAL", "RUIM",
"SAPATO", "SAL", "SAIR",
"SEMPRE", "SER", "SENTIDO",
"SINO", "SILABA", "SACO",
"SORO", "SOZINHO", "SOCO",
"SUCO", "SURRA", "SUBIR",
"TAPIOCA", "TATU", "TALVEZ",
"TELHA", "TELEFONE", "TECIDOS",
"TIMIDO", "TIPICO", "TIPO",
"TOMATE", "TOALHA", "TOCO",
"TUTELA", "TURBO", "TURCO",
"VAZIO", "VAGO", "VACA",
"VELHO", "VELOZ", "VERDADE",
"VIDA", "VIDEO", "VILA",
"VÓ", "VOCÊ", "VONTADE",
"VULTO", "VULGAR", "VULNERAVEL",
"XALE", "XADREZ", "XARÁ",
"XERIFE", "XERETA", "XEROX",
"XICARA", "XIXI", "XINGAR",
"ZANGADO", "ZAROLHO", "ZANGÃO",
"ZERO", "ZEZINHO", "ZEPPELIN",
"ZIPPER", "ZIGOTO", "ZICA",
"ZORRO", "ZOOLOGICO", "ZOMBAR",
"ZUMBA", "ZUMBI", "ZURETA"
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

var btSomImg;

var btSomImgVetor;

var numBlocos = 91;

var blocoAtual = 0;

var blocos = [];

function preload() {
  bkgImg = loadImage("../RECURSOS/IMAGENS/back-mapa2.png");
  btProxImg = loadImage("../RECURSOS/IMAGENS/seta.png");
  btSomImg = loadImage("../RECURSOS/IMAGENS/02.png");
}

function setup() {

  // console.log(listaSilabasArray.length);

  frameRate(15);
  createCanvas(innerWidth, innerHeight);

  btProxImgVetor = createVector((width / 12) * 8, (innerHeight / 10) * 2);
  btSomImgVetor = createVector((width / 12) * 7, (innerHeight / 10) * 2);

  for(var i = 0; i < numBlocos; i++) {
    blocos[i] = new Bloco(listaSilabasArray[i], palavras[3*i], palavras[3*i+1], palavras[3*i+2]);
  }

  blocos[0].tocar();
}

function draw() {

  background(bkgImg);
  blocos[blocoAtual].mostrar();
  image(btProxImg, btProxImgVetor.x, btProxImgVetor.y, 50, 50);
  image(btSomImg, btSomImgVetor.x, btSomImgVetor.y, 50, 50);

}

function mousePressed() {

  var centroImgX =  btProxImgVetor.x + btProxImg.width/4 -20;
  var centroImgY =  btProxImgVetor.y + btProxImg.height/6 -20;
  var distancia = dist(mouseX, mouseY, centroImgX, centroImgY);

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

  constructor(listaSilabas, palavra1, palavra2, palavra3) {
    this.listaSilabas = listaSilabas;
    this.palavra1 = palavra1;
    this.palavra2 = palavra2;
    this.palavra3 = palavra3;
  }

  mostrar() {
    // textFont(fonte);
    textSize(85);
    fill(255);
    var alturaPalavras = 45;
    var scl = 80;
    var t1 = text(this.palavra1, 8 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    text(this.palavra2, 12 * (innerWidth / scl), (12 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra3, 16 * (innerWidth / scl), (24 + alturaPalavras) * (innerHeight / scl));
    textSize(100);
    // console.log(t1.pos.x);
    text(this.listaSilabas, 34 * (innerWidth / scl), 25 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
