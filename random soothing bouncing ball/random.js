function setup(){
    createCanvas(975,700);
    background(10,6,50);
}
y=0;
x=0;

function draw() {
  // background(0);

  g=random(-5,5);
  g=map(g,-5,5,0,255);
  fill(53,g,100);
  stroke(g);
  if (x==0){
    incrx = 4;
  }
  if (x>=width){
    incrx = -4;
  }
  if (y>=height){
    incry = -4;
  }
  if(y<=0){
    incry = 4;
  }
  x=x+incrx;
  y=y+incry;
  ellipse(x,y,25,25);
}
