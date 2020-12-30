const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1535, 530);
   

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 300, 50);
	

  ground = new Ground(768, 500, 2300, 60);
  
  leftSide = new Dustbin(1205, 370, 37, 200);
  bottom = new Dustbin(1335, 451, 222, 37);
  rightSide = new Dustbin(1465, 370, 37, 200);
  wall = new Dustbin(1535,380,10,750)
  wall2 = new Dustbin(1150,0,2300,10)
  wall3 = new Dustbin(0,380,10,750)
  wall4 = new Dustbin(767.5,530,2300,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

 

  background("yellow")
 
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display(); 

  drawSprites(); 

  text("trash",paper.x,paper.y)

  textSize(20)
  text("► Press right arrow to bounce towards right side | ► Your goal is to put the trash into the dust bin",10,490)
  text("► Press left arrow to bounce towards left side     | ► the blue color ball is the trash                                                                                                       Dustbin ↑",10,520)
  
  

 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:800, y: -500})
  }
  if(keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:-800, y: -500})
  }
}