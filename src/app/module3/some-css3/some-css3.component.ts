import {
  Component,
  OnInit,
  Renderer2,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-some-css3",
  templateUrl: "./some-css3.component.html",
  styleUrls: ["./some-css3.component.css"]
})
export class SomeCss3Component implements OnInit {
  listData = [{
    name: "首页",
    icon: "icon-zhibiao"
  },
  {
    name: "指标",
    icon: "icon-home"
  }
  ];
  constructor(private rd: Renderer2, private elem: ElementRef) { }

  ngOnInit() {
    document.ondragover = function (e) {
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
  dragstartFn1(e) {
    // 可传递数据
    // 在拖动文本框中的文本时，浏览器会调用setData()方法，将拖动的文本以"text"格式保存在dataTransfer对象中。
    // 类似地，在拖放链接或图像时，会调用setData()方法并保存URL
    e.dataTransfer.setData(
      "text",
      JSON.stringify({
        name: "fff",
        id: 4
      })
    );
  }
  dragFn(e: Event) {
    let tar = e.target;
    let mouseX = e["clientX"];
    let mouseY = e["clientY"];
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
    console.log(e.dataTransfer.getData("text")); // 获取传递来的数据,保存在dataTransfer对象中的数据只能在drop事件处理程序中读取
  }

  inter: any
  ngAfterViewInit(): void {
    let el = this.elem.nativeElement.querySelector('#center');
    let num = 0;
    this.inter = setInterval(_ => {
      num++;
      if (num > 1439) {
        clearInterval(this.inter)
      }
      this.rd.setStyle(el, 'background', `linear-gradient(${num}deg,#0E2D57 10px, red 10px, red 40px,blue 40px)`)
    }, 50)


    this.liuhai()
  }

  liuhai() {
    var eleShape = document.getElementById('shape');
    var eleBox = document.getElementById('box');
    // 保证shape元素高度足够
    eleShape.style.height = eleBox.scrollHeight + 10 + 'px';

    var funShape = function () {
      var scrollTop = eleBox.scrollTop;
      // 滚动偏移应用在shape-outside上
      var shapeOutside = 'polygon(0 0, 0 ' + (150 + scrollTop) + 'px, 16px ' + (154 + scrollTop) + 'px, 30px ' + (166 + scrollTop) + 'px, 30px ' + (314 + scrollTop) + 'px, 16px ' + (326 + scrollTop) + 'px, 0 ' + (330 + scrollTop) + 'px, 0 0)';
      eleShape.style['shapeOutside'] = shapeOutside;
    };
    // 滚动时候实时改变shape形状
    eleBox.addEventListener('scroll', funShape);
    funShape();
  }
}
