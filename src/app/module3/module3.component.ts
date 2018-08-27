import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  controlLogoutService
} from '../controlLogout';
@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.css']
})
export class Module3Component implements OnInit {
  urlList;
  constructor(
    public route: Router,
    public logout: controlLogoutService
  ) { }

  ngOnInit() {
    this.urlList = [
      'Css3','jsLearn'
    ]
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit('module3'),200)
  }
  goto(data) {
    this.route.navigate([`module3/${data}`])
  }
}
