
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1;
var rectangle2;
var rectangle3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)
	
	rectangle1 = new Rectangle(1000,280);
	
	paper = new Paper(150,390,70);
	paper.scale = 0.1;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  rectangle1.display();

  ground.display();
  paper.display();
  
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   
	   
   
	   
	 }
   }


