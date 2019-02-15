import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'jindutiao',
    template: `
    <h2>渐变进度条</h2>
    <div style=" width:400px; height:200px;" id="waper1">
       <canvas id="d3_jindu"></canvas>
       <canvas id="d4_jindu"></canvas>
       <div class="toText" id="toText">
          <div class="isSpan2">{{showNumber}}
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
    jindu = 0;
    limt = 99;
    constructor(private elem: ElementRef) { }
    toInit(): void {
        let waper = document.getElementById('waper1');
        this.w = waper.offsetWidth;
        this.h = waper.offsetHeight;
        let banjing = this.w / 2 - 40; // 设置圆弧半径

        this.makeBase(banjing);

        let isWaper = document.getElementById('toText'); // 设置进度字体的半径
        isWaper.style.top = (this.h - 25) + 'px';
        isWaper.style.left = (this.w / 2) + 'px';
        isWaper.style.width = (this.w / 2 - 3) + 'px';

        let canvas3 = this.elem.nativeElement.querySelector("#d3_jindu");
        canvas3.setAttribute('width', this.w + 'px');
        canvas3.setAttribute('height', this.h + 'px');
        let ctx3 = canvas3.getContext("2d");

        this.inter = setInterval(() => {
            if (this.jindu >= this.limt) {
                clearInterval(this.inter);
                this.jindu = this.limt;
            }
            this.jindu += 1;
            this.isClick(ctx3, banjing);
            this.showNumber = this.jindu + ' %';
            isWaper.style.transform = 'rotate(' + (1.80 * this.jindu + 180) + 'deg)';
            isWaper.style.display = 'block'
        }, 40);
    }
    isClick(ctx, banjing) {

        // 进度条
        // 第一种写法，明显线性渐变
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.beginPath();
        var endAngle = (this.jindu / 100 + 1) * Math.PI;
        var startAngle = endAngle - 0.05;

        ctx.arc(this.w / 2, this.h - 15, banjing, startAngle, endAngle);
        ctx.strokeStyle = "rgb(255," + (240 - this.jindu) + ',' + (255 - this.jindu * 2.55).toFixed(0) + ")";
        ctx.stroke();

        // 第二种写法，渐变的不明显
        // ctx.beginPath();
        // ctx.lineWidth = 14;
        // ctx.lineCap = "round";
        // let lg = ctx.createLinearGradient(0, 0, this.w, this.h);
        // lg.addColorStop(0, 'rgba(240, 91, 22,0.1)');
        // lg.addColorStop(1, "rgba(240, 91, 22,1)");
        // ctx.strokeStyle = lg;
        // let stop = (this.jindu / 100 + 1) * Math.PI;
        // ctx.arc(this.w / 2, this.h - 15, banjing, Math.PI, stop, false);
        // ctx.stroke();
    }
    makeBase(banjing) {
        let canvas = this.elem.nativeElement.querySelector("#d4_jindu");
        canvas.setAttribute('width', this.w + 'px');
        canvas.setAttribute('height', this.h + 'px');
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgb(235, 230, 230)";
        ctx.arc(this.w / 2, this.h - 15, banjing, Math.PI, Math.PI * 2, false);
        ctx.stroke();
    }

    ngAfterViewInit(): void {
        this.toInit()
    }
}
