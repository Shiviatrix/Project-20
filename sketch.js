var wall,car;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(800,200,60,400/2);
speed = Math.random(55,150);
weight = Math.random(400,1500);
}

function draw() {
  background(0,0,0);  
  car.velocityX = speed;
    wall.shapeColor= color(80,80,80);
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
     
       if(deformation>180){
         car.shapeColor = color(255,0,0);
       } 

       if(deformation<180){
         car.shapeColor = color(230,230,0);
       }
       if(deformation<100){
         car.shapeColor = color(0,255,0)
       }
}

  drawSprites();
}
