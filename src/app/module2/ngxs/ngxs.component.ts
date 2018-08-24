import { Component, OnInit } from "@angular/core";

@Component({
  template: `
  <div>
     ##  学习网站<br>
     https://ngxs.gitbook.io/ngxs<br>
     ## 安装<br>
     npm i @ngxs/store --save
     <br>
     npm i @ngxs/storage-plugin --save
     <br>
     npm i @ngxs/form-plugin --save
     <br>
     npm i @ngxs/logger-plugin --save
     <br>
     npm i @ngxs/websocket-plugin --save
     <br>
     npm i @ngxs/router-plugin --save
  </div>
  <hr>
  <router-outlet></router-outlet>`
})
export class NgxsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
