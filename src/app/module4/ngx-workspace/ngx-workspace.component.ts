import { Component, OnInit } from "@angular/core";
import { WidgetProfile } from "ngx-workspace";
import { OneComponentComponent } from "./one-component/one-component.component";
import { TwoComponentComponent } from "./two-component/two-component.component";
@Component({
  selector: "app-ngx-workspace",
  templateUrl: "./ngx-workspace.component.html",
  styleUrls: ["./ngx-workspace.component.css"]
})
export class NgxWorkspaceComponent implements OnInit {
  public widgets: Array<WidgetProfile>; // 将可拖动组件导入工作区
  public editable = true; // 控制组件是否可以移动,true为可移动
  public responsiveScale = 0; // 当屏幕宽度小于'wsResponsiveScale'值时禁用响应模式 0-12
  public responsive = true; // 启用响应式
  constructor() {}

  ngOnInit() {
    this.widgets = [
      {
        name: "widget-a",
        unitHeight: 2, // 组件单元高度，从1到12
        unitWidth: 2, // 组件单元宽度，从1到12
        offsetLeftUnit: 0, // 组件位置偏移高度单位，从1到12
        offsetTopUnit: 0, // 组件位置偏移单位的宽度，从1到12
        component: OneComponentComponent
      },
      {
        name: "widget-b",
        unitHeight: 1,
        unitWidth: 2,
        offsetLeftUnit: 2,
        offsetTopUnit: 0,
        component: TwoComponentComponent
      }
    ];
  }
  toEdit() {
    this.editable = !this.editable;
  }
  changeOneSize(ow, oh) {
    this.widgets[0].unitHeight = oh;
    this.widgets[0].unitWidth = ow;
  }
  changeTwoSize(tw, th) {
    this.widgets[1].unitHeight = th;
    this.widgets[1].unitWidth = tw;
  }
}
