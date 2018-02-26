
function setup() {                          // **change** void setup() to function setup()
  createCanvas(640, 360);                   // **change** size() to createCanvas()
}

function draw() {                           // **change** void draw() to function draw()
  background(0);                            // background() is the same
  ellipse(mouseX,mouseY,50,50);
}

