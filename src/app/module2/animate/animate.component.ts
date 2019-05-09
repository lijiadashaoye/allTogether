import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
} from '@angular/core';
import {
  animates,
  buttonAnimt,
  queryAnimat
} from './animate';
import {
  animate
} from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [animates, buttonAnimt, queryAnimat],
  changeDetection: ChangeDetectionStrategy.OnPush
  // 必须与 markForCheck()一起使用，执行与 markForCheck()时才表示组件有变化，才进行检查，性能优化，
})
export class AnimateMainComponent implements OnInit {

  // 用于自动执行样式变换
  interval;
  one = true;
  two = false;
  three = false;

  // clicks动画，用于决定执行动画里的哪个状态
  buttonAnimts = 'two2';
  constructor(
    private ch: ChangeDetectorRef,
    private rd: Renderer2,
    private el: ElementRef
  ) { }
  datas = [];
  addData() {
    let obj = {
      "id": "1",
      "name": "旺旺",
      "age": "20",
      "job": "学生"
    }
    let arr = [obj, obj, obj, obj, obj]
    if (this.datas.length > 10) {
      this.datas = [];
      this.datas = this.datas.concat(arr);
    } else {
      this.datas = this.datas.concat(arr);
    }

  }

  ngOnInit() {
    // 查询元素的尺寸数据
    // let kk = this.el.nativeElement.querySelector('#dd').getBoundingClientRect();
    // console.log(kk)

    // console.log(this.el.nativeElement) // 查找到的是当前组件的host标签

    // let ee = this.el.nativeElement.scrollTop; // 0
    // let ee1 = this.el.nativeElement.style; // 样式列表
    // let ee2 = this.el.nativeElement.getBoundingClientRect();
    // console.log(ee)
    // console.log(ee1)
    // console.log(ee2)

    this.interval = setInterval(() => {
      if (this.one == true) {
        this.two = true;
        this.one = false;
        this.three = false;
      } else
        if (this.two == true) {
          this.three = true;
          this.two = false;
          this.one = false;
        } else
          if (this.three == true) {
            this.three = false;
            this.two = false;
            this.one = true;
          }
      this.ch.markForCheck() // 标记这里需要触发一次push，以便进行变更检测
      // this.ch.detectChanges();  // 立即检查该视图及其子视图
    }, 2000)

  }
  hasclidk(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    this.buttonAnimts == 'one2' ? this.buttonAnimts = 'two2' : this.buttonAnimts = 'one2';
    this.ch.markForCheck()
  }

  addBorder(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    let elem = this.el.nativeElement.querySelector('.nose');
    this.rd.addClass(elem, 'addBorder');
    this.rd.setStyle(elem, 'background', 'rgb(228, 30, 218)')
  }
  moveBorder(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    let elem = this.el.nativeElement.querySelector('.nose');
    this.rd.removeClass(elem, 'addBorder');
    this.rd.removeAttribute(elem, 'style');
    this.rd.setAttribute(elem, 'style', 'background:red')
  }

  top = ''
  // 用HostBinding，将动画帮定到<app-one-child4></app-one-child4>路由状态上
  @HostBinding('@routeAnim') self;

  // 设置组件位置的方法一：
  @HostListener('@routeAnim.start', ['$event']) // 动画执行的回调，形式一
  animateStart(ev) { // 动画开始的回调函数,可以用来设置host的position，这样当路由切换组件时，元素不至于乱跑
    this.top = ev.element.offsetTop + 'px';
  }
  @HostListener('@routeAnim.done', ['$event'])
  animateDones(ev) {
    ev.element.style.top = this.top;
  }
  // 设置组件位置的方法二：
  // ngOnDestroy(): void {
  //   this.top = this.el.nativeElement.getBoundingClientRect().top;
  //   this.el.nativeElement.style.top = this.top + 'px';
  // }

  animateDone(e) { // 动画执行的回调，形式一
    // console.log(e)
  }
  giveChild(){
    console.log('通过子组件触发父组件的方法')
  }
}
