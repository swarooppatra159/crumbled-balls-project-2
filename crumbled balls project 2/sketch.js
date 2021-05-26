const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinImg, dustbin;

function preload(){
  dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1300, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  paper = new Paper(100,520,70);

  ground1 = new Ground(400,550,1900,15);

  dustbin = createSprite(1000,400,200,20);  
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.85;

  dustbin1 = new Dustbin(1000,535,180,15);
  dustbin2 = new Dustbin(880,400,15,285);
  dustbin3 = new Dustbin(1120,400,15,285);
  }
function draw() {
  
  rectMode(CENTER);
  background(255);
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  dustbin.display();

  ground1.display();

  paper.display();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1080,y:-1080});
  }
}