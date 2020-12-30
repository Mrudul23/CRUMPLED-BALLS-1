const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(2300, 800);
   

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 500, 70);
	

  ground = new Ground(1150, 750, 2300, 90);
  
  leftSide = new Dustbin(1800, 550, 50, 320);
  bottom = new Dustbin(2000, 685, 350, 50);
  rightSide = new Dustbin(2200, 550, 50, 320);
  wall = new Dustbin(2300,380,10,750)
  wall2 = new Dustbin(1150,0,2300,10)
  wall3 = new Dustbin(0,380,10,750)
  wall4 = new Dustbin(1150,800,2300,10)

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

  textSize(30)
  text("► Press right arrow to bounce towards right side | ► Your goal is to put the trash into the dust bin",10,740)
  text("► Press left arrow to bounce towards left side     | ► the blue color ball is the trash                                                                                                       Dustbin ↑",10,780)
  
  

 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:2000, y: -1300})
  }
  if(keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:-2000, y: -1300})
  }
}