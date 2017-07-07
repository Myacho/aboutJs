var canvas = document.getElementById("canvas");
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

canvas.style.background = "cyan";
var ctx = canvas.getContext("2d");

//创建一个用来保存圆的数组
var arr = [];
loop();

function loop() {
	setInterval(function() {
		//清屏
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//创建一个类的对象
		var p = new Arc(canvas.width * 0.5, canvas.height * 0.5);
		//		p.drawSelf();

		//把对象保存到数组里
		arr.push(p);
		
//		//祛除数组里的第一个,数组永远小于150
//		if(arr.length > 150) {
//			arr.shift();
//		}
		for(var i = 0; i < arr.length; i++) {
			//调用方法
			arr[i].drawSelf();
			arr[i].changeRad();
		}
	}, 50);
}

function Arc(x, y) {
	//声明类的属性
	this.x = x;
	this.y = y;
	this.xSpeed = Math.random() * 8 - 4; //-4到4
	this.ySpeed = -4;
	this.gray = 0.05;

	//类里写一个画圆的方法
	this.drawSelf = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, 0);
		ctx.fillStyle = changeColor();
		ctx.fill();
	}

	//改变圆心的方法
	this.changeRad = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.ySpeed += this.gray;
	}
}

//实现随机颜色
//#000000   #ffffff对应数字16777215
function changeColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}