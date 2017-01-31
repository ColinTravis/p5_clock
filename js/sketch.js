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

  water = loadAnimation("../images/water/water-1.png","../images/water/water-60.png")
  
  dino = loadAnimation("../images/dino/dino_1.png","../images/dino/dino_60.png")

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
  water.frameDelay = 3600;
  water.changeFrame(second());
<<<<<<< HEAD

  animation(dino, windowWidth/2,windowHeight/1.2)
  dino.frameDelay = 6000;

  dino.changeFrame(minute());
=======
  animation(dino,windowWidth/2,windowHeight/1.2)
  dino.frameDelay = 3600;
>>>>>>> 2c1b4689941af4b7ccdf9b1a4b22602335adb0ff

  // dino.changeFrame(second());


  // fillToSecond = map(second(),0,60,0,height)
  // fill(220,150,20)
  // rect(0,600,width,-fillToSecond)

}
