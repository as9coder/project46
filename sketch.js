var bg, bgImg;
var sub1,sub1Img;
var sub2, sub2Img;
var r1,r2;
var bound;
var depth= 10;

function preload(){
  bgImg= loadImage("sea.jpg");
  sub1Img= loadImage("sub1.gif");
  sub2Img= loadImage("sub2.gif");
}

function setup() {
  createCanvas(windowWidth-8, windowHeight-8);

  bg= createSprite(0,0, width*10, height*10);
  bg.addImage(bgImg);
  bg.scale= 4.5;

  bound= createSprite(width/6, height/4, width*3, 20);

  sub1= createSprite(width/12, height/2-100, 30,30);
  sub1.addImage(sub1Img);
  sub1.scale= 0.05;

  r1= createSprite(sub1.x, sub1.y, 10,10);
  r1.debug= true
  r1.setCollider("circle", 0,0,150);
 // r1.visible= false;

  sub2= createSprite(width-100, height/2-100, 30,30);
  sub2.addImage(sub2Img);
  sub2.scale= 0.17;

  r2= createSprite(sub2.x, sub2.y, 1,1)
  r2.debug= true;
  r2.setCollider("circle", 0,0,200);
}

function draw() 
{
  background(30);

  if(keyIsDown(UP_ARROW)&& sub1.y>=bound.y){
    sub1.y-= 1;
    r1.y-= 1;
    depth-=2;
  }

  if(keyIsDown(DOWN_ARROW)){
    sub1.y+=1;
    r1.y+=1;
    depth+=2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    sub1.x+=1;
    r1.x+=1;
  }

   if(keyIsDown(LEFT_ARROW)){
    sub1.x-=1;
    r1.x-=1;
  }

  text("YOUR DEPTH: "+depth+" m", width/10, height/7);

  drawSprites();

  textSize(30);
  fill("red");
  text("YOUR DEPTH: "+depth+" m", width/12, height/7-30);
}




