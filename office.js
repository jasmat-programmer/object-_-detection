function back(){
    window.location = "index.html"
}
img=""
function preload(){
    img = loadImage('office.jpg')
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    fill("green");
    text("C H A I R",250,250)
    noFill();
    rect(250,230,230,150)
    stroke("green")
}