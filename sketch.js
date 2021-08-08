const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var bobOpitions={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
	}
	bob1=Bodies.circle(320,380,20,bobOpitions);
	World.add(world,bob1);
    rope1=new rope(bob1,roof,-80,0);
	bob2=Bodies.circle(380,380,20,bobOpitions);
	World.add(world,bob2);
    rope2=new rope(bob2,roof,-80,0);
	bob3=Bodies.circle(440,380,20,bobOpitions);
	World.add(world,bob3);
    rope3=new rope(bob3,roof,-80,0);
	bob4=Bodies.circle(500,380,20,bobOpitions);
	World.add(world,bob4);
    rope4=new rope(bob4,roof,-80,0);
	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob2.position.y,40,40);
  ellipse(bob3.position.x,bob3.position.y,40,40);
  ellipse(bob4.position.x,bob4.position.y,40,40);

  //call display() to show ropes here
rope1.display()

//var pointA=this.rope.bodyA.position;
//var pointB=this.rope.bodyB.position;

//strokeWeight(2);
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
