interface CanvasRenderingContext2D {
    /**
      * 描绘箭头路径，需要自己stroke或fill
      * @param x0 起点x坐标
      * @param y0 起点y坐标
      * @param x1 终点x坐标
      * @param y1 终点y坐标
      * @param width 箭头宽度，默认为3，且最小值是3
      */
    arrow(x0: number, y0: number, x1: number, y1: number, width?: number): any

    /**
     * 与arrow方法相同，建议使用arrow
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    drawArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any

    /**
     * 画箭头线条，
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    strokeArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any

    /**
     * 填充一个箭头
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    fillArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any
}

CanvasRenderingContext2D.prototype.arrow = CanvasRenderingContext2D.prototype.drawArrow = function (x0, y0, x1, y1, width = 3) {
    if (width < 3) width = 3;//最小宽度
    /**极坐标[以(x0,y0)为原点] 转换 画布坐标 */
    const polarCoordinate2canvasCoordinate = (x0: number, y0: number, r: number, radian: number) => {
        //转与之对应的直角坐标
        let x = r * Math.cos(radian);
        let y = r * Math.sin(radian);
        //直角坐标再转画布坐标
        x += x0;
        y += y0;
        return { x, y };
    }

    //起点坐标与终点坐标的距离
    const distance = Math.sqrt((y1 - y0) * (y1 - y0) + (x1 - x0) * (x1 - x0));
    //起点坐标与终点坐标连线倾斜的弧度，此时的弧度是第一象限的弧度
    let radian = Math.asin(Math.abs(y1 - y0) / distance);//第一象限的弧度
    if (x0 > x1 && y1 > y0) {//第二象限
        radian = Math.PI - radian;
    } else if (x0 > x1 && y0 > y1) {//第三象限
        radian += Math.PI;
    } else if (x1 > x0 && y0 > y1) {//第四象限
        radian = 2 * Math.PI - radian;
    }
    //在起点坐标与终点坐标的线段上，找出距离终点坐标距离为distance - width * 2的点坐标，再以此点依次计算出箭头的各个关键点的坐标
    let { x, y } = polarCoordinate2canvasCoordinate(x0, y0, distance - width * 2, radian);
    let p1 = polarCoordinate2canvasCoordinate(x, y, width, radian - Math.PI * 0.5);
    let p2 = polarCoordinate2canvasCoordinate(x, y, width * 2, radian - Math.PI * 0.5);
    let p3 = polarCoordinate2canvasCoordinate(x, y, width, radian + Math.PI * 0.5);
    let p4 = polarCoordinate2canvasCoordinate(x, y, width * 2, radian + Math.PI * 0.5);

    //找到里箭头的6个关键点，依次连线
    this.moveTo(x0, y0);
    this.lineTo(p1.x, p1.y);
    this.lineTo(p2.x, p2.y);
    this.lineTo(x1, y1);
    this.lineTo(p4.x, p4.y);
    this.lineTo(p3.x, p3.y);
    this.closePath();
};

CanvasRenderingContext2D.prototype.strokeArrow = function (x0, y0, x1, y1, width = 3) {
    this.save();
    this.beginPath();
    this.arrow(x0, y0, x1, y1, width);
    this.stroke();
    this.restore();
}

CanvasRenderingContext2D.prototype.fillArrow = function (x0, y0, x1, y1, width = 3) {
    this.save();
    this.beginPath();
    this.arrow(x0, y0, x1, y1, width);
    this.fill();
    this.restore();
}