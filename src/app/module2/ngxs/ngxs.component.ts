import { Component, OnInit } from "@angular/core";

@Component({
  template: `
  <div>
     ##  学习网站<br>
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
  </div>
  <hr>
  <router-outlet></router-outlet>`
})
export class NgxsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
