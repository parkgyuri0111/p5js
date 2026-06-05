function setup() {
  createCanvas(600, 400);
  colorMode(HSB,360,100,100);
}

function draw() {
  background('#ECE7D1');
   stroke(255);
 strokeWeight(30);
 arc(600,400,400,400,radians(0),radians(270));
  
  stroke('#F8F3E1');
  strokeWeight(8);
  triangle(144,34,144,380,567,34);
  
  stroke('#FAF6EB');
  strokeWeight(3);
  triangle(541,107,541,343,246,343);
  
  noStroke()
  fill('#EDEDCE')
  ellipse(300,157,568,80)
  noFill()
  
  fill('#F0F0DB')
  circle(0,400,279)
  noFill()
  noStroke()
  let ca=color('#dbcea5')
  let cb=color('#9cab84')
  let angle = ((millis()%10000 ) /10000)*TWO_PI ;
  let aa = (sin(angle)+1)/2;
  let dc = lerpColor(ca,cb, aa)
  fill(dc)
  quad(70,50,70,300,530,300,530,50)
  stroke('#FFF9F6');
  strokeWeight(14)
  line(468,0,468,400)
  stroke('#EAE0CF')
  strokeWeight(5)
  line(488,0,488,400)
  stroke('#EDDCC6')
  strokeWeight(3)
  line(512,0,512,400)
  noFill()
  stroke('#9CAB84');
  strokeWeight(16);
  rectMode(CENTER);
  let angle2= ((millis() % 10000) / 10000) * TWO_PI
  rect(370+cos(angle2 )*30,200+sin(angle2)*30,70,255);
  
  stroke('#C5D89D');
  strokeWeight(9);
  rect(295,190,140,90);
  
  stroke('#F8F3E1');
  strokeWeight(3);
  rect(273,230,45,45)
  noStroke()
  fill('#F8F3E1');
  if(mouseIsPressed){
    ellipse(60+random(-5,5),40+random(-5,5),40,40);
  } else {
      ellipse(60,40,40,40);
    }
  
  fill('#EFE1B5');
  ellipse(95,75,67,67);
  stroke(240);
  noFill();
  strokeWeight(10);
  stroke('#AEB784');
  let sm = sin(frameCount*0.05)*30;
  square(120,100,180+sm);
  strokeWeight(5);
  let cc= color('#f8f3e1')
  let cd= color('82,23,67');
  let ag= (frameCount * 0.02) % TWO_PI;
  let ab =(sin(angle)+1)/2;
  let ce = lerpColor(cc,cd,ag);
  stroke(ce)
  square(173,145,130);
  
  stroke('#90AB9a');
  strokeWeight(10);
  square(468,278,173+sm);
  
}

  function keyPressed() {
  if (key === 'v') {
    saveGif('mySketch', 5);
  }
  }