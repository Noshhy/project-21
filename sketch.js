var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

 bullet= createSprite(50, 200, 50, 50);
 bullet.shapeColor="white"
 bullet.velocityX=speed
 wall=createSprite(1500,200,60,200)
 wall.shapeColor="grey"

}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet=lbullet.x+lbullet.width
  wallLeftEdge=lwall,x
  if(bulletRightEdge>=wallLeftEdge)
  {

    return true
  }
  return false
}

if(hasCollided(bullet,wall))
{
var damage=0.5* weight* speed* speed/(thickness* thickness* thickness)
|if(damage>10)

{
wall.shapeColor=color(255,0,0)
{


}


if (damage<10)
{
  wall.shapeColor=color(0,255,0)
}




}







  drawSprites();
}