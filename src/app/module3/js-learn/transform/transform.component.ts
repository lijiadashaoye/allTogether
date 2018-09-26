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
}
