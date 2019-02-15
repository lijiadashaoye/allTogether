import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  template: `
  <div>
     ## 学习网站<br>
     https://ngxs.gitbook.io/ngxs<br>
     ## 安装<br>
     npm i @ngxs/store --save  (主功能，必须有)
     <br>
     npm i @ngxs/storage-plugin --save  (存储方案插件，选用)
     <br>
     npm i @ngxs/form-plugin --save   (表单操作插件，选用)
     <br>
     npm i @ngxs/logger-plugin --save   (状态实时console.log插件，选用)
     <br>
     npm i @ngxs/websocket-plugin --save   (websocket插件，选用)
     <br>
     npm i @ngxs/router-plugin --save   (路由插件，选用)
     <br>
     ## 主要步骤<br>
     1：安装：npm i @ngxs/store --save
     <br>
     2：在模块内添加 NgxsModule 到 imports 
     <br>
     3：编写状态管理逻辑，看 app.state.ts 文件
     <br>
     4：组件内使用状态管理，注意文件的引入

  </div>
  <button (click)="formsComponent()">formsComponent</button>
  <hr>
  <router-outlet></router-outlet>`
})
export class NgxsComponent implements OnInit {
  constructor(private rout: Router,
    private actRoute: ActivatedRoute) { }
  ngOnInit() { }
  formsComponent() {
    this.rout.navigate(['FormsComponent'], { relativeTo: this.actRoute })
  }
}
