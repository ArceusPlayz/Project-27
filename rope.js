class Rope {
    constructor(myBodyA, myBodyB, offSetX, offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
            bodyA: myBodyA,
            bodyB: myBodyB,
            pointB: {x:offSetX, y:offSetY}
        }   
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        stroke("white");
        strokeWeight(2);


        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;

        var anchor2X = pointB.x + this.offSetX;
        var anchor2Y = pointB.y + this.offSetY;


        line(anchor1X, anchor1Y, anchor2X, anchor2Y);
        
    }

}