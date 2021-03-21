class Bob{
    constructor(x, y, radius){
        var options = {
            restitution: 1,
            density: 0.8
          }

          //this.image = loadImage("paper.png");
          this.body = Bodies.circle(x, y, radius, options);
          this.radius=radius;
          World.add(world, this.body);

    }

    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("pink");
        ellipseMode(RADIUS);
        circle(0,0, this.radius);
        //imageMode(CENTER);
        //image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}