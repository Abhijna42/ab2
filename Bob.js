class Bob{
constructor(x,y,radius){
this.radius = radius;
var options={
    restitution:1,
    friction:0.3

}
this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
}
}