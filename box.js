class Box{

constructor (x, y, width, height, options) {
   

  // add options such as friction and restitution. Experiment with the values
  var options = { friction:0.5,
  restitution:0.5

  }
  this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this. height=height
World.add(world,this.body)
  // create your box using the function arguments
  // x - x-coordinate
  // y - y-coordinate
  // w - width of the box
  // h - height of the box
}


  // Create a show method which will draw the box every time it is called inside the draw method.
  // remember to push and pop.
 show() {
      var pos=this.body.position
      var angle=this.body.angle
      push();
       translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER);
       strokeWeight(1); 
      stroke(255);
       fill(127);
        rect(0, 0, this.width, this.height);
       pop();
  }
}