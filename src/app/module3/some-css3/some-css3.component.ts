import {
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-some-css3",
  templateUrl: "./some-css3.component.html",
  styleUrls: ["./some-css3.component.css"]
})
export class SomeCss3Component implements OnInit {
  listData = [{
    name: "首页",
    icon: "icon-zhibiao"
  }, {
    name: "指标",
    icon: "icon-home"
  }]
  constructor() {}

  ngOnInit() {}
  setClass(icon) {
    return icon;
  }

  // 元素的css样式增删
  hide(ev) {
    ev['classList'].remove('active');
  }

  show(ev) {
    ev['classList'].add('active');
  }
}
