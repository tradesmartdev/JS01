
//Write your code below....
var x = 70;
var y = 400;
var r1 = 70;
var r2 = 40;
var r3 = 20;
var imgY = 300;
var bgStart = 0;

var cPos = 0;
var moveForward = true;
var textList = ['First', 'Second', 'third', 'Fourth', 'Fifth'];
var imgYLoc = [0, 80, 160, 240, 320];
var imgXLoc = [0, 40, 120, 200, 280];

drawScreen = function() {
  if(bgStart <= -900) {
    bgStart = -5;
  } else {
    bgStart -= 5;
  }
  if(moveForward) {
    x = x+5;
  } else {
    x = x-5;
  }
  if(x>=830) {
    moveForward = false;
  } else if(x < 70) {
    moveForward = true;
  }

  var color = 'green';
  if(x < 400) {
    color = 'red';
  } else {
    color = 'green';
  }

  for(var i=0; i<5; i++) {
    drawText(textList[i], (i+1)*80, (i+1)*80, 30);
  }

  // drawText('My Text 1', 200, 200, 30);
  // drawText('My Text 1', 300, 300, 30);
  // drawText('My Text 1', 400, 400, 30);
  // drawText('My Text 1', 500, 500, 30);

  drawImage('./images/city.png', bgStart, 0, 900);
  drawImage('./images/city.png', bgStart+900, 0, 900);
  //ViewBackground.draw();
  //drawSurface(color);
  //drawSnowman();
  drawImage('./images/caillou.png', 400, imgY, 150);
  //drawImage('./images/kid-cartoon.jpg', 120, 120, 200);
};

var imageJump = function() {
  if(imgY == 300) {
   imgY = 200;
  } else {
   imgY = 300;
  }
  // cPos++;
  // if(cPos==5) {
  //   cPos = 0;
  // }
  setTimeout(imageJump, 300);
};

var drawSnowman = function() {
  circle(x, y, r1, 'blue');
  var y2 = y-r1-r2;
  circle(x, y2, r2);
  var y3 = y2-r2-r3;
  circle(x, y3, r3);
};

var drawSurface = function(color) {
  rect(0, y+r1, 900, 100, color);
};

//imageJump();

var ViewBackground = {
  imageUrl : './images/city.png',
  startPos : 0,
  isMoving : true,
  draw : function() {
    drawImage('./images/city.png', this.startPos, 0, 900);
    drawImage('./images/city.png', this.startPos+900, 0, 900);
    if(this.isMoving) {
      this.startPos = this.startPos - 5;
      if(this.startPos <= -900) {
        this.startPos = 0;
      }
    }
  }
};

// var canvas = document.getElementById("myCanvas");
//
// canvas.addEventListener('click', function(event) {
//   if(ViewBackground.isMoving) {
//     ViewBackground.isMoving = false;
//   } else {
//     ViewBackground.isMoving = true;
//   }
// }, false);
//
// window.addEventListener('keydown', function(event) {
//   if(event.keyCode == 38) {
//     imgY = 200;
//   } else if(event.keyCode == 40) {
//     imgY = 300;
//   }
// }, false);
