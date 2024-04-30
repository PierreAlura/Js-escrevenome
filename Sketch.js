function setup(){
  createCanvas(400,400);
}

function draw(){
  background("white");

  stroke("blue");
  fill("red");

  if(mousepressed){

    rect(mouseX, mouseX, 20, 35)
  }

  console.log(mouseIsPressed);
  rect(mouseX, mouseX, 100, 150)
}

