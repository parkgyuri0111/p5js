let r=0
let g =0
let b =0
let m = 0
let M=0
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(r,g,b)
  push()
  translate(100,-100)
  noStroke()
  strokeWeight(1)
  fill('#fdece2')
  ellipse(200,300,200,300)
  fill('#ebebff')
  ellipse(150,280,40,28)
  ellipse(250,280,40,28)
  fill('#3f2e22')
  let lX=constrain(mouseX,145,155)
  let lY=constrain(mouseY,275,285)
  let rX=constrain(mouseX,245,255)
  let rY=constrain(mouseY,275,285)
  circle(lX,lY,20)
  circle(rX,rY,20)
  fill(255)
  circle(rX-5,rY-2,8)
  circle(lX-5,lY-2,8)
  stroke(50);
  noFill()
  arc(150,280,50,28,radians(180),radians(0))
  arc(250,280,50,28,radians(180),radians(0))
  stroke('#a9836a')
  arc(147,277,57,30,radians(210),radians(5))
  arc(253,277,57,30,radians(175),radians(330))
  noStroke()
  fill('#d7b7a2')
  triangle(210,280,210,334,225,325)
  fill('#8d6d58')
  quad(130,247,180,250,180,255,120,255)
  quad(270,247,220,250,220,255,280,255)
  if (mouseIsPressed){
    m=30,M=330}
  else{
    m=50,M=290}
  fill('#e78e7e')
  arc(210,370,70,30,radians(m),radians(M))
  fill(255)
  square(200,355,8)
  strokeWeight(8)
  noFill()
  stroke('#946e42') 
  arc(160,290,100,250,radians(90),radians(270))
  arc(150,370,90,400,radians(90),radians(270))
  arc(140,330,80,300,radians(90),radians(270))
  arc(240,290,100,250,radians(270),radians(450))
  arc(250,370,90,400,radians(270),radians(450))
  arc(260,330,80,300,radians(270),radians(450))
  
  fill('#946e42')
  noStroke()
  arc(190,220,180,150,radians(160),radians(300))
  arc(210,220,180,150,radians(240),radians(380))
  fill('#361c08')
  arc(190,220,180,150,radians(263),radians(300))
  arc(210,220,180,150,radians(240),radians(277))
  fill('#fdece2')
  noStroke()
  arc(110,290,30,50,radians(90),radians(270))
  arc(290,290,30,50,radians(270),radians(450))
  noFill()
  stroke('#d6d6d6')
  strokeWeight(1)
  circle(107,329,40)
  circle(293,329,40)
  stroke('#d7b7a2')
  arc(110,290,15,25,radians(90),radians(270))
  arc(290,290,15,25,radians(270),radians(450))
  stroke('#d7b7a2')
  strokeWeight(2)
  line(132,292,168,292)
  line(268,292,232,292)
  strokeWeight(1)
  arc(150,292,43,20,radians(0),radians(180))
  arc(250,292,43,20,radians(0),radians(180))

}
function keyPressed(){
 if (key === 'q'||key ==='Q'){
  r = random(255);
  g = random(255);
  b = random(255);
}
if (key === 's') {
    saveGif('20251821 박규리', 5);
}
}
