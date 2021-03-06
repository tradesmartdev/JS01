
var getCanvasContext = function() {
  var c = document.getElementById("myCanvas");
  var ctx;
  try {
    ctx = c.getContext("2d");
  } catch (error) {
    //
  }
  return ctx;
};

var line = function(x1, y1, x2, y2) {
  var ctx = getCanvasContext();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

var rect = function(x1, y1, h, w, color) {
  var ctx = getCanvasContext();
  if(color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, h, w);
  } else {
    ctx.beginPath();
    ctx.rect(x1, y1, h, w);
    ctx.stroke();
  }
};

var circle = function(x, y, r, color) {
  var ctx = getCanvasContext();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if(color) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.stroke();
};

var ellipse = function(x1, y1, xr, yr, color) {
  var ctx = getCanvasContext();
  ctx.beginPath();
  ctx.ellipse(x1, y1, xr, yr, 0, 0, Math.PI * 2, false);
  if(color) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.stroke();
};

var imgMap = {};

var drawImage = function(url, x, y, width) {
  var ctx = getCanvasContext();
  //ctx.globalAlpha = 0.5;
  var img = imgMap[url];
  if(!img) {
    img = new Image();
    imgMap[url] = img;
    img.src = url;
    img.onload = function (e) {
        ctx.drawImage(img, x, y, width, width*img.height/img.width);
    };
  }
  ctx.drawImage(img, x, y, width, width*img.height/img.width);
};

var drawScreen;
var redrawScreen = function() {
  var ctx = getCanvasContext();
  if(ctx && drawScreen) {
    ctx.clearRect(0, 0, 900, 500);
    drawScreen();
  }
  requestAnimationFrame(redrawScreen);
};
redrawScreen();

//var img = new Image();
//img.src = './images/caillou.png';

var animate = function() {
  var ctx = getCanvasContext();
  if(ctx) {
    ctx.clearRect(0, 0, 900, 500);
    var width = 200;
    ctx.drawImage(img, xPos, 120, width, width*img.height/img.width);
    xPos += 4;
    if (xPos < 700) requestAnimationFrame(animate);
  }
};

//img.onload = animate();
var xPos = 50;

var drawText = function(text, x, y, size) {
  var ctx = getCanvasContext();
  if(!x) {
    x = 200;
    y = 50;
    size = 30;
  }
  ctx.fillStyle = "#FF0000";
  ctx.font = size + 'px Georgia';
  ctx.fillText(text, x, y);
};

window.onload = function() {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'scripts/sFirst.js';
  head.appendChild(script);
};
