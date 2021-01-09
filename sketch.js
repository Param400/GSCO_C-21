var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,1000);

speed=random(55,100);
weight=random(400,1500);

car=createSprite(100,250,50,50)
car.velocityX=speed;
car.shapeColor=color(225);

 wall=createSprite(999, 250, 50, 190);
 wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0); 
   if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22609;
if(deformation>180)
{
  car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}
}
drawSprites();
}