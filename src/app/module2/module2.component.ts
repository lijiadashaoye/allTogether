import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  controlLogoutService
} from '../controlLogout';
@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {
  urlList;
  constructor(
    public route: Router,
    public logout: controlLogoutService
  ) { }

  ngOnInit() {
    this.urlList = [
      'sdfsdfsd',
    ]
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit('module2'),200)
  }
  goto(data) {
    this.route.navigate([`module2/${data}`])
  }
}
