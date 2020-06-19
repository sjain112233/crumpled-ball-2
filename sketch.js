var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    //Create a Ground
	ground = new Ground(400,380,900,20);

	dustbin=new Dustbin(655,280,105,150);

	ball=new Ball(80,200,50,50);

	Engine.run(engine);
  }


function draw() {
   background("grey");
	ball.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-180})

	}
}




