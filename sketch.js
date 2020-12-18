const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create(); 
  world=engine.world;
  roof=new Roof(350,150,300,20);
  bob1=new Bob(300,300,20);
  bob2=new Bob(350,300,20);
  bob3=new Bob(400,300,20);
  bob4=new Bob(450,300,20);
  rope1=new Rope(bob1.body,roof.body,-50);
  rope2=new Rope(bob2.body,roof.body,0);
  rope3=new Rope(bob3.body,roof.body,50);
  rope4=new Rope(bob4.body,roof.body,100);
  

}

function draw() {
  Engine.update(engine);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
 bob3.display();
bob4.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0.05,y:0.05});
}

}