const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var ground,myengine,myworld,ball;



function setup() {
  createCanvas(400,400);
  myengine= Engine.create()
 myworld=myengine.world
var go = {
  isStatic:true
}
 ground= Bodies.rectangle(200,380,400,5,go)
 World.add(myworld,ground)

 var bo = {
  restitution:1.2
}
 ball= Bodies.circle(200,200,20,bo)
 World.add(myworld,ball)


}
function draw() {
  background("purple");
  Engine.update(myengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,5)
  ellipse(ball.position.x,ball.position.y,40)
  console.log(ground)
}

