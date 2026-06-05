function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(252, 218, 215);
  
  noStroke();
  strokeWeight(1);
  fill('#fdece2');
  ellipse(300, 200, 200, 300);
  
  fill('#ebebff');
  ellipse(250, 180, 40, 28);
  ellipse(350, 180, 40, 28);
  
  fill('#3f2e22');
  circle(250, 180, 20);
  circle(350, 180, 20);
  
  fill(255);
  circle(345, 178, 8);
  circle(245, 178, 8);
  
  stroke(50);
  noFill();
  arc(250, 180, 50, 28, radians(180), radians(0));
  arc(350, 180, 50, 28, radians(180), radians(0));
  
  stroke('#a9836a');
  arc(247, 177, 57, 30, radians(210), radians(5));
  arc(353, 177, 57, 30, radians(175), radians(330));
  
  noStroke();
  fill('#d7b7a2');
  triangle(310, 180, 310, 234, 325, 225);
  
  fill('#8d6d58');
  quad(230, 147, 280, 150, 280, 155, 220, 155);
  quad(370, 147, 320, 150, 320, 155, 380, 155);
  
  fill('#e78e7e');
  arc(310, 270, 70, 30, radians(50), radians(290));
  
  fill(255);
  square(300, 255, 8);
  
  strokeWeight(8);
  noFill();
  stroke('#946e42'); 
  arc(260, 190, 100, 250, radians(90), radians(270));
  arc(250, 270, 90, 400, radians(90), radians(270));
  arc(240, 230, 80, 300, radians(90), radians(270));
  arc(340, 190, 100, 250, radians(270), radians(450));
  arc(350, 270, 90, 400, radians(270), radians(450));
  arc(360, 230, 80, 300, radians(270), radians(450));
  
  fill('#946e42');
  noStroke();
  arc(290, 120, 180, 150, radians(160), radians(300));
  arc(310, 120, 180, 150, radians(240), radians(380));
  fill('#361c08');
  arc(290, 120, 180, 150, radians(263), radians(300));
  arc(310, 120, 180, 150, radians(240), radians(277));
  
  fill('#fdece2');
  noStroke();
  arc(210, 190, 30, 50, radians(90), radians(270));
  arc(390, 190, 30, 50, radians(270), radians(450));
  
  noFill();
  stroke('#d6d6d6');
  strokeWeight(1);
  circle(207, 229, 40);
  circle(393, 229, 40);
  
  stroke('#d7b7a2');
  arc(210, 190, 15, 25, radians(90), radians(270));
  arc(390, 190, 15, 25, radians(270), radians(450));
  
  stroke('#d7b7a2');
  strokeWeight(2);
  line(232, 192, 268, 192);
  line(368, 192, 332, 192);
  strokeWeight(1);
  arc(250, 192, 43, 20, radians(0), radians(180));
  arc(350, 192, 43, 20, radians(0), radians(180));
}