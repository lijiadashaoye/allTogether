import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "app-some-css3",
  templateUrl: "./some-css3.component.html",
  styleUrls: ["./some-css3.component.css"]
})
export class SomeCss3Component implements OnInit {
  listData = [
    {
      name: "首页",
      icon: "icon-zhibiao"
    },
    {
      name: "指标",
      icon: "icon-home"
    }
  ];
  constructor(private rd: Renderer2, private elem: ElementRef) {}

  ngOnInit() {
    document.ondragover = function(e) {
      // 防止图片在新窗口打开
      e.preventDefault();
    };
  }
  setClass(icon) {
    return icon;
  }

  // 元素的css样式增删
  hide(ev) {
    ev["classList"].remove("active");
  }

  show(ev) {
    ev["classList"].add("active");
  }

  /********************************************** */
  itemX = null;
  itemY = null;
  dragstartFn(e) {
    let tar = e.target;
    this.itemX = e.clientX - tar.offsetLeft;
    this.itemY = e.clientY - tar.offsetTop;
  }
  dragFn(e: Event) {
    let tar = e.target;
    let mouseX = e["clientX"];
    let mouseY = e["clientY"] + 2;
    this.rd.setAttribute(
      tar,
      "style",
      `position:absolute;left:${mouseX - this.itemX}px;top:${mouseY -
        this.itemY}px`
    );
  }
  dragoverFn(e) {
    // console.log(e);
  }
  dropFn(e) {
    let dragImg = this.elem.nativeElement.querySelector("#dragImg");
    this.rd.appendChild(e.target, dragImg);
  }
}
