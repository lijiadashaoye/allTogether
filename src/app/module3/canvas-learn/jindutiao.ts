import {
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'jindutiao',
  template: `
      <h2>渐变进度条</h2>
      <div style=" width:200px; height:100px;" id="waper1">
         <canvas id="d3_jindu"></canvas>
         <div class="toText" id="toText">
          <div>
            <p class="isSpan2">{{showNumber}}</p>
            <p class="point"></p>
          </div>
         </div>
      </div>
      `,
  styleUrls: ['./canvas-learn.component.css']
})
export class JindutiaoComponent {
  inter = null;
  w;
  h;
  showNumber;
  jindu = 100;
  step = 0;
  x; // 圆心x坐标
  y; // 圆心y坐标
  r; // 半径
  type = false; // true为横向渐变，false为沿着线渐变

  constructor(private elem: ElementRef) {}
  toInit(): void {
    let waper = document.getElementById('waper1');
    this.w = waper.offsetWidth;
    this.h = waper.offsetHeight;

    this.x = this.w / 2;
    this.y = 20;
    this.r = this.h - this.y; // 设置圆弧半径

    let isWaper = document.getElementById('toText'); // 设置进度字体的半径
    isWaper.style.bottom = this.y - 10 + 'px';
    isWaper.style.left = this.x + 'px';
    isWaper.style.width = this.x + 'px';

    let canvas3 = this.elem.nativeElement.querySelector("#d3_jindu");
    canvas3.setAttribute('width', this.w + 'px');
    canvas3.setAttribute('height', this.h + 'px');
    let ctx3 = canvas3.getContext("2d");

    ctx3.lineWidth = 14;
    ctx3.lineCap = "round";
    this.makeBase(ctx3);

    this.inter = setInterval(() => {
      this.step += 1;
      if (this.step >= this.jindu) {
        this.step = this.jindu;
        clearInterval(this.inter);
      }
      this.isClick(ctx3);
      this.showNumber = this.step + ' %';
      isWaper.style.transform = 'rotate(' + (1.8 * this.step + 180) + 'deg)';
      isWaper.style.display = 'block'
    }, 40);
  }
  isClick(ctx) {
    // 进度条
    var endAngle = (this.step / 100 + 1) * Math.PI;
    var startAngle = endAngle - 0.05;

    ctx.beginPath();
    if (this.type) {
      // 使用横向渐变
      let lg = ctx.createLinearGradient(0, 0, this.w, 0);
      lg.addColorStop(0, 'rgba(255, 255, 255,0.1)');
      lg.addColorStop(1, "rgba(240, 91, 22,1)");
      ctx.strokeStyle = lg;
    } else { // 沿着线条渐变
      ctx.strokeStyle = "rgb(255," + (240 - this.step) + ',' + (0 - this.step * 2.95).toFixed(0) + ")";
    }
    ctx.arc(this.w / 2, this.h - 10, this.r, startAngle, endAngle);
    ctx.stroke();
  }
  makeBase(ctx) { // 画背景圆弧
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgb(235, 230, 230)";
    ctx.arc(this.w / 2, this.h - 10, this.r, Math.PI, Math.PI * 2, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = "center"; // 设置多次绘画的文字的对齐方式，从而也改变了定位参考点的位置
    ctx.font = "bold 20px sans-serif";
    let text = '';
    this.type ? text = '使用横向渐变' : text = '沿着线条渐变';
    ctx.fillText(text, (this.w / 2), (this.h - this.r / 3));
  }

  ngAfterViewInit(): void {
    this.toInit()
  }
}
