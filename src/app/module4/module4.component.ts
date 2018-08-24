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
  constructor(public route: Router, public logout: controlLogoutService) {}

  ngOnInit() {
    this.urlList = [
      "gaode",
      "animateCss",
      "echarts",
      "ngx-workspace",
      "ao sen",
      'NgxDropzoneWrapper'
    ];
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit("module4"), 200);
  }
  goto(data) {
    this.route.navigate([`module4/${data}`]);
  }
}
