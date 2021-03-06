import {
  Component,
  OnInit
} from "@angular/core";
import {
  Router,ActivatedRoute
} from "@angular/router";
import {
  controlLogoutService
} from "../controlLogout";
@Component({
  selector: "app-module2",
  templateUrl: "./module2.component.html",
  styleUrls: ["./module2.component.css"]
})
export class Module2Component implements OnInit {
  urlList=[];
  isClick = null; // 用来显示被点击的按钮

  constructor(
    public route: Router,
     public logout: controlLogoutService,
     private active_route: ActivatedRoute) {}

  ngOnInit() {
    this.urlList = ["ngxs", 'animate','angular-biji'];
  }
  ngAfterViewInit() {
    setTimeout(_ => this.logout.logout.emit("module2"), 200);
  }
  goto(data,index) {
    this.isClick = index;
    this.route.navigate([`${data}`],{ relativeTo: this.active_route });
  }
}
