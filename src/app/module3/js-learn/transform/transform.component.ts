import { Component, ElementRef, Renderer2, OnInit } from "@angular/core";

@Component({
  selector: "app-transform",
  templateUrl: "./transform.component.html",
  styleUrls: ["./transform.component.css"]
})
export class TransformComponent implements OnInit {
  constructor(private rd: Renderer2, private elem: ElementRef) {}

  ngOnInit() {
    this.mackeChange();
  }
  aa = 1;
  bb = 0;
  cc = 0;
  dd = 1;
  ee = 0;
  ff = 0;
  mackeChange() {
    let divs = this.elem.nativeElement.querySelector("#divs");
    this.rd.setStyle(
      divs,
      "transform",
      `matrix(${this.aa},${this.bb},${this.cc},${this.dd},${this.ee},${
        this.ff
      })`
    );
  }
  // matrix方法有六个参数matrix(a, b, c, d, x, y)，
  // 六个参数默认值是matrix(1, 0, 0, 1, 0, 0)，
  // 这六个参数分别控制不同的变换

  // a 水平缩放(宽窄变化)
  // b 垂直拉伸
  // c 水平拉伸
  // d 垂直缩放
  // x 水平位移
  // y 垂直位移

  // canvas的transform的rotate方法是默认绕着canvas的原点（即左上角）旋转

  fasdf() {
    // 原始transform计算方法
    function Matrix() {
      var x =
        arguments.length > 0
          ? Array.prototype.slice.call(arguments)
          : [1, 0, 0, 1, 0, 0];
      for (var p in x) {
        this[p] = x[p];
      }
      this.length = x.length;
    }
    Matrix.prototype = {
      rotate: function(r) {
        var cos = Math.cos(r),
          sin = Math.sin(r),
          mx = this,
          a = mx[0] * cos + mx[2] * sin,
          b = mx[1] * cos + mx[3] * sin,
          c = -mx[0] * sin + mx[2] * cos,
          d = -mx[1] * sin + mx[3] * cos;
        this[0] = a;
        this[1] = b;
        this[2] = c;
        this[3] = d;
        return this;
      },
      skew: function(x, y) {
        var tanX = Math.tan(x),
          tanY = Math.tan(y),
          mx0 = this[0],
          mx1 = this[1];
        this[0] += tanY * this[2];
        this[1] += tanY * this[3];
        this[2] += tanX * mx0;
        this[3] += tanX * mx1;
        return this;
      },
      translate: function(x, y) {
        this[4] += this[0] * x + this[2] * y;
        this[5] += this[1] * x + this[3] * y;
        return this;
      },
      scale: function(x, y) {
        var mx = this;
        this[0] *= x;
        this[1] *= x;
        this[2] *= y;
        this[3] *= y;
        return this;
      }
    };
  }
}
