import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { controlLogoutService } from "../controlLogout";

@Component({
  selector: "app-module4",
  templateUrl: "./module4.component.html",
  styleUrls: ["./module4.component.css"]
})
export class Module4Component implements OnInit {
  urlList;
  isClick = null; // 用来显示被点击的按钮

  constructor(public route: Router, public logout: controlLogoutService) {}

  ngOnInit() {
    this.urlList = [
      "animateCss",
      "echarts",
      "ngx-workspace",
      "ao sen",
      "NgxDropzoneWrapper",
      "dragdrop",
      "bulma",
      "excel",
      "gaode",
      "socket-io",
      'er-wei-ma',
      'other-chajian'
    ];
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit("module4"), 200);
  }
  goto(data, index) {
    this.isClick = index;
    this.route.navigate([`module4/${data}`]);
  }
  setData(da:Array<string>){  // ngFor 里执行的函数
    return da.slice(0,da.length/2+2)
  }
}
