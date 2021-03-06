import {
  Component,
  ElementRef
} from "@angular/core";
import digit from './digit.js'
@Component({
  selector: "app-canvas-learn",
  templateUrl: "./canvas-learn.component.html",
  styleUrls: ["./canvas-learn.component.css"]
})
export class CanvasLearnComponent {
  constructor(private elem: ElementRef) { }
  text1 = [
    "标签内width和height属性设置画布的尺寸，不会造成图片的变形，对画布尺寸的改变相当于将画布切去一块或者添加一块；",
    "css的width和height属性，是以变形方式来拉伸和压缩画布，会导致图片变形。所以尽量避免使用css设置canvas尺寸。",
    "canvast 提供了三种方法绘制矩形：",
    "fillRect(x, y, width, height)；绘制一个填充的矩形",
    "strokeRect(x, y, width, height)；绘制一个矩形的边框",
    "clearRect(x, y, widh, height)；清除指定的矩形区域，然后这块区域会变的完全透明。",
    "说明：",
    "这3个方法具有相同的参数。",
    "x, y：指的是矩形的左上角的坐标。(相对于canvas的坐标原点)",
    "width, height：指的是绘制的矩形的宽和高。"
  ];
  fillRect() {
    let can = this.elem.nativeElement.querySelector("#d1");
    let ctx = can.getContext("2d");
    ctx.fillRect(10, 10, 100, 100);
  }
  strokeRect() {
    let can = this.elem.nativeElement.querySelector("#d1");
    let ctx = can.getContext("2d");
    ctx.strokeRect(10, 130, 100, 30);
  }
  clearRect() {
    let can = this.elem.nativeElement.querySelector("#d1");
    let ctx = can.getContext("2d");
    ctx.clearRect(20, 20, 80, 20);
  }
  clearArc() {
    let canvas = this.elem.nativeElement.querySelector("#d1");
    let ctx = canvas.getContext("2d");
    ctx.save();
    ctx.beginPath(); // clip会以上一个beginPath()后面所绘的所有路径进行一个切割
    ctx.arc(60, 75, 15, 0, Math.PI * 2, true);
    ctx.arc(80, 95, 10, 0, Math.PI * 2, true);
    ctx.clip();
    ctx.clearRect(40, 55, 50, 55);
    ctx.restore();
  }
  rects() {
    let canvas = this.elem.nativeElement.querySelector("#d1");
    let ctx = canvas.getContext("2d");
    ctx.rect(120.5, 10.5, 30, 130);
    ctx.closePath();
    ctx.stroke();
    // ctx.fill();
  }
  /**************************************************************/
  text2 = [
    "beginPath()；新建一条路径， 路径一旦创建成功， 图形绘制命令被指向到路径上生成路径",
    "canvas中的绘制方法（如stroke,fill），都会以“上一次beginPath”之后的所有路径为基础进行绘制",
    "moveTo(x, y)；把画笔移动到指定的坐标(x, y)。 相当于设置路径的起始点坐标",
    "lineTo(x，y)；开始画一条路径出来，但不会反映在画布上，如果多个lineTo连续使用，则上一个线的终点变成下一个线的起点",
    "closePath()；闭合路径，当起点和最后终点坐标相同时，这样只是让路径最后一个点和起点重合了而已，路径本身却没有闭合，所以要用closePath()收尾，不加的话就不自动闭合",
    "closePath的意思不是结束路径，而是关闭路径，它会试图从当前路径的终点连一条路径到起点，让整个路径闭合起来。但是，这并不意味着它之后的路径就是新路径了！",
    "stroke()；通过渲染路径，来绘制图形轮廓",
    "fill()；通过填充路径的内容区域生成实心的图形"
  ];
  line() {
    // 绘制直线
    var canvas = this.elem.nativeElement.querySelector("#d2");
    var ctx = canvas.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(10, 15); //把画笔移动到指定的坐标,新开起点
    ctx.lineTo(100, 15); //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。
  }
  line2() {
    var canvas = this.elem.nativeElement.querySelector("#d2");
    var ctx = canvas.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(110, 10); // 新开起点
    ctx.lineTo(150, 50);
    ctx.lineTo(180, 50);
    ctx.moveTo(110, 20); // 再开起点
    ctx.lineTo(140, 70);
    ctx.stroke(); // 统一输出
  }
  sj() {
    // 绘制三角
    var canvas = this.elem.nativeElement.querySelector("#d2");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 30);
    ctx.lineTo(100, 30);
    ctx.lineTo(100, 70);
    ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
    ctx.stroke(); // 空心三角。stroke不会自动closePath()
  }

  tcsj() {
    // 绘制三角
    var canvas = this.elem.nativeElement.querySelector("#d2");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 80);
    ctx.lineTo(100, 80);
    ctx.lineTo(100, 120);
    ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个三角形
    ctx.fill(); // 填充三角。stroke不会自动closePath()
  }
  xx() {
    // 虚线
    var canvas = this.elem.nativeElement.querySelector("#d2");
    var ctx = canvas.getContext("2d");
    // setLineDash 方法接受一个数组，来指定线段与间隙的交替；
    ctx.setLineDash([10, 4]); // [实线长度, 间隙长度]
    // lineDashOffset属性设置起始偏移量.
    ctx.lineDashOffset = 10; // 这个值其实没多大用，有值时，看拐角的变化
    ctx.strokeRect(10, 140, 120, 20); // 虚线矩形
    ctx.beginPath(); // 虚线圆弧
    ctx.arc(120, 130, 50, 0, Math.PI / 2, false);
    ctx.stroke();
  }

  /**************************************************************/
  text3 = [
    "有两个方法可以绘制圆弧：",
    "arc(x, y, r, startAngle, endAngle, anticlockwise):",
    "以(x, y) 为圆心， 以r为半径， 从 startAngle 弧度开始到endAngle弧度结束。",
    "anticlosewise是布尔值， true表示逆时针， false表示顺时针。(默认是顺时针)",
    "注意：",
    "1：这里的度数都是弧度，0 弧度是指的x轴正方向",
    "2：arcTo(x1, y1, x2, y2, radius):",
    "根据给定的控制点和半径画一段圆弧， 最后再以直线连接两个控制点。",
    "使用角度：Math.PI / 180=1°",
    "(Math.PI / 180) * N，N为多少即是多少度，+N为顺时针，-N为逆时针",
    "使用弧度：Math.PI=180°",
    "Math.PI * 2 = 360°"
  ];
  arc() {
    // 绘制圆弧
    var canvas = this.elem.nativeElement.querySelector("#d3");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(10, 10, 50, 0, Math.PI / 2, false);
    ctx.moveTo(60, 10);
    ctx.arc(110, 10, 50, Math.PI, Math.PI * 0.5, true);
    ctx.stroke();
  }
  arc2() {
    // 使用arcTo
    var canvas = this.elem.nativeElement.querySelector("#d3");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    // ctx.arcTo(x1, y1, x2, y2, r);
    //  参数x1、y1：控制点1坐标   参数x2、y2：控制点2坐标  参数r：圆弧半径
    //  arcTo方法的说明：
    //  绘制的弧形是由两条切线所决定。
    // ​ 第1条切线： 起始点和控制点1决定的直线。
    // ​ 第2条切线： 控制点1 和控制点2决定的直线。
    // ​ 其实绘制的圆弧就是与这两条直线相切的圆弧。
    ctx.moveTo(10, 110); // 起点
    ctx.arcTo(110, 110, 110, 210, 100);
    ctx.stroke();
  }
  arcFill() {
    // 绘制闭合圆弧
    var canvas = this.elem.nativeElement.querySelector("#d3");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(90, 60, 50, 0, -Math.PI / 2, true);
    ctx.closePath();
    ctx.stroke();
  }
  arcFill2() {
    // 绘制填充圆弧
    var canvas = this.elem.nativeElement.querySelector("#d3");
    var ctx = canvas.getContext("2d");
    // arc(x,y,r,sAngle,eAngle,counterclockwise);
    // x,y：圆的中心的坐标。
    // r：圆的半径。
    // sAngle：起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
    // eAngle：结束角，以弧度计。
    // counterclockwise：可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
    ctx.beginPath();
    ctx.arc(60, 70, 20, -Math.PI / 2, Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(110, 70, 20, 0, (-Math.PI / 2) * 3, true);
    ctx.closePath();
    ctx.fill();
  }
  /**************************************************************/
  text5 = [
    "font = value；当前我们用来绘制文本的样式。这个字符串使用和 CSS font属性相同的语法. 默认的字体是 10px sans-serif。",
    "textAlign = value；文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。",
    "textBaseline = value；基线对齐选项，可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。",
    "direction = value；文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。",
    "连续写多个quadraticCurveTo的话，会将上一条线的终点作为下一条线的起点"
  ];
  er() {
    // 绘制二次贝塞尔曲线
    var canvas = this.elem.nativeElement.querySelector("#d4");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 70); //起始点
    // quadraticCurveTo(cp1x, cp1y, x, y):
    // ​参数cp1x, cp1y：控制点坐标
    // ​参数 x, y：结束点坐标
    // 连续写多个quadraticCurveTo的话，会将上一条线的终点作为下一条线的起点
    ctx.quadraticCurveTo(40, 10, 100, 50);
    ctx.quadraticCurveTo(50, 35, 40, 80);
    ctx.quadraticCurveTo(50, 20, 10, 70);

    ctx.fillStyle = "#614248";
    ctx.fill();
    ctx.stroke();
  }
  san() {
    //绘制三次贝塞尔曲线
    var canvas = this.elem.nativeElement.querySelector("#d4");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 220); //起始点
    var cp1x = 40,
      cp1y = 120; //控制点1
    var cp2x = 100,
      cp2y = 150; //控制点2
    var x = 210,
      y = 220; // 结束点
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：
    // ​ 参数cp1x, cp1y： 控制点1的坐标
    // ​ 参数cp2x, cp2y： 控制点2的坐标
    // ​ 参数 x, y： 结束点的坐标
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(10, 220, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(cp2x, cp2y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
  }
  wenzi() {
    // 文字
    var canvas = this.elem.nativeElement.querySelector("#d4");
    var ctx = canvas.getContext("2d");
    // fillText(text, x, y [, maxWidth])；在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的
    // strokeText(text, x, y [, maxWidth])；在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的
    ctx.font = "bold 40px sans-serif"; // 字体大小和字体名称(40px sans-serif)是缺一不可的
    ctx.shadowOffsetX = 5; // 向右为正，设置或返回阴影距形状的水平距离
    ctx.shadowOffsetY = 5; // 向下为正，设置或返回阴影距形状的垂直距离
    ctx.shadowBlur = 5; // 模糊程度
    ctx.shadowColor = "red";
    ctx.textAlign = "center"; // 设置多次绘画的文字的对齐方式，从而也改变了定位参考点的位置
    ctx.fillText("带阴影文字", 120, 280);
    ctx.strokeText("带阴影文字", 120, 335);
  }
  /**************************************************************/
  text4 = [
    "如果想要给图形上色，有两个重要的属性可以做到。",
    "fillStyle = color；设置图形的填充颜色",
    "strokeStyle = color；设置图形轮廓的颜色",
    "备注：",
    '1. color:可以是表示 "css"颜色值的字符串、 渐变对象或者图案对象。',
    "2. 默认情况下，线条和填充颜色都是黑色。",
    '3. 一旦设置了 "strokeStyle"或者"fillStyle"的值,那么这个新值就会成为新绘制的图形的默认值。',
    '如果你要给每个图形上不同的颜色，你需要重新设置"fillStyle"或"strokeStyle"的值。'
  ];
  tc() {
    // 绘制填充颜色
    var canvas = this.elem.nativeElement.querySelector("#tc");
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.fillStyle = // 每次绘画都要重新设置填充色，才可实现每个方块有不同的颜色
          "rgb(" +
          Math.floor(255 - 42.5 * i) +
          "," +
          Math.floor(255 - 42.5 * j) +
          ",0)";
        ctx.fillRect(j * 20, i * 20, 20, 20);
      }
    }
    // 单独一个
    ctx.fillStyle = "red";
    ctx.fillRect(125, 0, 20, 20);
  }
  mb() {
    // 绘制描边
    var canvas = this.elem.nativeElement.querySelector("#mb");
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.strokeStyle = `rgb(${randomInt(0, 255)},${randomInt(
          0,
          255
        )},${randomInt(0, 255)})`;
        ctx.strokeRect(j * 20, i * 20, 20, 20);
      }
    }
    // 单独一个
    ctx.strokeStyle = "red";
    ctx.strokeRect(125, 0, 20, 20);

    function randomInt(from, to) {
      return parseInt(Math.random() * (to - from + 1) + from);
    }
  }

  xk() {
    // 线宽设置
    var canvas = this.elem.nativeElement.querySelector("#xk");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 40);
    ctx.lineTo(100, 40);
    // lineWidth = value；线宽。
    // 只能是正值。默认是1.0。
    // 起始点和终点的连线为中心，上下各占线宽的一半
    ctx.lineWidth = 30;
    ctx.stroke();
  }
  tmd() {
    // 透明度
    // globalAlpha = transparencyValue
    // 这个属性影响到 canvas 里所有"后续的"图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
    // globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为使用rgba()设置透明度更加好一些。
    var canvas = this.elem.nativeElement.querySelector("#tmd");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 40);
    ctx.lineTo(80, 40);
    // lineWidth = value；线宽。
    // 只能是正值。默认是1.0。
    // 起始点和终点的连线为中心，上下各占线宽的一半
    ctx.lineWidth = 20;
    ctx.globalAlpha = 0.2;
    ctx.stroke();
  }
  xtmd() {
    // 线条末端样式。
    var canvas = this.elem.nativeElement.querySelector("#xtmd");
    var ctx = canvas.getContext("2d");
    var lineCaps = ["butt", "round", "square"];
    for (var i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(25 + 30 * i, 20);
      ctx.lineTo(25 + 30 * i, 80);
      ctx.lineWidth = 20;
      // lineCap = type；
      // 共有3个值：
      // butt：线段末端以方形结束
      // round：线段末端以圆形结束
      // square：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。
      ctx.lineCap = lineCaps[i];
      ctx.stroke();
    }
    // 红色参考线
    ctx.beginPath();
    ctx.moveTo(10, 20);
    ctx.lineTo(110, 20);
    ctx.moveTo(10, 80);
    ctx.lineTo(110, 80);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  xj() {
    // 同一个path内，设定线条与线条间接合处的样式。
    var canvas = this.elem.nativeElement.querySelector("#d5");
    var ctx16 = canvas.getContext("2d");

    // lineJoin = type；
    // 共有3个值round, bevel 和 miter：
    // round：通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
    // bevel：在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
    // miter(默认)：通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。
    var lineJoin = ["round", "bevel", "miter"];
    ctx16.lineWidth = 15;
    for (var i = 0; i < lineJoin.length; i++) {
      ctx16.lineJoin = lineJoin[i];
      ctx16.beginPath();
      ctx16.moveTo(20, 15 + i * 45);
      ctx16.lineTo(40, 55 + i * 45);
      ctx16.lineTo(60, 15 + i * 45);
      ctx16.lineTo(80, 55 + i * 45);
      ctx16.lineTo(100, 15 + i * 45);
      ctx16.stroke();
    }
    ctx16.beginPath();
    ctx16.moveTo(20, 180.5); // 由于canvas的线是沿着中线向两边扩展的，所以为了避免画出额线显得模糊
    ctx16.lineTo(130.5, 180.5); // 要对画线的路径取中，从而让线可以正好占满一像素
    ctx16.lineTo(130.5, 100);
    ctx16.lineJoin = "round";
    ctx16.stroke();
  }
  rectJB() {
    var canvas = this.elem.nativeElement.querySelector("#rectJB");
    var ctx = canvas.getContext("2d");
    // 创建线性渐变对象
    // context.createLinearGradient(x0,y0,x1,y1);
    // x0	渐变开始点的 x 坐标,可以为负数
    // y0	渐变开始点的 y 坐标,可以为负数
    // x1	渐变结束点的 x 坐标,可以为负数
    // y1	渐变结束点的 y 坐标,可以为负数
    // 如果用坐标画出的线是有角度的，则填充也会有角度
    var lg = ctx.createLinearGradient(10, 10, 150, 10);
    // addColorStop不是加在画笔上，而是加在前面的那个保存渐变的变量上（lg）
    // 此段代码就是规定图像的30%-80%之间是渐变区域，永远是介于0-1之间的数字,可以是两位小数，表示百分比
    lg.addColorStop(0.3, "red");
    lg.addColorStop(0.5, "blue");
    lg.addColorStop(0.8, "green");

    //带线性渐变矩形
    ctx.fillStyle = lg;
    ctx.fillRect(10, 10, 150, 30);
  }
  arcJB() {
    var canvas = this.elem.nativeElement.querySelector("#rectJB");
    var ctx = canvas.getContext("2d");
    //创建线性渐变对象
    // context.createRadialGradient(x0,y0,r0,x1,y1,r1);
    // x0	渐变的开始圆的 x 坐标
    // y0	渐变的开始圆的 y 坐标
    // r0	开始圆的半径
    // x1	渐变的结束圆的 x 坐标
    // y1	渐变的结束圆的 y 坐标
    // r1	结束圆的半径
    // 圆心不同，会产生不一样的效果
    var lg = ctx.createRadialGradient(70, 100, 10, 60, 90, 55);
    // 渐变是发生在从内圆到外圆之间的区间内
    // 起点之前的颜色就是起点色，终点之后的颜色一直是终点色。
    // canvas中径向渐变的起点色，是从起点圆的范围之外绘制的，而起点圆的整个颜色都是起点色。
    lg.addColorStop(0.2, "red");
    lg.addColorStop(0.4, "blue");
    lg.addColorStop(0.8, "yellow");
    //带线性渐变圆
    ctx.beginPath();
    ctx.arc(70, 100, 65, 0, Math.PI * 2);
    ctx.fillStyle = lg;
    ctx.fill();
    ctx.closePath();
  }
  yuanJB() {
    var canvas = this.elem.nativeElement.querySelector("#rectJB");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 30;
    var lg = ctx.createLinearGradient(0, 175, 150, 175);
    lg.addColorStop(0.1, "red");
    lg.addColorStop(0.3, "yellow");
    lg.addColorStop(0.5, "blue");
    lg.addColorStop(0.7, "pink");
    lg.addColorStop(0.9, "black");
    ctx.strokeStyle = lg;
    ctx.arc(75, 240, 60, Math.PI, Math.PI * 1.9);
    ctx.stroke()

  }
  /**************************************************************/

  createImg() {
    // 由零开始创建图片
    var canvas = this.elem.nativeElement.querySelector("#d6");
    var ctx = canvas.getContext("2d");
    // ​考虑到图片是从网络加载，如果 drawImage 的时候图片还没有完全加载完成，则什么都不做，个别浏览器会抛异常。
    // 所以我们应该保证在 img 绘制完成之后再 drawImage。

    var img = new Image(); // 创建img元素
    img.src = "assets/over1.png"; // 设置图片源地址
    img.onload = () => ctx.drawImage(img, 0, 0);
    // 绘制img
    // ctx.drawImage(img, x, y);
    // 参数1：要绘制的img
    // 参数x，y：绘制的img在canvas中的坐标
    // 也可以用来将video进行复制
  }
  fromImg() {
    // 绘制 img 标签元素中的图片
    var canvas = this.elem.nativeElement.querySelector("#d7");
    var ctx = canvas.getContext("2d");
    var img = this.elem.nativeElement.querySelector("#isImg");
    ctx.drawImage(img, 0, 10);
  }

  scaleImg() {
    // 缩放图片
    var canvas = this.elem.nativeElement.querySelector("#d8");
    var ctx = canvas.getContext("2d");
    var img = this.elem.nativeElement.querySelector("#isImg2");
    // ​ drawImage(image, x, y, width, height)
    // ​ 这个方法多了2个参数：width 和 height，这两个参数用来控制 当像canvas画入时应该缩放的大小。
    ctx.drawImage(img, 0, 0, 80, 80);
    ctx.drawImage(img, 0, 90, 140, 140);
  }
  qpImg() {
    // 切片，复制部分img
    var canvas = this.elem.nativeElement.querySelector("#d9");
    var ctx = canvas.getContext("2d");
    var img = this.elem.nativeElement.querySelector("#isImg3");
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    // 参数：
    // image：一个图像或者另一个 canvas 的引用
    // sx, sy, sWidth, sHeight；定义图像源的切片位置和大小
    // dx, dy, dWidth, dHeight；定义切片的目标显示位置和大小
    ctx.drawImage(img, 20, 20, 80, 80, 0, 10, 50, 50);
    ctx.drawImage(img, 20, 20, 80, 80, 0, 70, 140, 140);
  }
  fzImg() {
    // 复制当前canvas的内容
    var canvas = this.elem.nativeElement.querySelector("#fz");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(10, 10, 80, 60);
    var imgData = ctx.getImageData(0, 0, 50, 50);
    // getImageData(x,y,width,height);
    // x,y，开始复制的左上角位置的坐标，以当前画布原点为(0,0)
    // width,height，将要复制的矩形区域的宽度

    ctx.putImageData(imgData, 10, 75, 0, 0, 50, 50);
    // putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
    // x,y，相对被复制的 ImageData 对象左上角的坐标，不是画布的坐标，来决定复制的内容的位置
    // dirtyX,dirtyY，显示复制的内容时，将之前复制的内容的尺寸(50, 50)作为画布，然后用dirtyX,dirtyY决定要显示
    // 的内容的左上角坐标，如果dirtyX,dirtyY的值越接近复制的内容的尺寸(50, 50)，则显示的内容越少
    // dirtyWidth,dirtyHeight，在画布上绘制图像所使用的宽度。也可以决定显示的内容的多少

    var img = new Image(); // 创建img元素
    img.src = "assets/over1.png"; // 设置图片源地址
    img.onload = () => {
      ctx.drawImage(img, 95, 10);
      var imgData2 = ctx.getImageData(120, 30, 50, 50);
      ctx.putImageData(imgData2, 100, 140, 0, 0, 50, 50);
    };
  }
  /**************************************************************/
  text6 = [
    "Saving and restoring state是绘制复杂图形时必不可少的操作。",
    "Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。",
    "Canvas状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。",
    "save()和restore() 是用来保存和恢复 canvas 状态的，都没有参数。",
    "可以调用任意多次 save() 方法。(类似数组的`push()`)",
    "每一次调用 restore() 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。(类似数组的pop())",
    "translate(x, y)：",
    "用来移动 canvas 的原点到指定的位置",
    "translate方法接受两个参数。x 是左右偏移量，y 是上下偏移量。如果某点被确定为原点，不管原本坐标是多少，当前坐标都是（0,0）",
    "在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多。",
    "又如果你是在一个循环中做位移但没有保存和恢复canvas 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 canvas 范围以外了。",
    "​注意：translate移动的是canvas的坐标原点。(坐标变换)",
    "scale(x, y)：我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。",
    "​scale(x, y) 方法接受两个参数。x，y 分别是横轴和纵轴的缩放因子，它们都必须是正值。",
    "值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。",
    "默认情况下，canvas 的 1 单位就是 1 个像素。",
    "举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。",
    "同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍。会变得模糊",
    "transform(a, b, c, d, e, f)：",
    "a (m11),b (m12),c (m21),d (m22),e (dx),f (dy)",
    "clip()：把已经创建的路径转换成裁剪路径。需要在clicp()之前绘制好剪切的形状",
    "裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏。",
    "注意：clip()只能遮罩在这个方法调用之后绘制的图像，如果是clip()方法调用之前绘制的图像，则无法实现遮罩。",
    "clip是一直存在的，不论你后面画多少路径,所以最好用save()和resotre()"
  ];
  text8 = [
    "1.清空canvas：绘制每一帧动画之前，需要清空所有。清空所有最简单的做法就是clearRect()方法",
    "2.保存canvas状态：如果在绘制的过程中会更改canvas的状态(颜色、移动了坐标原点等),又在绘制每一帧时都是原始状态的话，则最好保存下canvas的状态",
    "3.绘制动画图形：这一步才是真正的绘制动画帧",
    "4.恢复canvas状态：如果你前面保存了canvas状态，则应该在绘制完成一帧之后恢复canvas状态。"
  ];
  state() {
    // 状态的保存、恢复
    var canvas = this.elem.nativeElement.querySelector("#d10");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(10, 10, 120, 120); // 使用默认设置绘制一个矩形
    ctx.save(); // 保存默认状态，[state1]

    ctx.fillStyle = "red"; // 在原有配置基础上对颜色做改变
    ctx.fillRect(25, 25, 90, 90); // 使用新的设置绘制一个矩形
    ctx.save(); // 保存当前状态，[state1，state2]

    ctx.fillStyle = "#FFF"; // 再次改变颜色配置
    ctx.fillRect(40, 40, 60, 60); // 使用新的配置绘制一个矩形

    ctx.restore(); // 重新加载之前的颜色状态，[state2]
    ctx.fillRect(55, 55, 30, 30); // 使用上一次的配置绘制一个矩形

    ctx.restore(); // 重新加载之前的之前的颜色状态，[state1]
    ctx.fillRect(65, 65, 10, 10); // 使用加载的配置绘制一个矩形
  }
  move() {
    // 坐标原点移动
    var canvas = this.elem.nativeElement.querySelector("#d11");
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(10, 10, 30, 30);
    ctx.save(); //保存坐标原点平移之前的状态
    ctx.translate(30, 30);
    ctx.strokeRect(0, 0, 30, 30);
    ctx.restore(); //恢复到最初状态
    ctx.translate(50, 50);
    ctx.fillRect(0, 0, 30, 30);
  }

  rotate() {
    // 旋转
    var canvas = this.elem.nativeElement.querySelector("#d12");
    var ctx = canvas.getContext("2d");
    //  rotate(angle)；旋转坐标轴。
    // ​ 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
    // ​ 旋转的中心是坐标原点。
    ctx.fillStyle = "red";
    ctx.fillRect(0, 10, 40, 20);
    ctx.save(); //保存坐原点平移之前的状态
    ctx.translate(30, 50);
    ctx.rotate((Math.PI / 180) * 60);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 30, 20);
    ctx.restore();
  }

  scale() {
    // 缩放
    var canvas = this.elem.nativeElement.querySelector("#d13");
    var ctx = canvas.getContext("2d");
    var x = 10,
      y = 20,
      w = 50,
      h = 20;
    var sx = 0.8,
      sy = 0.5;

    ctx.fillRect(x / sx, y / sy, w / sx, h / sy);
    ctx.scale(sx, sy); // 会将所有对位的参数（x、width ->*0.8）,（y、height ->*0.5）都进行缩放
    ctx.fillRect(x, y, w, h);
  }

  transform() {
    // 变形
    var canvas = this.elem.nativeElement.querySelector("#d14");
    var ctx = canvas.getContext("2d");
    // transform(a, b, c, d, e, f)
    // a (m11),b (m12),c (m21),d (m22),e (dx),f (dy)
    ctx.transform(1, 1, 0, 1, 0, 0); // 多个transform效果是累加的
    ctx.transform(1, 1.1, 0, 1, 1, 1);
    // setTransform具有清空前面的所有transform效果，并以当前参数执行transform功能
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillRect(0, 0, 50, 50);
  }

  clip() {
    // 剪切
    var canvas = this.elem.nativeElement.querySelector("#d15");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(25, 30, 25, 0, Math.PI * 2);
    ctx.fillRect(20, 20, 40, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(25, 90, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.clip(); // clip 之后，画布的显示区域就只有clip这么大的面积了
    ctx.fillRect(20, 90, 40, 40);

    var d152 = this.elem.nativeElement.querySelector("#d152"),
      ctx2 = d152.getContext('2d');
    // 绘制需要被涂抹的背景
    ctx2.moveTo(0, 0);
    ctx2.beginPath();
    ctx2.fillStyle = 'red'
    ctx2.fillRect(0, 0, 100, 120);
    ctx2.fill();
    // 绘制涂抹效果
    d152.addEventListener('mousemove', function (e) {
      let x = e.offsetX,
        y = e.offsetY;
      ctx2.save();
      ctx2.moveTo(x, y);
      ctx2.beginPath();
      ctx2.arc(x, y, 5, 0, 2 * Math.PI);
      ctx2.clip();
      ctx2.clearRect(0, 0, 100, 120);
      ctx2.restore();

    })


  }
  /**************************************************************/
  text7 = [
    "globalCompositeOperation = type",
    "type是下面 13 种字符串值之一：",
    "source-over：这是默认设置，新图像会覆盖在原有图像",
    "source-in：仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明)",
    "source-out：仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示)",
    "source-atop：新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。",
    "destination-over：新图像会在老图像的下面。",
    "destination-in：仅仅新老图像重叠部分的老图像被显示，其他区域全部透明。",
    "destination-out：仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。",
    "destination-atop：老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。",
    "lighter：新老图像都显示，但是重叠区域的颜色做加处理",
    "darken：保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)，",
    "如：blue: #0000ff，red: #ff0000,所以重叠部分的颜色：#000000",
    "lighten：保留重叠部分最量的像素。(每个颜色位进行比较，得到最大的)",
    "如：blue: #0000ff，red: #ff0000，所以重叠部分的颜色：#ff00ff",
    "xor：重叠部分会变成透明",
    "copy：只有新图像会被保留，其余的全部被清除(边透明)"
  ];
  arr = [
    "source-over",
    "source-atop",
    "source-in",
    "source-out",
    "destination-over",
    "destination-atop",
    "destination-in",
    "destination-out",
    "lighter",
    "copy",
    "xor"
  ];
  drawArr(type, index) {
    // 合成
    var canvas = this.elem.nativeElement.querySelector(`#arrs${index}`);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 10, 50, 30);
    ctx.globalCompositeOperation = type;
    ctx.fillStyle = "blue";
    ctx.fillRect(30, 20, 50, 30);
  }

  /**************************************************************/
  toStop = null;
  stopClock() {
    cancelAnimationFrame(this.toStop); // 用来停止 requestAnimationFrame
  }
  clock() {
    var canvas = this.elem.nativeElement.querySelector(`#clock`);
    var ctx = canvas.getContext("2d");
    let that = this;
    step();

    function step() {
      drawDial(ctx); //绘制表盘
      drawAllHands(ctx); //绘制时分秒针
      that.toStop = requestAnimationFrame(step);
      // 1：requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，
      // 并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
      // 2：在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量
      // 3：requestAnimationFrame 是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，
      // 并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销
    }

    /*绘制时分秒针*/
    function drawAllHands(ctx) {
      let time = new Date();

      let s = time.getSeconds();
      let m = time.getMinutes();
      let h = time.getHours();

      let pi = Math.PI;
      let secondAngle = (pi / 180) * 6 * s; //计算出来s针的弧度
      let minuteAngle = (pi / 180) * 6 * m + secondAngle / 60; //计算出来分针的弧度
      let hourAngle = (pi / 180) * 30 * h + minuteAngle / 12; //计算出来时针的弧度

      drawHand(hourAngle, 60, 6, "red", ctx); //绘制时针
      drawHand(minuteAngle, 75, 4, "green", ctx); //绘制分针
      drawHand(secondAngle, 85, 2, "gray", ctx); //绘制秒针
    }
    /*绘制时针、或分针、或秒针
     * 参数1：要绘制的针的角度
     * 参数2：要绘制的针的长度
     * 参数3：要绘制的针的宽度
     * 参数4：要绘制的针的颜色
     * 参数4：ctx
     * */
    function drawHand(angle, len, width, color, ctx) {
      ctx.save();
      ctx.translate(100, 100); //把坐标轴的远点平移到原来的中心
      ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(len, 0); // 沿着x轴绘制针
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    /*绘制表盘*/
    function drawDial(ctx) {
      let pi = Math.PI;
      ctx.clearRect(0, 0, 200, 200); //清除所有内容
      ctx.save();
      // 画圆
      ctx.translate(100, 100); //一定坐标原点到原来的中心
      ctx.beginPath();
      ctx.arc(0, 0, 98, 0, 2 * pi); //绘制圆周
      ctx.stroke();
      ctx.closePath();

      //绘制刻度。
      for (let i = 0; i < 60; i++) {
        ctx.save();
        ctx.rotate(-pi / 2 + (i * pi) / 30); //旋转坐标轴。坐标轴x的正方形从0度向上开始算起
        ctx.beginPath();
        let long = i % 5 ? 85 : 75;
        ctx.moveTo(long, 0);
        ctx.lineTo(95, 0);
        ctx.lineWidth = i % 5 ? 2 : 4;
        ctx.strokeStyle = i % 5 ? "blue" : "red";
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
      ctx.restore();
    }
  }
  sun() {
    let sun;
    let earth;
    let moon;
    let ctx;
    var canvas = this.elem.nativeElement.querySelector("#sun");
    ctx = canvas.getContext("2d");
    sun = new Image();
    earth = new Image();
    moon = new Image();
    sun.src = "assets/sun.jpeg";
    earth.src = "assets/earth.png";
    moon.src = "assets/moon.png";
    sun.onload = function () {
      toDraw();
    };

    function toDraw() {
      ctx.clearRect(0, 0, 200, 200); //清空所有的内容
      /*绘制 太阳*/
      ctx.drawImage(sun, 0, 0, 200, 200);
      ctx.save();
      ctx.translate(100, 100); // 将canvas坐标系原点移到原画布中心

      //绘制earth轨道
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,0,0.5)";
      ctx.arc(0, 0, 60, 0, 2 * Math.PI); // 画半径6的圆
      ctx.stroke();

      let time = new Date();
      // 设置地球的旋转
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      ctx.translate(60, 0); // 定位地球
      ctx.drawImage(earth, -15, -15, 30, 30);

      //绘制月球轨道
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,.3)";
      ctx.arc(0, 0, 30, 0, 2 * Math.PI);
      ctx.stroke();

      //设置月球的旋转
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      ctx.translate(30, 0);
      ctx.drawImage(moon, -15, -15, 30, 30);
      ctx.restore();

      // requestAnimationFrame(callback)  //  callback为动画执行内容创建函数
      requestAnimationFrame(toDraw);
    }
  }
  /*******************************************************/
  animate1() {
    var canvas = this.elem.nativeElement.querySelector("#c1");
    var ctx = canvas.getContext("2d");

    // window.onresize = resize;   // 用在全页面时
    // resize();
    // function resize() {
    //   canvas.width = window.innerWidth - 15;
    //   canvas.height = window.innerHeight - 15;
    // }
    var RAF = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    // 鼠标活动时，获取鼠标坐标
    var warea = {
      x: null,
      y: null,
      max: 20000
    };
    window.onmousemove = function (e: MouseEvent) {
      let ev = e || self.event;
      warea.x = ev["pageX"];
      warea.y = ev["pageY"];
    };
    window.onmouseout = function (e) {
      warea.x = null;
      warea.y = null;
    };
    // 添加粒子
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
    var dots = [];
    for (var i = 0; i < 200; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var xa = Math.random() * 1.1 - 1;
      var ya = Math.random() * 1.1 - 1;
      dots.push({
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        max: 6000
      });
    }
    // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
    setTimeout(function () {
      animate();
    }, 100);
    // 每一帧循环的逻辑
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
      var ndots = [warea].concat(dots);
      dots.forEach(function (dot) {
        // 粒子位移
        dot.x += dot.xa;
        dot.y += dot.ya;
        // 遇到边界将加速度反向
        dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
        dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;
        // 绘制点
        ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
        // 循环比对粒子间的距离
        for (var i = 0; i < ndots.length; i++) {
          var d2 = ndots[i];
          if (dot === d2 || d2.x === null || d2.y === null) continue;
          var xc = dot.x - d2.x;
          var yc = dot.y - d2.y;
          // 两个粒子之间的距离
          var dis = xc * xc + yc * yc;
          // 距离比
          var ratio;
          // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
          if (dis < d2.max) {
            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (d2 === warea && dis > d2.max / 2) {
              dot.x -= xc * 0.03;
              dot.y -= yc * 0.03;
            }
            // 计算距离比
            ratio = (d2.max - dis) / d2.max;
            // 画线
            ctx.beginPath();
            ctx.lineWidth = ratio / 2;
            ctx.strokeStyle = "rgba(141, 137, 137," + (ratio + 0.2) + ")";
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.stroke();
          }
        }
        // 将已经计算过的粒子从数组中删除
        ndots.splice(ndots.indexOf(dot), 1);
      });
      RAF(animate);
    }
  }
  clicks() {
    // canvas的鼠标点击事件判定
    var CANVAS_WIDTH = 300;
    var CANVAS_HEIGHT = 300;

    let myCanvas = this.elem.nativeElement.querySelector("#cas");

    myCanvas.width = CANVAS_WIDTH;
    myCanvas.height = CANVAS_HEIGHT;

    var huabi = myCanvas.getContext("2d");

    huabi.fillRect(10, 10, 100, 100);
    huabi.strokeStyle = "red";
    huabi.strokeRect(110, 110, 100, 100);

    function drawCircle() {
      huabi.beginPath();
      huabi.arc(160, 60, 50, 0, Math.PI * 2);
      huabi.stroke();
      huabi.closePath();
    }

    drawCircle();

    function drawSanjiao() {
      huabi.beginPath();
      huabi.moveTo(60, 110);
      huabi.lineTo(110, 210);
      huabi.lineTo(10, 210);
      huabi.lineTo(60, 110);
      huabi.stroke();
      huabi.closePath();
    }
    drawSanjiao();

    myCanvas.onclick = function (event) {
      var e = event;
      var x = e.pageX - myCanvas.offsetLeft;
      var y = e.pageY - myCanvas.offsetTop;

      if (x >= 10 && x <= 110 && y >= 10 && y <= 110) {
        alert("你点中了黑色矩形");
      } else if (x >= 110 && x <= 210 && y >= 110 && y <= 210) {
        alert("你点中了红色矩形");
      } else {
        drawCircle();
        // context.isPointInPath(x,y);	如果指定的点位于当前路径范围内，则返回 true，否则返回 false
        // x	测试的 x 坐标（鼠标点击位置坐标）
        // y	测试的 y 坐标（鼠标点击位置坐标）
        if (huabi.isPointInPath(x, y)) {
          alert("你点击了圆圈");
        }
        drawSanjiao();
        if (huabi.isPointInPath(x, y)) {
          alert("你点击了三角");
        }
      }
    };
  }
  isRepeat() {
    var CANVAS_WIDTH = 300;
    var CANVAS_HEIGHT = 200;

    let myCanvas = this.elem.nativeElement.querySelector("#rep");

    myCanvas.width = CANVAS_WIDTH;
    myCanvas.height = CANVAS_HEIGHT;

    var ctx = myCanvas.getContext("2d");
    ctx.moveTo(10, 10);
    ctx.lineTo(300, 200);
    ctx.lineWidth = 80;
    var img = new Image();
    img.src = "assets/over1.png";
    img.onload = function () {
      // createPattern(item,type) 方法在指定的方向内重复指定的元素。
      // item 可以是图片，也可以是另外的canvas画布
      // type: repeat、repeat-x、repeat-y、no-repeat
      var pat = ctx.createPattern(img, "repeat");
      ctx.strokeStyle = pat;
      ctx.stroke();
    };
  }

  digitalClock() {
    let con: any,
      con2: any,
      width,
      height,
      jiange, // 控制每个数字间的距离
      r = 3.8, // 球的大小
      juli = 0.5, // 用来控制每个球之间的疏密程度
      changeIndex = false,
      beforeArray = [],
      balls = [],
      canvas = null,
      canvas2 = null;

    canvas = this.elem.nativeElement.querySelector('#canvasD');
    canvas2 = this.elem.nativeElement.querySelector('#canvas2D');
    let waper = this.elem.nativeElement.querySelector('#waperD');
    width = waper.offsetWidth;
    height = waper.offsetHeight;

    canvas.width = width;
    canvas.height = height;
    canvas2.width = width;
    canvas2.height = height;

    con = canvas.getContext('2d');
    con2 = canvas2.getContext('2d');

    setInterval(_ => {
      let time = new Date().toTimeString().split(' ')[0].split('');
      con.clearRect(0, 0, width, height);
      jiange = 0;

      time.forEach((item, index) => {
        if (beforeArray.length) {
          if (time[index] == beforeArray[index]) {
            changeIndex = false;
          } else {
            changeIndex = true;
          }
        }
        if (item != ':') {
          draw(digit[Number(item)])
          jiange += (r + juli) * 2 * digit[Number(item)].length - 22;

        } else {
          draw(digit[10])
          jiange += (r + juli) * 2 * digit[10].length - 50;
        }
      })
      beforeArray = time;
    }, 1000)
    setInterval(_ => {
      updateBalls()
    }, 60)

    function draw(arr) {
      con.save();
      con.translate(jiange, 5); // 用来控制每个数字中第一个圆球的坐标
      arr.forEach((num, index2) => { // 写完第一个数字
        let lie = index2; // 表示当前列第几行
        num.forEach((num1, index3) => {
          let hang = index3; // 表示当前行第几列
          let x = (r + juli) * (1 + 2 * hang); // 圆心 x
          let y = (r + juli) * (1 + 2 * lie); // 圆心 y
          if (num1) {
            let obj = {
              x: x + jiange,
              y: y,
              r: r,
              color: null,
              g: 5 * Math.random(), // 数值越小，小球落得越慢
              vx: Math.pow(-1, Math.ceil(Math.random() * 100)) * 1.5,
              vy: -1 * Math.random(),
            };
            con.beginPath();
            con.arc(x, y, r, 0, 2 * Math.PI);
            con.fillStyle = 'black'
            con.fill();
            if (changeIndex) {
              let r = 255 - Number(Math.trunc(Math.random() * 255));
              let g = 255 - Number(Math.trunc(Math.random() * 255));
              let b = 255 - Number(Math.trunc(Math.random() * 255));
              obj.color = `rgb(${r},${g},${b})`
              balls.push(obj);
            }
          }
        })
      });
      con.restore();
    }

    function updateBalls() {
      if (balls.length) {
        con2.clearRect(0, 0, canvas2.width, canvas2.height);
        balls.forEach((item, index) => {
          con2.beginPath();
          con2.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
          con2.fillStyle = item.color;
          con2.fill();

          item.x += item.vx;
          item.y += item.vy;
          item.vy += item.g;
          if (item.y >= height - r) {
            item.y = height - r;
            item.vy = -item.vy * 0.7;
          }
          // 及时清理不显示出来的，平均维持在7000个以内
          if (item.y > canvas2.height || item.x < 0 || item.x > canvas2.width) {
            balls.splice(index, 1)
          }
        })
      }

    }
  }
}
