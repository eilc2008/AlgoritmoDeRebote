function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityX = 2;
  movingRect.velocityY = 2;
  
  fixedRect = createSprite(400, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //fixedRect.velocityX = -2;
  fixedRect.velocityY = -2;
}

function draw() {
  background(255,255,255);

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x -fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.y -fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityX = movingRect.velocityX *(-1);
      movingRect.velocityY = movingRect.velocityY *(-1);

      fixedRect.velocityX = fixedRect.velocityX *(-1);
      fixedRect.velocityY = fixedRect.velocityY *(-1);
  }

  drawSprites();
}