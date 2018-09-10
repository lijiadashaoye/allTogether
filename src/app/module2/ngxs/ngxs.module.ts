import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { NgxsModule } from "@ngxs/store";
import {
  NgxsStoragePluginModule,
  NgxsStoragePluginOptions,
  StorageOption
} from "@ngxs/storage-plugin";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsWebsocketPluginModule } from "@ngxs/websocket-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { states } from "./app.state";

import { httpService } from "./http.service";

import { NgxsComponent } from "./ngxs.component";
import { NgxsFormsTemplateComponent } from "./forms/forms.component";



const routes: Routes = [
  {
    path: "",
    redirectTo: "FormsComponent"
  },
  {
    path: "",
    component: NgxsComponent,
    children: [
      {
        path: "list",
        loadChildren: "./list/list.module#ListModule"
      },
      {
        path: "FormsComponent",
        component: NgxsFormsTemplateComponent
      }
    ]
  }
];
const storageType: NgxsStoragePluginOptions = {
  // 定义存储方式
  storage: StorageOption.SessionStorage
};

@NgModule({
  declarations: [NgxsComponent, NgxsFormsTemplateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(states),
    // NgxsStoragePluginModule.forRoot(storageType), // 一定要放在第一个插件位置，定义数据保存方式
    NgxsFormPluginModule.forRoot(), // 将表单绑到state里
    // NgxsLoggerPluginModule.forRoot({    // 启用console各个state
    //   logger: console,
    //   collapsed: false
    // }),
    // NgxsWebsocketPluginModule.forRoot({
    //   url: 'ws://localhost:4200/websock'   // 如果这里写url则软件一启动就建立连接
    // }),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [httpService]
})
export class NgxsPartModule {}
