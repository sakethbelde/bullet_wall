var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  wall=createSprite(1100, 200, 60, 200);
bullet=createSprite(50, 200, 30, 30);
  speed=random(55,90)
weight=random(400,1500)
bullet.velocityX = speed;
}



function draw() {
  background(80,80,80);  
  drawSprites();
  if (bullet.x-wall.x < bullet.width/2 + wall.width/2
    && wall.x-bullet.x < wall.width/2 + bullet.width/2
    )
    {
    
     var  deformation;
     deformation=0.5*weight*speed*speed/22500
    

     if (deformation<100 && deformation >0){
bullet.shapeColor = "green"


}
if  (deformation>180){
  bullet.shapeColor = "red"
  
  
  }
  if (deformation<180&& deformation>100){
    bullet.shapeColor = "yellow"
    
    
    }
       
  }

drawSprites();}