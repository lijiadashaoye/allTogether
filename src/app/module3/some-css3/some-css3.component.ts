import {
  Component,
  OnInit,
  Renderer2,
  ElementRef
} from "@angular/core";
@Component({
  selector: "app-some-css3",
  templateUrl: "./some-css3.component.html",
  styleUrls: ["./some-css3.component.scss"]
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
  imgSrc = [];

  constructor(private rd: Renderer2, private elem: ElementRef) { }

  ngOnInit() {

    document.ondragover = function (e) {
      // 防止图片在新窗口打开
      e.preventDefault();
    };
    this.imgSrc.push({
      src: `assets/sun.jpeg`,
      pos: 'left top',
      type: 'contain',
      text: '在填充元素的内容框时保持其宽高比',
    })
    this.imgSrc.push({
      src: `assets/moon.png`,
      pos: 'left bottom',
      type: 'fill',
      text: '完全填充此框',
    })
    this.imgSrc.push({
      src: `assets/earth.png`,
      pos: 'right bottom',
      type: 'cover',
      text: '保持其宽高比的同时填充元素的整个内容框',
    })
  }

  setClass(icon) {
    return icon;
  }
  make16Color = ''
  setColor() {
    let kk = document.querySelector('#setColor');
    this.make16Color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
    kk['style'].background = this.make16Color;

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
    // 获取元素的位置，鼠标点击的位置减去鼠标在被点击的元素的内的位置
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
      this.itemY}px;cursor:move`
    );
  }
  dragoverFn(e) {
    // console.log(e);
    // 默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
    e.preventDefault()
  }
  dropFn(e) {
    e.preventDefault();
    // 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
    let dragImg = this.elem.nativeElement.querySelector("#dragImg");
    this.rd.appendChild(e.target, dragImg);
    console.log(e.dataTransfer.getData("text")); // 获取传递来的数据,保存在dataTransfer对象中的数据只能在drop事件处理程序中读取
  }

  inter: any
  degNum: number = 0;
  inter2: any
  pos1 = 0;
  pos2 = 0;
  screenWidth = '';
  ngAfterViewInit(): void {
    let el = this.elem.nativeElement.querySelector('#center');
    this.inter = setInterval(_ => {
      this.degNum++;
      if (this.degNum > 380) {
        clearInterval(this.inter)
      }
      this.rd.setStyle(el, 'background', `linear-gradient(${this.degNum}deg,#0E2D57 10px, red 10px, red 40px,blue 40px)`)
    }, 80)
    this.liuhai();
    this.setJingXiang();
    window.addEventListener('resize', e => {
      this.screenWidth = e.target['innerWidth'] + ' px'
    })

  }
  // 动态设置径向渐变
  setJingXiang() {
    let div1 = this.elem.nativeElement.querySelector('#div1');
    let nb = this.elem.nativeElement.querySelector('#nb');

    this.inter2 = setInterval(_ => {
      this.pos1++;
      this.pos2++;
      if (this.pos1 > 100) {
        clearInterval(this.inter2)
      }
      this.rd.setStyle(div1, 'background', `-webkit-radial-gradient(${this.pos1}% ${this.pos2}%, #fff 0%, #fff 60%, green 60%, green 100%)`);

      this.rd.setStyle(nb, 'background', `-webkit-radial-gradient(circle, pink ${this.pos1}%, transparent 0), #00caf5`);
      this.rd.setStyle(nb, 'backgroundSize', `30px 30px`);
    }, 200)
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
  imgArr = [{
    img: 'https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg',
    text: '1 convallis timestamp'
  },
  {
    img: 'https://imgsa.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=03948ea9b4315c60579863bdecd8a076/8326cffc1e178a825a6b5d1cfe03738da977e833.jpg',
    text: '2 convallis timestamp 2 Donec a fermentum nisi.'
  },
  {
    img: 'https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=3d645bf2d0ca7bcb6976cf7ddf600006/6d81800a19d8bc3efe5f64fb858ba61ea8d345af.jpg',
    text: '4 Donec a fermentum nisi. Integer dolor est, commodo utsagittis vitae, egestas at augue. '
  },
  {
    img: 'https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=fbc3501b0a087bf469e15fbb93ba3c49/bf096b63f6246b60ea65dd24e3f81a4c510fa273.jpg',
    text: '5 Donec a fermentum nisi. Integer dolor est, commodo ut sagittis vitae, egestas at augue.'
  }
  ]
  pubuData = []
  makePuBu() {  // 瀑布流布局
    for (let i = 10; i--;) {
      let num = Math.trunc(Math.random() * this.imgArr.length);
      this.pubuData.push(this.imgArr[num])
    }
  }
  // 直接定位到元素
  toScroll(tar) {
    tar.scrollIntoView()
  }
  // 操纵元素的style
  // style在元素上是一个以各种样式名为属性名的对象，操纵样式名即可达到操纵样式
  changeColor(tar) {
    console.log(tar.style)
    tar.style.color == "blue" ? tar.style.color = "red" : tar.style.color = "blue"
  }
  changeBk(tar) {
    tar.style.background == "pink" ? tar.style.removeProperty('background')
      : tar.style.background = "pink"
  }
}
