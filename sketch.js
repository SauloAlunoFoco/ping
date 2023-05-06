var bola;
var ggzera;
var anao;
var limites;
var score1, score2;
function setup() {
  createCanvas(500, 500);
  score1 = 0;
  score2 = 0;

  bola = createSprite(250, 250, 20, 20);
  bola.shapeColor = "blue";

  ggzera = createSprite(12, 250, 20, 100);
  ggzera.shapecolor = "red";

  anao = createSprite(488, 250, 20, 100);
  anao.shapeColor = "blue";

  bola.velocityX = 5;
  bola.velocityY = 6;

  limites = createEdgeSprites();
}

function draw() {
  background(0);

  bola.bounceOff(limites);
  bola.bounceOff(ggzera);
  bola.bounceOff(anao);
  ggzera.collide(limites);
  anao.collide(limites);

  textSize(20);
  text("ggzera " + score1, 150, 10);

  textSize(20);
  text("anao" + score2, 280, 25);

  if (keyDown("w")) {
    ggzera.velocityY = -10;
  }

  if (keyDown("s")) {
    ggzera.velocityY = 10;
  }

  if (keyDown(UP_ARROW)) {
    anao.velocityY = -10;
  }

  if (keyDown(DOWN_ARROW)) {
    anao.velocityY = 10;
  }

  if (bola.x < 15) {
    score2 += 1;
    bola.x = 250;
    bola.y = 250;
  }

  if (bola.x > 485) {
    score1 += 1;
    bola.x = 250;
    bola.y = 250;
  }

  drawSprites();
}
