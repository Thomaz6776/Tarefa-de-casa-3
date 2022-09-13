//Criando as variaveis===================================================================
var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;
var RedG, GreenG, BlueG, PinkG, ArrowG;


//Preload da imagens===================================================================
function preload(){
backgroundImage = loadImage("background0.png");
arrowImage = loadImage("arrow0.png");
bowImage = loadImage("bow0.png");
green_balloonImage = loadImage("green_balloon0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
blue_balloonImage = loadImage("blue_balloon0.png");

red_balloonImage = loadImage("red_balloon0.png");
}

//Função setup===================================================================
function setup() {
createCanvas(400, 400);
  
//criando fundo===================================================================
scene = createSprite(0,0,400,400);
scene.addImage(backgroundImage);
scene.scale = 2.5

//Grupos===================================================================

RedG = createGroup();
GreenG = createGroup();
BlueG = createGroup();
PinkG = createGroup();
ArrowG = createGroup();

// criando arco para atirar flecha===================================================================
bow = createSprite(380,220,20,50);
bow.addImage(bowImage); 
bow.scale = 1;

// criando o score===================================================================
score = 0
}

function draw() {
background(0);
// movendo chão===================================================================
scene.velocityX = -3 

if (scene.x < 0){
scene.x = scene.width/2;
}

// Funcionalidade do score===================================================================
if (RedG.collide(ArrowG)){
  RedG.destroeyEach();
}


//movendo flecha===================================================================
bow.y = World.mouseY
  
// soltar flecha quando barra de espaço é pressionada====================================
if (keyDown("space") && World.frameCount % 50 == 0) {
createArrow();
}
  
//criando inimigos continuamente===================================================================
var select_balloon = Math.round(random(1,4));
var select_balloon = random(1,4);
var select_balloon = Math.round(random());
var select_balloon = Math.round(random(1,4,2));
  
if (World.frameCount % 100 == 0) {
if (select_balloon == 1) {
redBalloon();
} else if (select_balloon == 2) {
greenBalloon();
} else if (select_balloon == 3) {
blueBalloon();
} else {
pinkBalloon();
}
}

drawSprites();
text("Pontuação: "+ score, 300,50)
}


// Criando flechas para arco===================================================================
function createArrow() {
var arrow;
arrow = createSprite();
arrow.addImage(arrowImage);
arrow.x = 360;
arrow.y=bow.y;
arrow.velocityX = -4;
arrow.lifetime = 100;
arrow.scale = 0.3;
ArrowG.addSprite(arrow);
}

// criando os balões===================================================================

function redBalloon() {
var red = createSprite(0, 10, Math.round(random(20, 370)) , 10);
red.addImage(red_balloonImage);
red.velocityX = 3;
red.lifetime = 150;
red.scale = 0.1;
RedG.addSprite(red);
}

function blueBalloon() {
var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
blue.addImage(blue_balloonImage);
blue.velocityX = 3;
blue.lifetime = 150;
blue.scale = 0.1;
BlueG.addSprite(blue);
}

function greenBalloon() {
var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
green.addImage(green_balloonImage);
green.velocityX = 3;
green.lifetime = 150;
green.scale = 0.1;
GreenG.addSprite(green);
}

function pinkBalloon() {
var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
pink.addImage(pink_balloonImage);
pink.velocityX = 3;
pink.lifetime = 150;
pink.scale = 1;
PinkG.addSprite(pink);
}