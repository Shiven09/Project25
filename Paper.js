class Paper{
    constructor(x, y, RADIUS) {
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,RADIUS/2,options);
        this.RADIUS = RADIUS;
        this.image = loadImage("paper.png");
         World.add(world, this.body);
      }
      display(){
        var paperposition = this.body.position;
        push();
        translate(paperposition.x, paperposition.y);
       
        imageMode(CENTER);
        fill("pink")
        image( this.image,0, 0, this.RADIUS,this.RADIUS);
        pop();
      }
}