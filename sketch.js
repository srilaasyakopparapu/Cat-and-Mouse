
var cat, catImage, mouse, mouseImage, background, backgroundImage
var catImg1, catImg2, catImg3, catImg4

function preload(){}
cat = loadImage("tomOne.png, tomTwo.png, tomThree.png, tomFour.png")
background = loadImage("garden.png")

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
if(keyDown("left_arrow")){
    cat.x = cat.x + 3
  }
  
 drawSprites();
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRunning", catImg2)
    cat.changeAnimation("catRunning")
  }
}

