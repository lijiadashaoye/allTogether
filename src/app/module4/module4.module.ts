import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GaodeComponent } from "./gaode/gaode.component";
import { Module4Component } from "./module4.component";

import { module4RoutingModule } from "./module4.route";

import { NgxAmapModule } from "ngx-amap"; // 高德地图
import { NgxEchartsModule } from "ngx-echarts"; // echarts
// cnpm i ngx-workspace --save
import { NgxWorkspaceModule } from "ngx-workspace"; // 组件拼接插件
/*************************************************************************************/
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"; //奥森图标
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, far, fas, faCoffee, faTwitter, faCalendar);

/*************************************************************************************/
// cnpm install ngx-dropzone-wrapper --save
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // 上传文件的
  url: "https://httpbin.org/post",
  maxFilesize: 50, // 可上传的文件大小
  acceptedFiles: "image/*,application/pdf,.psd", // 可上传的文件类型
  uploadMultiple: true // 可以多选文件
};
/*************************************************************************************/

import { AnimateCssComponent } from "./animate-css/animate-css.component";
import { EchartsLearnComponent } from "./echarts-learn/echarts-learn.component";
import { NgxWorkspaceComponent } from "./ngx-workspace/ngx-workspace.component";
import { OneComponentComponent } from "./ngx-workspace/one-component/one-component.component";
import { TwoComponentComponent } from "./ngx-workspace/two-component/two-component.component";
import { AosentubiaoComponent } from "./aosentubiao/aosentubiao.component";
import { NgxDropzoneWrapperComponent } from "./ngx-dropzone-wrapper/ngx-dropzone-wrapper.component";
@NgModule({
  imports: [
    CommonModule,
    module4RoutingModule,
    NgxEchartsModule,
    NgxAmapModule.forRoot({
      // 高德地图
      apiKey: "300a1e620eeb81580a2ed9615182d726"
    }),
    NgxWorkspaceModule,
    FontAwesomeModule,
    DropzoneModule
  ],
  declarations: [
    Module4Component,
    AnimateCssComponent,
    EchartsLearnComponent,
    NgxWorkspaceComponent,
    GaodeComponent,
    OneComponentComponent,
    AosentubiaoComponent,
    NgxDropzoneWrapperComponent,
    TwoComponentComponent
  ],
  entryComponents: [OneComponentComponent, TwoComponentComponent],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class Module4Module {}
