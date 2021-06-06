
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var ground;
var ball;
var stone,ironBody;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer=new Hammer(600,600);
	ground = new Ground(400,height,800,20);
  ball=new Ball(700,650,50);
  stone=new Stone(450,650,100,100);
  ironBody=new Stone(300,650,100,100);
  sand1=new Ball(100,620,10);
  sand2=new Ball(140,620,10);
  sand3=new Ball(180,620,10);
  sand4=new Ball(220,620,10);
  sand5=new Ball(500,620,10);
  sand6=new Ball(600,620,10);
	Engine.run(engine);
  
}


function draw() {
  background(255,255,0);
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  ball.display();
  stone.display();
  ironBody.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  drawSprites();
 
}



