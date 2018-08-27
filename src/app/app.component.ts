import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { controlLogoutService } from "./controlLogout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  urlList = [];
  canShow = "login";
  isClick = 0; // 用来显示被点击的按钮
  constructor(
    public route: Router,
    public actRoute: ActivatedRoute,
    public where: controlLogoutService
  ) {
    this.where.logout.subscribe(where => {
      this.canShow = where;
    });
  }
  ngOnInit(): void {
    this.urlList = ["module1", "module2", "module3", "module4"];
  }
  logOut() {
    //  退到登陆页
    this.route.navigate(["login"]);
    this.where.logout.emit("login");
    sessionStorage.removeItem("user");
  }
  goto(data, index) {
    this.isClick = index;
    this.route.navigate([`${data}`]);
  }
}
