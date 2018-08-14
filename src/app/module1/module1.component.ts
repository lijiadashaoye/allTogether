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
  constructor(public route: Router, public logout: controlLogoutService) {}

  ngOnInit() {
    this.urlList = ["observables", "jsonServer", "indexDB"];
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit("module1"), 200);
  }
  goto(data) {
    this.route.navigate([`module1/${data}`]);
  }
}
