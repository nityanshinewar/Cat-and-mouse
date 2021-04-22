var background;
var cat;
var mouse;
var bgImg;
var mouseImg1;
var mouseImg2;
var catImg1;
var catImg2;


function preload() {
    //load the images here
    catImg=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png")
    mouseImg1=loaAninmation("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    bgImg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=creatSprite(100,600,20,30);
    mouse.addAnimation("mouseImg1");
    cat=creatSprite(800,600,20,30);
    cat.addAnimation("catImg1");
    background.addImage("bgImg");

}

function draw() {

    background("background");
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.changeAnimation("catRunning",catImg2);
         cat.changeAnimation("catRunning");
         cat.velocityX=0;
         
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
      cat.velocityX=-4;
  }

  if (keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
    cat.velocityX=-4;
}

}
