class Rectangle {
    constructor(x, y,) {
      var options = {

    isStatic : 1
      
      }
      this.body = Bodies.rectangle(x, y, 200, 215, options);
      this.width = 200;
      this.height = 215;
      this.image = loadImage("dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };