function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background('#ECE7D1');
  
  stroke(255);
  strokeWeight(30);
  arc(600, 400, 400, 400, radians(0), radians(270));
  
  stroke('#F8F3E1');
  strokeWeight(8);
  triangle(144, 34, 144, 380, 567, 34);
  
  stroke('#FAF6EB');
  strokeWeight(3);
  triangle(541, 107, 541, 343, 246, 343);
  
  noStroke();
  fill('#EDEDCE');
  ellipse(300, 157, 568, 80);
  
  noFill();
  fill('#F0F0DB');
  circle(0, 400, 279);
  
  noFill();
  noStroke();
  fill('#dbcea5'); 
  quad(70, 50, 70, 300, 530, 300, 530, 50);
  
  stroke('#FFF9F6');
  strokeWeight(14);
  line(468, 0, 468, 400);
  
  stroke('#EAE0CF');
  strokeWeight(5);
  line(488, 0, 488, 400);
  
  stroke('#EDDCC6');
  strokeWeight(3);
  line(512, 0, 512, 400);
  
  noFill();
  stroke('#9CAB84');
  strokeWeight(16);
  rectMode(CENTER);
  rect(370, 200, 70, 255); 
  
  stroke('#C5D89D');
  strokeWeight(9);
  rect(295, 190, 140, 90);
  
  stroke('#F8F3E1');
  strokeWeight(3);
  rect(273, 230, 45, 45);
  
  noStroke();
  fill('#F8F3E1');
  ellipse(60, 40, 40, 40); 
  
  fill('#EFE1B5');
  ellipse(95, 75, 67, 67);
  
  stroke(240);
  noFill();
  strokeWeight(10);
  stroke('#AEB784');
  square(120, 100, 180); 
  
  strokeWeight(5);
  stroke('#f8f3e1'); 
  square(173, 145, 130);
  
  stroke('#90AB9a');
  strokeWeight(10);
  square(468, 278, 173); 
}