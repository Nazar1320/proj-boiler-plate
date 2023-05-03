
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ballBody = Bodies.circle(260,100,20,ball_options)
	World.add(world,ballBody)
	ground = Bodies.rectangle(width/2,670,width,20,{isStatic:true})
	World.add(world,ground)
	Engine.run(engine);
	leftSide = Bodies.rectangle(1100,600,20,120,{isStatic:true})
	World.add(world,leftSide)
	rightSide = Bodies.rectangle(1350,600,20,120,{isStatic:true})
	World.add(world,rightSide)
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ballBody.position.x,ballBody.position.y,20,20)
  rect(ground.position.x,ground.position.y,1600,20)
  rect(leftSide.position.x,leftSide.position.y,20,120)
  rect(rightSide.position.x,rightSide.position.y,20,120)
  drawSprites();
 
}

function keyPressed(){
if(keyCode == UP_ARROW){
Matter.Body.applyForce(ballBody,ballBody.position,{x:85,y:-85})
}
}


