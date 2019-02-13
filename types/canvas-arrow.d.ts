interface CanvasRenderingContext2D {
    /**
      * 描绘箭头路径，需要自己stroke或fill
      * @param x0 起点x坐标
      * @param y0 起点y坐标
      * @param x1 终点x坐标
      * @param y1 终点y坐标
      * @param width 箭头宽度，默认为3，且最小值是3
      */
    arrow(x0: number, y0: number, x1: number, y1: number, width?: number): any;
    /**
     * 与arrow方法相同，建议使用arrow
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    drawArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any;
    /**
     * 画箭头线条，
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    strokeArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any;
    /**
     * 填充一个箭头
     * @param x0 起点x坐标
     * @param y0 起点y坐标
     * @param x1 终点x坐标
     * @param y1 终点y坐标
     * @param width 箭头宽度，默认为3，且最小值是3
     */
    fillArrow(x0: number, y0: number, x1: number, y1: number, width?: number): any;
}
