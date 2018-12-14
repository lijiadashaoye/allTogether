import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private rout: Router) { }
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
  
}
