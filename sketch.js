var PLAY,END,gameState;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var Obstacle1,Obstacle2,Obstacle3,Obstacle4,Obstacle5,Obstacle6
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  

 Obstacle1= loadImage("obstacle1.png");
  Obstacle2= loadImage("obstacle2.png");
 Obstacle3= loadImage("obstacle3.png");
  Obstacle4= loadImage("obstacle4.png");
  Obstacle5= loadImage("obstacle5.png");
  Obstacle6= loadImage("obstacle6.png");
   
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  PLAY=1;
  END=0;
  gameState=PLAY;
  
  
}

function draw() {
  background(220);
  
 
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
 spawnObstacles(); 
  trex.collide(invisibleGround);
  
  drawSprites();
}


function spawnObstacles(){
if(frameCount%60===0){
var Obstacle=createSprite(600,180,10,10);
Obstacle.velocityX=-6;
var rand=Math.round(random(1,6));
  switch(rand){
    case 1:Obstacle.addImage("1",Obstacle1);
      break;
     case 2:Obstacle.addImage("2",Obstacle2);
      break;
      case 3:Obstacle.addImage("3",Obstacle3);
      break;
     case 4:Obstacle.addImage("4",Obstacle4);
      break;
       case 5:Obstacle.addImage("5",Obstacle5);
      break;
       case 6:Obstacle.addImage("6",Obstacle6);
      break;
  }
}
  
}