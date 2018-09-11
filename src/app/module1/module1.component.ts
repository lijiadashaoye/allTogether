import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { controlLogoutService } from "../controlLogout";

@Component({
  selector: "app-module1",
  templateUrl: "./module1.component.html",
  styleUrls: ["./module1.component.css"]
})
export class Module1Component implements OnInit {
  urlList = [];
  isClick = null; // 用来显示被点击的按钮
  constructor(
    public route: Router,
    public logout: controlLogoutService,
  ) {}

  ngOnInit() {
    this.urlList = ["observables", "jsonServer", "indexDB", "scssLearn"];
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit("module1"), 200);
  }
  goto(data, index) {
    this.isClick = index;
    this.route.navigate([`module1/${data}`]);
  }
}
