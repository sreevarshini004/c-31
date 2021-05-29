const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball ,poly_img, ground , holder, stand1 , stand2 , slingshot;

function preload(){
poly_img = loadImage("polygon.png");
}

function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;
ground = new Ground();
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);
ball = Bodies.circle(50,200,20);
World.add(world, ball);
//level 1 block 
b1 = new Block(300,275,30,40);
b2 = new Block(330,275,30,40);
b3 = new Block(360,275,30,40);
b4 = new Block(390,275,30,40);
b5 = new Block(420,275,30,40);
b6 = new Block(450,275,30,40);
b7 = new Block(480,275,30,40);

b8 = new Block(330,235,30,40);
b9 = new Block(360,235,30,40);
b10 = new Block(390,235,30,40);
b11 = new Block(420,235,30,40);
b12 = new Block(450,235,30,40);

b13 = new Block(360,195,30,40);
b14 = new Block(390,195,30,40);
b15 = new Block(420,195,30,40);
b16 = new Block(390,155,30,40);
//level 2 block
bk1 = new Block(640,175,30,40);
bk2 = new Block(670,175,30,40);
bk3 = new Block(700,175,30,40);
bk4 = new Block(730,175,30,40);
bk5 = new Block(760,175,30,40);
bk6 = new Block(670,135,30,40);
bk7 = new Block(700,135,30,40);

bk8 = new Block(730,135,30,40);
bk9 = new Block(700,95,30,40);

}

function draw(){
background(56,44,44);
Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);
fill("skyblue");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
fill("pink");
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
fill("green");
b13.display();
b14.display();
b15.display();
fill("grey");
b16.display();

fill("skyblue");
bk1.display();
bk2.display();
bk3.display();
bk4.display();
bk5.display();
fill("pink");
bk6.display();
bk7.display();
bk8.display();
fill("green");
bk9.display();


imageMode(CENTER);
image(poly_img,ball.position.x,ball.position.y,40,40);
}