// millis()
// minute()
// second()
// hour()
// day()
// month()
// year()

var fillToMinute = 0;
var waterSecond = 0;
var y = 0;
var speed;
var dino

var water;

function preload(){

  water = loadAnimation("../images/water-1.png","../images/water-4.png")
  dino = loadAnimation("../images/dino-1.png","../images/dino-4.png")

}

function animation() {
  var cycles = 4;
  this.frameDelay = 4;
}

function setup () {

  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent('bgfloor');
  // bg = loadImage("images/canvas.jpg");
  imageMode(CENTER);
  // image(water,windowWidth/2,windowHeight/1.2);
  // console.log(month());
  // console.log(day());
  // console.log(year());
  // console.log(hour());
  // console.log(minute() );
  // console.log(second() );
  // console.log(millis());

}

function draw () {

  // waterSecond = map("test",second(),windowWidth/2,windowHeight/1.2,windowWidth/2,windowHeight/1.2)
  // image(waterSecond)
  // console.log(waterSecond);
  animation(water, windowWidth/2,windowHeight/1.2)
  water.frameDelay = 60;
  animation(dino,windowWidth/2,windowHeight/1.2)
  dino.frameDelay = 3600;


  // fillToSecond = map(second(),0,60,0,height)
  // fill(220,150,20)
  // rect(0,600,width,-fillToSecond)

}