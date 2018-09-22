import {
  Component,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-canvas-learn",
  templateUrl: "./canvas-learn.component.html",
  styleUrls: ["./canvas-learn.component.css"]
})
export class CanvasLearnComponent {
  constructor(private elem: ElementRef) {}
  text1 = [
    '一定要使用 Canvas 自带的 width 和 height 属性，不要使用 CSS 来控制，因为 CSS 控制会导致 Canvas 变形',
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
    ctx.clearRect(20, 20, 80, 30);
  }
  /**************************************************************/
  text2 = [
    "beginPath()；新建一条路径， 路径一旦创建成功， 图形绘制命令被指向到路径上生成路径",
    "moveTo(x, y)；把画笔移动到指定的坐标(x, y)。 相当于设置路径的起始点坐标",
    "closePath()；闭合路径之后， 图形绘制命令又重新指向到上下文中",
    "stroke()；通过线条来绘制图形轮廓",
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
    ctx.moveTo(110, 20);  // 再开起点
    ctx.lineTo(140, 70);
    ctx.stroke();  // 统一输出
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
    ctx.stroke(); //描边。stroke不会自动closePath()
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
    ctx.fill(); //描边。stroke不会自动closePath()
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
    "以(x, y) 为圆心， 以r为半径， 从 startAngle弧度开始到endAngle弧度结束。",
    "anticlosewise是布尔值， true表示逆时针， false表示顺时针。(默认是顺时针)",
    "注意：",
    "1：这里的度数都是弧度，0 弧度是指的x轴正方向",
    "2：arcTo(x1, y1, x2, y2, radius):",
    "根据给定的控制点和半径画一段圆弧， 最后再以直线连接两个控制点。",
    "使用角度：Math.PI / 180=1°",
    "(Math.PI / 180) * N，N为多少即是多少度，+N为顺时针，-N为逆时针"
  ];
  arc() {
    // 绘制圆弧
    var canvas = this.elem.nativeElement.querySelector("#d3");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(10, 10, 50, 0, Math.PI / 2, false);
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
    "direction = value；文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。"
  ];
  er() {
    // 绘制二次贝塞尔曲线
    var canvas = this.elem.nativeElement.querySelector("#d4");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 100); //起始点
    var cp1x = 40;
    var cp1y = 15; //控制点
    var x = 200;
    var y = 100; // 结束点
    // quadraticCurveTo(cp1x, cp1y, x, y):
    // ​参数cp1x, cp1y：控制点坐标
    // ​参数 x, y：结束点坐标
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(10, 100, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
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
    ctx.font = "bold 40px sans-serif";
    ctx.fillText("天若有情", 30, 280);
    ctx.strokeText("天若有情", 30, 325);
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
        ctx.fillStyle =
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
      ctx16.moveTo(20, 20 + i * 70);
      ctx16.lineTo(40, 60 + i * 70);
      ctx16.lineTo(60, 20 + i * 70);
      ctx16.lineTo(80, 60 + i * 70);
      ctx16.lineTo(100, 20 + i * 70);
      ctx16.stroke();
    }
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
    "translate方法接受两个参数。x 是左右偏移量，y 是上下偏移量。",
    "在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多。",
    "又如果你是在一个循环中做位移但没有保存和恢复canvas 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 canvas 范围以外了。",
    "​注意：translate移动的是canvas的坐标原点。(坐标变换)",
    "scale(x, y)：我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。",
    "​scale(x, y)方法接受两个参数。x，y 分别是横轴和纵轴的缩放因子，它们都必须是正值。",
    "值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。",
    "默认情况下，canvas 的 1 单位就是 1 个像素。",
    "举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。",
    "同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍。",
    "transform(a, b, c, d, e, f)：",
    "a (m11),b (m12),c (m21),d (m22),e (dx),f (dy)",
    "clip()：把已经创建的路径转换成裁剪路径。",
    "裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏。",
    "注意：clip()只能遮罩在这个方法调用之后绘制的图像，如果是clip()方法调用之前绘制的图像，则无法实现遮罩。"
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
    ctx.save(); //保存坐原点平移之前的状态
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
    ctx.transform(1, 1, 0, 1, 0, 0);
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
    ctx.clip();
    ctx.fillRect(20, 90, 40, 40);
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
    var canvas = this.elem.nativeElement.querySelector(`#arrs${index}`);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 10, 50, 30);
    ctx.globalCompositeOperation = type;
    ctx.fillStyle = "blue";
    ctx.fillRect(30, 20, 50, 30);
  }

  /**************************************************************/

  clock() {
    var canvas = this.elem.nativeElement.querySelector(`#clock`);
    var ctx = canvas.getContext("2d");
    requestAnimationFrame(function step() {
      drawDial(ctx); //绘制表盘
      drawAllHands(ctx); //绘制时分秒针
      requestAnimationFrame(step);
    });

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
}
