class polygon{
    constructor(x, y){
        var options = {
            stiffness: 0.05,
            restitution: 1.2
        }
        this.polygon = loadImage("sprites/polygon.png");

        
        polygon = Bodies.circle(50, 200, 20);
        World.add(world,polygon);

        slingShot = new slingShot(this.polygon,{x:100, y:200});
    }
    disply(){
        image(this.polygon, 110, 320);
        

        push();

        stroke("yellow");
        pop();
    }
    
}
