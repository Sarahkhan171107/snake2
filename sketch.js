var PLAY = 1;
var END = 0;
var gameState = PLAY;
var germsGroup,appleGroup;
var gameOver ,gameOverImage;

var snake, snakeImage, apple , appleImage ,germs ,germsImage



var score=0;

var gameOver, restart;



function preload(){
  
  snakeImage = loadAnimation("snake.gif");
  
  appleImage = loadImage("apple.gif");
  
  germsImage = loadImage("germs.gif");

  gameOverImage = loadImage ("GO.png")
}

function setup() {
  createCanvas(1800, 600);
  
  snake = createSprite(50,180,20,50);
  
  germsGroup = new Group();

  appleGroup = new Group();
  
 snake .scale= 0.5
  
  
  snake.addAnimation("snake",snakeImage);
  
}

function draw() {
  //trex.debug = true;
  background("lightblue");
  text("Score: "+ score, 500,50);

  
  if (gameState===PLAY){
    
  
    if(keyDown(UP_ARROW)) {
      snake.y = snake.y-5;
    }

    if(keyDown(DOWN_ARROW)) {
      snake.y = snake.y+5;
    }

    if(keyDown(RIGHT_ARROW)) {
      snake.x = snake.x+5;
    }
  
    if(keyDown(LEFT_ARROW)) {
      snake.x = snake.x-5;
    }

    snake .debug= true
    spawnapples();
    spawngerms();

    if(appleGroup.isTouching(snake)){
    score += 1
    appleGroup.destroyEach();
    }
    if(germsGroup.isTouching(snake)){
      gameState = END;
      }
  }
    
    
  
   if (gameState === END) {
    
    germsGroup.destroyEach();
        appleGroup.destroyEach();
        snake.destroy();
        gameOver=createSprite(900,300,20,20);
        gameOver.addImage(gameOverImage)
   }
  drawSprites();
  }

function spawnapples() {
  
  if (frameCount % 200 === 0) {
    var apple = createSprite(600,120,40,10);
    apple.y = Math.round(random(0,600));
     apple.x = Math.round(random(1200,0));
    apple.addImage(appleImage);
    apple.scale = 0.1;
    appleGroup.add(apple)
  }
  
}
  

function spawngerms() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var germs = createSprite(600,120,40,10);
    germs.y = Math.round(random(0,600));
     germs.x = Math.round(random(1200,0));
    germs.addImage(germsImage);
    germs.scale = 0.1;
    germsGroup.add(germs)
  }
  
}
  