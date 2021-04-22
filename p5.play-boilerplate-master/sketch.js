var a,b;



function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 80);
 b = createSprite(400, 200, 80, 50);
a.shapeColor = "blue";
b.shapeColor = "blue";

}

function draw() {
  background("black");  

b.x = World.mouseX;
b.y = World.mouseY;

if(b.x - a.x <a.width/2+b.width/2 && a.x - b.x <a.width/2+b.width/2 && b.y - a.y <a.height/2+b.height/2 && a.y - b.y <a.height/2+b.height/2){

  a.shapeColor = "white";
  b.shapeColor = "red";


}
else{


  a.shapeColor = "blue";
  b.shapeColor = "blue";

}


drawSprites();

}