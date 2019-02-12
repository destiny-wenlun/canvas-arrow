"use strict";
/** 画箭头*/
CanvasRenderingContext2D.prototype.drawArrow = function (x0, y0, x1, y1, width) {
    if (width === void 0) { width = 3; }
    if (width < 3)
        width = 3; //最小宽度
    /**极坐标[以(x0,y0)为原点] 转换 画布坐标 */
    var polarCoordinate2canvasCoordinate = function (x0, y0, r, radian) {
        //转与之对应的直角坐标
        var x = r * Math.cos(radian);
        var y = r * Math.sin(radian);
        //直角坐标再转画布坐标
        x += x0;
        y += y0;
        return { x: x, y: y };
    };
    //起点坐标与终点坐标的距离
    var distance = Math.sqrt((y1 - y0) * (y1 - y0) + (x1 - x0) * (x1 - x0));
    //起点坐标与终点坐标连线倾斜的弧度，此时的弧度是第一象限的弧度
    var radian = Math.asin(Math.abs(y1 - y0) / distance); //第一象限的弧度
    if (x0 > x1 && y1 > y0) { //第二象限
        radian = Math.PI - radian;
    }
    else if (x0 > x1 && y0 > y1) { //第三象限
        radian += Math.PI;
    }
    else if (x1 > x0 && y0 > y1) { //第四象限
        radian = 2 * Math.PI - radian;
    }
    //在起点坐标与终点坐标的线段上，找出距离终点坐标距离为distance - width * 2的点坐标，再以此点依次计算出箭头的各个关键点的坐标
    var _a = polarCoordinate2canvasCoordinate(x0, y0, distance - width * 2, radian), x = _a.x, y = _a.y;
    var p1 = polarCoordinate2canvasCoordinate(x, y, width, radian - Math.PI * 0.5);
    var p2 = polarCoordinate2canvasCoordinate(x, y, width * 2, radian - Math.PI * 0.5);
    var p3 = polarCoordinate2canvasCoordinate(x, y, width, radian + Math.PI * 0.5);
    var p4 = polarCoordinate2canvasCoordinate(x, y, width * 2, radian + Math.PI * 0.5);
    //找到里箭头的6个关键点，依次连线
    this.moveTo(x0, y0);
    this.lineTo(p1.x, p1.y);
    this.lineTo(p2.x, p2.y);
    this.lineTo(x1, y1);
    this.lineTo(p4.x, p4.y);
    this.lineTo(p3.x, p3.y);
    this.closePath();
};
