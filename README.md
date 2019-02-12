## 效果
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-arrow/master/img/demo2.png"  />

## 使用
* script标签引入dist/canvas-arrow.js 或 dist/canvas-arrow.min.js
* npm：运行命令 npm install -S canvas-arrow，然后import 'canvas-arrow'

## 🌰例子
* 浏览器端
```html
<!DOCTYPE html>
<html>
<head>
    ...
</head>
<body>
    <canvas id="demo"></canvas>
    <script src="../dist/canvas-arrow.min.js"></script>
    <script>
        var canvas = document.querySelector("#demo");
        var ctx = canvas.getContext("2d");

        //1、画起点坐标为(10,10) 终点坐标为(80,100)的黑色箭头
        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = "black";
        ctx.drawArrow(10, 10, 80, 100);
        ctx.fill();
        ctx.restore();


        //2、画起点坐标为(100,100) 终点坐标为(70,20) 宽度为7的红箭头
        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = "red";
        ctx.drawArrow(100, 100, 70, 20, 7);
        ctx.fill();
        ctx.restore();
    </script>
</body>
</html>
```
* 效果  
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-arrow/master/img/demo1.png"  />

* npm 模块开发
```javascript
//重要
import 'canvas-arrow'

let canvas = document.querySelector("#demo");
let ctx = canvas.getContext("2d");

//1、画起点坐标为(10,10) 终点坐标为(80,100)的黑色箭头
ctx.beginPath();
ctx.save();
ctx.fillStyle = "black";
ctx.drawArrow(10, 10, 80, 100);
ctx.fill();
ctx.restore();


//2、画起点坐标为(100,100) 终点坐标为(70,20) 宽度为7的红箭头
ctx.beginPath();
ctx.save();
ctx.fillStyle = "red";
ctx.drawArrow(100, 100, 70, 20, 7);
ctx.fill();
ctx.restore();
```
* 效果  
<img src="https://raw.githubusercontent.com/destiny-wenlun/canvas-arrow/master/img/demo1.png"  />

## 方法参数说明 drawArrow(x0,y0,x1,y1,width)
|参数|说明|默认值|
|-|-|-|
|x0|箭头的起点x坐标|-|
|x0|箭头的起点x坐标|-|
|y0|箭头的起点y坐标|-|
|y1|箭头的终点y坐标|-|
|y1|箭头的终点y坐标|-|
|width|箭头的宽度，最小值为3|3|
