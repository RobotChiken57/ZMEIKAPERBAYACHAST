var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 
var width = canvas.width;
var height = canvas.height;

var blockSize = 10;
var widthInBlocks = width / blockSize;
    var heightInBlocks = height / blockSize;

    var score = 0;

    var drawBorder = function () {
      ctx.fillStyle = "Gray";
      ctx.fillRect(0, 0, width, blockSize);
      ctx.fillRect(0, height - blockSize, width, blockSize);
      ctx.fillRect(0, 0, blockSize, height);
      ctx.fillRect(width - blockSize, 0, blockSize, height);
    };

    var drawScore = function () {
      ctx.font = "20px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("Счет: " + score, blockSize, blockSize);
    };

    var gameOver = function () {
      //clearInterval(intervalId);
      ctx.font = "60px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Конец игры", width / 2, height / 2);
    };


    setInterval(function () {
      ctx.clearRect(0, 0, width, height);
      drawBorder();
      drawScore();
      score++;
    }, 100);