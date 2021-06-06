class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.body.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var radius=this.body.radius;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,radius,radius);
      pop();
    }
  };
  