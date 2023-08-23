var personaje;

function setup() {
  createCanvas(400, 400);
  personaje = createSprite(25,20,18,18);
  personaje.shapeColor = "orange";
}

function draw() {
  background(220);

  drawSprites();
}