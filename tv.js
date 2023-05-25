function back(){
    window.location = "index.html"
}
img=""
function preload(){
img = loadImage('tv.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    fill("red");
    text("T.V",185,160,'red');
    noFill();
    stroke("Red");
    rect(180,150,180,200);
    text("L A M P",373,170)
    rect(370,150,130,270);

}