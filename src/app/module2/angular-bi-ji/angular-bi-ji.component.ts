import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-angular-bi-ji',
  templateUrl: './angular-bi-ji.component.html',
  styleUrls: ['./angular-bi-ji.component.css']
})
export class AngularBiJiComponent {
  comButton = [
    'fun1', 'fun2'
  ]
  data: string = ''
  url = 'module2/angular-biji'
  constructor(private rout: Router,
    private actRoute: ActivatedRoute) { }
  // 集中编写事件
  goto(type: string) {
    this[type]()
  }
  fun1() {
    this.data = 'fun1'
  }
  fun2() {
    this.data = 'fun2'
  }
  // 路由学习
  showTwo(type) {
    this.rout.navigate([type], { relativeTo: this.actRoute })
  }
  showOne(type: string) {
    this.rout.navigate([
      {
        outlets: {
          isOne: [type]
        }
      }
    ], { relativeTo: this.actRoute });
  }
  quxiao(num) {
    let arr = [];
    num == 1 ? arr = [
      {
        outlets: {
          isOne: null
        }
      }
    ] : arr = [
      {
        outlets: {
          isThree: null
        }
      }
    ]
    this.rout.navigate(arr,{relativeTo: this.actRoute})
  }
  showThree(type) {
    this.rout.navigate([
      {
        outlets: {
          isThree: [type],
        }
      }
    ], { relativeTo: this.actRoute })
  }
  showBoth() {
    this.rout.navigate([
      {
        outlets: {
          isOne: ['child2'],
          isThree: ['child3'],
        }
      }
    ], { relativeTo: this.actRoute })
  }
}
