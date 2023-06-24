//YOLO by 임양규

let video;
let yolo;
let status;
let objects = [];
let smiley;

function setup() {
  // createCanvas(320, 240);
  // createCanvas(400, 500);
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  // video.size(320, 240);
  video.size(windowWidth, windowHeight - 132);

  // YOLO
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
    
  smiley = loadImage("smiley.png")
    
}

function draw() {
  image(video, 0, 123, width, height);
  for (let i = 0; i < objects.length; i++) {
    if(objects === "car");
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
      
    if (objects[i].className === "person") {
        image(smiley, objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
    }
      
  }
}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(err, results) {
    objects = results;
    detect();
  });
}