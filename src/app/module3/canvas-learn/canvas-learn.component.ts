import {
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-canvas-learn',
  templateUrl: './canvas-learn.component.html',
  styleUrls: ['./canvas-learn.component.css']
})
export class CanvasLearnComponent {
  constructor(private elem: ElementRef) {}
  contents1 = [
    'canvast 提供了三种方法绘制矩形：',
    'fillRect(x, y, width, height)；绘制一个填充的矩形',
    'strockRect(x, y, width, height)；绘制一个矩形的边框',
    'clearRect(x, y, widh, height)；清除指定的矩形区域，然后这块区域会变的完全透明。',
    '说明：',
    '这3个方法具有相同的参数。', ​
    'x, y：指的是矩形的左上角的坐标。(相对于canvas的坐标原点)', ​
    'width, height：指的是绘制的矩形的宽和高。',
    '绘制路径(path)：',
    'beginPath()；新建一条路径， 路径一旦创建成功， 图形绘制命令被指向到路径上生成路径',
    'moveTo(x, y)；把画笔移动到指定的坐标(x, y)。 相当于设置路径的起始点坐标',
    'closePath()；闭合路径之后， 图形绘制命令又重新指向到上下文中',
    'stroke()；通过线条来绘制图形轮廓',
    'fill()；通过填充路径的内容区域生成实心的图形',
    '有两个方法可以绘制圆弧：',
    'arc(x, y, r, startAngle, endAngle, anticlockwise):',
    '以(x, y) 为圆心， 以r为半径， 从 startAngle弧度开始到endAngle弧度结束。',
    'anticlosewise是布尔值， true表示逆时针， false表示顺时针。(默认是顺时针)',
    '注意：',
    '1：这里的度数都是弧度。',
    '0 弧度是指的x轴正方形',
    'radians = (Math.PI / 180) * degrees //角度转换成弧度',
    '2：arcTo(x1, y1, x2, y2, radius):',
    '根据给定的控制点和半径画一段圆弧， 最后再以直线连接两个控制点。',
    '如果想要给图形上色，有两个重要的属性可以做到。',
    'fillStyle = color；设置图形的填充颜色',
    'strokeStyle = color；设置图形轮廓的颜色',
    '备注：',
    '1. color:可以是表示 "css"颜色值的字符串、 渐变对象或者图案对象。',
    '2. 默认情况下，线条和填充颜色都是黑色。',
    '3. 一旦设置了 "strokeStyle"或者"fillStyle"的值,那么这个新值就会成为新绘制的图形的默认值。',
    '如果你要给每个图形上不同的颜色，你需要重新设置"fillStyle"或"strokeStyle"的值。'

  ]
  draw1() { // 绘制矩形
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.fillRect(10, 10, 90, 50); //绘制矩形,填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 90, 50); //绘制矩形边框
    ctx.clearRect(15, 15, 50, 25); //绘制剪裁矩形
  }

  draw2() { // 绘制三角
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(110, 10); //把画笔移动到指定的坐标
    ctx.lineTo(150, 10); //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。
  }
  draw3() {
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(110, 20);
    ctx.lineTo(150, 20);
    ctx.lineTo(150, 50);
    ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
    ctx.stroke(); //描边。stroke不会自动closePath()
  }
  draw4() { // 绘制闭合三角
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(110, 60);
    ctx.lineTo(150, 60);
    ctx.lineTo(150, 85);
    ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
  }
  draw5() { // 绘制圆弧
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(120, 95, 30, 0, Math.PI / 2, false);
    ctx.stroke();
  }
  draw6() { // 绘制闭合圆弧
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(160, 50, 40, 0, -Math.PI / 2, true);
    ctx.closePath();
    ctx.stroke();
  }
  draw7() { // 绘制闭合圆弧，多参数
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(170, 60, 20, (-Math.PI / 2), (Math.PI / 2), false);
    ctx.fill();
  }
  draw8() { // 绘制闭合圆弧，单参数
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(190, 85, 20, 0, Math.PI, false);
    ctx.fill();
  }
  draw9() { // 使用arcTo
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    //参数x1、y1：控制点1坐标   参数x2、y2：控制点2坐标  参数r：圆弧半径
    // arcTo方法的说明：
    //  绘制的弧形是由两条切线所决定。
    // ​ 第1条切线： 起始点和控制点1决定的直线。
    // ​ 第2条切线： 控制点1 和控制点2决定的直线。
    // ​ 其实绘制的圆弧就是与这两条直线相切的圆弧。
    ctx.moveTo(200, 10); // 起点
    //  ctx.arcTo(x1, y1, x2, y2, r);
    ctx.arcTo(250, 10, 250, 60, 50);
    ctx.stroke();
  }
  draw10() { // 绘制二次贝塞尔曲线
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(270, 110); //起始点
    var cp1x = 280;
    var cp1y = 10; //控制点
    var x = 450;
    var y = 110; // 结束点
    // quadraticCurveTo(cp1x, cp1y, x, y):
    // ​参数cp1x, cp1y：控制点坐标
    // ​参数 x, y：结束点坐标
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(270, 110, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
  }
  draw11() { //绘制三次贝塞尔曲线
    var canvas = this.elem.nativeElement.querySelector('#c1');
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(470, 110); //起始点
    var cp1x = 450,
      cp1y = 10; //控制点1
    var cp2x = 530,
      cp2y = 50; //控制点2
    var x = 590,
      y = 120; // 结束点
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：
    // ​ 参数cp1x, cp1y： 控制点1的坐标
    // ​ 参数cp2x, cp2y： 控制点2的坐标
    // ​ 参数 x, y： 结束点的坐标
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(470, 110, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(cp2x, cp2y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();

  }
  drawAll() {
    this.draw1();
    this.draw2();
    this.draw3();
    this.draw4();
    this.draw5();
    this.draw6();
    this.draw7();
    this.draw8();
    this.draw9();
    this.draw10();
    this.draw11();
  }

  draw12() { // 绘制填充颜色
    var canvas = this.elem.nativeElement.querySelector('#c2');
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
          Math.floor(255 - 42.5 * j) + ',0)';
        ctx.fillRect(j * 50, i * 50, 50, 50);
      }
    }
    // 单独一个
    ctx.fillStyle = 'red';
    ctx.fillRect(310, 0, 50, 50)
  }
  draw13() {
    var canvas = this.elem.nativeElement.querySelector('#c2');
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.strokeStyle = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
        ctx.strokeRect(j * 50 + 370, i * 50, 50, 50);
      }
    }
    // 单独一个
    ctx.strokeStyle = 'red';
    ctx.strokeRect(680, 0, 50, 50);

    function randomInt(from, to) {
      return parseInt(Math.random() * (to - from + 1) + from);
    }
  }
  drawAll2() {
    this.draw12()
    this.draw13()
  }
}
