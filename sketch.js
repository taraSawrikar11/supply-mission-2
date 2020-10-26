var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottumBox
var bb1
var bb2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottumBox=createSprite(400,670,200,20);
	bottumBox.shapeColor = ("red");

	bb1=createSprite(310,620,20,100);
	bb1.shapeColor = ("red");

	bb2=createSprite(490,620,20,100);
	bb2.shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 

 


  drawSprites();
 
}


function keyPressed() {
	
	if (keyCode === 32) {
		// Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody, false);
	  }

   }

