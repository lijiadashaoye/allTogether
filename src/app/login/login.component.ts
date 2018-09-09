import { Component, OnInit, HostListener } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { UserService } from "../main-http-service/user.service";
import { resolveService } from "../main.guard";
import { controlLogoutService } from "../controlLogout";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  tipText: string = "";
  imgSrc = "assets/backImg/0.jpg";
  forms: FormGroup;
  routeData;
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public userService: UserService,
    public resolveService: resolveService,
    private activeRoute: ActivatedRoute,
    public logout: controlLogoutService
  ) {
    // 获取路由数据，如果是从注册页面过来，会有数据
    this.activeRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      // console.log(paramsMap['params'])
      if (paramsMap.get("name") && paramsMap.get("password")) {
        this.routeData = {
          name: paramsMap.get("name"),
          password: paramsMap.get("password")
        };
      }
    });
  }
  ngOnInit() {
    this.forms = this.fb.group({
      name: [""],
      password: [""]
    });
    let num = Math.floor(Math.random() * 10);
    this.imgSrc = `assets/backImg/${num}.jpg`;
    if (this.routeData) {
      this.forms.patchValue({
        ...this.routeData
      });
    }
  }
  @HostListener("keyup.enter")
  toLogin() {
    this.login();
  }
  loginFast(){
    this.route.navigate(["module1"]);
  }
  login() {
    if (this.forms.get("name").value) {
      this.userService.login(this.forms.value).subscribe(val => {
        if (val.length > 0) {
          let kk = val.filter(
            data => data["password"] === this.forms.get("password").value
          );
          if (kk.length > 0) {
            sessionStorage.setItem("user", this.forms.get("name").value);
            this.route.navigate(["module1"]);
            this.logout.logout.emit("module1"); // 用于显示退出按钮
          } else {
            this.tipText = "请输入正确密码";
            setTimeout(_ => (this.tipText = ""), 3000);
          }
        } else {
          this.tipText = "请输入正确名字";
          setTimeout(_ => (this.tipText = ""), 3000);
        }
      });
    } else {
      this.tipText = "请输入名字";
      setTimeout(_ => (this.tipText = ""), 3000);
    }
  }
  signup() {
    this.route.navigate(["signup"]);
  }
  forget() {
    this.route.navigate(["forget"]);
  }
  changeInformation() {
    if (this.forms.get("name").value) {
      this.userService.login(this.forms.value).subscribe(val => {
        if (val.length > 0) {
          this.resolveService.name = val[0].name;
          this.signup();
        } else {
          this.tipText = "请输入正确名字";
          setTimeout(_ => (this.tipText = ""), 3000);
        }
      });
    } else {
      this.tipText = "请输入名字";
      setTimeout(_ => (this.tipText = ""), 3000);
    }
  }
}
