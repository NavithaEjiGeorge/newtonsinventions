
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	roof2 = new Roof(500,400,100,30)
	bob5 = new Bob(520,800)
	bob1= new Bob(100,400);
	bob2 = new Bob(200,400);
	bob3 = new Bob(300,400)
	bob4 = new Bob(400,400)
	rope1 = new Rope(bob1.body,roof.body,{x:70,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:140,y:20});
	rope3 = new Rope(bob3.body,roof.body,{x:210,y:20});
	rope4 = new Rope(bob4.body,roof.body,{x:280,y:20})
	rope5 = new Rope(bob5.body,roof2.body,{x:5,y:20})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  roof2.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display()
  bob5.display()
rope1.display();
rope2.display();
rope3.display()
rope4.display()
rope5.display()
  drawSprites();
  textSize(25)
fill("brown")
  text("NEWTON'S CRADLE",10,100)
  text("SIMPLE PENDULAM",10,500)
  textSize(17)
text("Newton's cradle is a device that demonstrates conservation of momentum and energy using a",600,100)
text("series of swinging spheres. When one sphere at the end is lifted and released, it strikes the",600,150)
text("stationary spheres, transmitting a force through the stationary spheres that pushes the ",600,200)
text("last sphere upward.",600,250)
text("Press 'UP ARROW' key to experience that...... ",600,300)
text("A simple pendulum consists of a mass m hanging from a string of length L and fixed",600,400)
text("at a pivot point P. When displaced to an initial angle and released, the pendulum will",600,450)
text("swing back and forth with periodic motion. ... with being the natural frequency of the",600,500)
text("motion",600,550)
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
	if(keyCode === DOWN_ARROW){
		Matter.body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45})
	}
}
