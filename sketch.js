var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	createCanvas(1200, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(600, 10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(600, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(600,585,1200,20);
	groundSprite.shapeColor=color(225)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(600, 100 , 5 , 
								{restitution:1, isStatic:true,friction:1});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(600, 585, 1200, 20 , {isStatic:true ,friction:1 } );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x= ground.position.x
  groundSprite.y=ground.position.y
 
  keyPressed();


  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody , false)
  }
}



