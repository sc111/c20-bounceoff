var movingrect,fixedrect;
function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(100, 100, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(100, 500, 80, 30);
  movingrect.shapeColor="green";
  movingrect.velocityY = -5;
  fixedrect.velocityY = +5; 
}

function draw() {
  background("black");  
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x <movingrect.width/2+fixedrect.width/2){
    movingrect.velocityX= movingrect.velocityX*(-1);
    fixedrect.velocityX= fixedrect.velocityX*(-1);
  }
  if( movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y <movingrect.height/2+fixedrect.height/2){
      movingrect.velocityY= movingrect.velocityY*(-1);
      fixedrect.velocityY= fixedrect.velocityY*(-1);
    }
  

  drawSprites();
}