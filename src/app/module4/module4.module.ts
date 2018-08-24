import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GaodeComponent } from "./gaode/gaode.component";
import { Module4Component } from "./module4.component";

import { module4RoutingModule } from "./module4.route";

import { NgxAmapModule } from "ngx-amap"; // 高德地图
import { NgxEchartsModule } from "ngx-echarts"; // echarts
import { AnimateCssComponent } from "./animate-css/animate-css.component";
import { EchartsLearnComponent } from "./echarts-learn/echarts-learn.component";
@NgModule({
  imports: [
    CommonModule,
    module4RoutingModule,
    NgxEchartsModule,
    NgxAmapModule.forRoot({
      // 高德地图
      apiKey: "300a1e620eeb81580a2ed9615182d726"
    })
  ],
  declarations: [
    Module4Component,
    AnimateCssComponent,
    EchartsLearnComponent,
    GaodeComponent
  ]
})
export class Module4Module {}
