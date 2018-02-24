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
"ba", "be", "bi", "bo", "bu",
"ca", "ce", "ci", "co", "cu",
"da", "de", "di", "do", "du",
"fa", "fe", "fi", "fo", "fu",
"ga", "ge", "gi", "go", "gu",
"ha", "he", "hi", "ho", "hu",
"ja", "je", "ji", "jo", "ju",
"ka", "ke", "ki", "ku",
"la", "le", "li", "lo", "lu",
"ma", "me", "mi", "mo", "mu",
"na", "ne", "ni", "no", "nu",
"pa", "pe", "pi", "po", "pu",
"qa", "qe", "qi", "qo",
"ra", "re", "ri", "ro", "ru",
"sa", "se", "si", "so", "su",
"ta", "te", "ti", "to", "tu",
"va", "ve", "vi", "vo", "vu",
"xa", "xe", "xi",
"za", "ze", "zi", "zo", "zu"
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
"balde", "balança", "barco",
"beleza", "besta", "beliscar",
"biscoito", "bipolar", "bisnaga",
"bolo", "bom", "bonito",
"buraco", "burocracia", "bucho",
"casa", "caixa", "calabresa",
"céu", "cera", "celular",
"cirurgia", "cinico", "ciência",
"colar", "cobrir", "cobrar",
"cursica", "curso", "curió",
"dado", "dar", "danado",
"dedo", "descolar", "desfazer",
"discar", "disse", "disco",
"dor", "dose", "dobrar",
"duro", "durante", "dual",
"faca", "fazer", "falar",
"fedor", "feliz", "feira",
"ficar", "filho", "final",
"folha", "força", "fora",
"furar", "fuga", "furia",
"galho", "garfo", "gaiato",
"gelo", "geral", "genio",
"girar", "giz", "girassol",
"goiaba", "gostar", "gol",
"gustavo", "guia", "guerra",
"habito", "halito", "haste",
"helio", "hesitar", "herege",
"historia", "higiene", "histerico",
"houve", "hoje", "hospital",
"hugo", "humilhar", "humano",
"jato", "jarra", "janela",
"jeito", "jerimum", "jeans",
"jiboia", "jiló", "jipe",
"joia", "jovem", "jogo",
"julgar", "justo", "julho",
"karaokê", "kaiser", "kart",
"ketchup", "kelvin", "keppler",
"kilo", "kilograma", "kilometro",
"kung fu", "kurt", "kuririn",
"lapis", "lavrar", "lamento",
"lepra", "leso", "leite",
"livro", "lindo", "liberdade",
"logo", "lotado", "longe",
"lugar", "luz", "lucro",
"mar", "mastigar", "maçã",
"mesa", "mês", "melhor",
"mito", "ministro", "milho",
"mosca", "morar", "morrer",
"muro", "murro", "musculo",
"nariz", "não", "nascer",
"neve", "negocio", "nenhum",
"ninho", "nitido", "nivel",
"novela", "novo", "normal",
"nuvem", "nunca", "nublado",
"pato", "parir", "partilha",
"peito", "pera", "peso",
"pistola", "pirê", "piedade",
"pote", "porta", "por",
"puro", "pudim", "puxar",
"quanto", "quando", "qual",
"quente", "quero", "queijo",
"quitar", "quiser", "quieto",
"quota", "quotidiano", "quorum",
"rato", "raiz", "rasgo",
"reta", "reprise", "refazer",
"rico", "riso", "ridiculo",
"rosto", "roer", "rodar",
"rua", "rural", "ruim",
"sapato", "sal", "sair",
"sempre", "ser", "sentido",
"sino", "silaba", "saco",
"soro", "sozinho", "soco",
"suco", "surra", "subir",
"tapioca", "tatu", "talvez",
"telha", "telefone", "tecidos",
"timido", "tipico", "tipo",
"tomate", "toalha", "toco",
"tutela", "turbo", "turco",
"vazio", "vago", "vaca",
"velho", "veloz", "verdade",
"vida", "video", "vila",
"vó", "você", "vontade",
"vulto", "vulgar", "vulneravel",
"xale", "xadrez", "xará",
"xerife", "xereta", "xerox",
"xicara", "xixi", "xingar",
"zangado", "zarolho", "zangão",
"zero", "zezinho", "zeppelin",
"zipper", "zigoto", "zica",
"zorro", "zoologico", "zombar",
"zumba", "zumbi", "zureta"
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

  console.log(listaSilabasArray.length);

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
  console.log("mouse:" , mouseX, mouseY);
  console.log("windows" , innerWidth, innerHeight);
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
    text(this.palavra1, 8 * (innerWidth / scl), alturaPalavras * (innerHeight / scl));
    text(this.palavra2, 12 * (innerWidth / scl), (12 + alturaPalavras) * (innerHeight / scl));
    text(this.palavra3, 16 * (innerWidth / scl), (24 + alturaPalavras) * (innerHeight / scl));
    textSize(100);
    text(this.listaSilabas, 34 * (innerWidth / scl), 25 * (innerHeight / scl));
    fill(0);
  }

  tocar() {
    console.log("tocou");
  }

}
