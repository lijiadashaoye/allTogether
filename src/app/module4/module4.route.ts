import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { Module4Component } from "./module4.component";
import { GaodeComponent } from "./gaode/gaode.component";
import { AnimateCssComponent } from "./animate-css/animate-css.component";
import { EchartsLearnComponent } from "./echarts-learn/echarts-learn.component";
import { NgxWorkspaceComponent } from "./ngx-workspace/ngx-workspace.component";
import { AosentubiaoComponent } from "./aosentubiao/aosentubiao.component";
import { NgxDropzoneWrapperComponent } from "./ngx-dropzone-wrapper/ngx-dropzone-wrapper.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";
import { BulmaComponent } from "./bulma/bulma.component";
import { ExcelComponent } from "./excel/excel.component";
import { SocketIoComponent } from "./socket-io/socket-io.component";
import { ErWeiMaComponent } from './er-wei-ma/er-wei-ma.component';
import { OtherChajianComponent } from './other-chajian/other-chajian.component';

const routes: Routes = [
  {
    path: "",
    component: Module4Component,
    children: [
      {
        path: "gaode",
        component: GaodeComponent
      },
      {
        path: "animateCss",
        component: AnimateCssComponent
      },
      {
        path: "echarts",
        component: EchartsLearnComponent
      },
      {
        path: "ngx-workspace",
        component: NgxWorkspaceComponent
      },
      {
        path: "ao sen",
        component: AosentubiaoComponent
      },
      {
        path: "NgxDropzoneWrapper",
        component: NgxDropzoneWrapperComponent
      },
      {
        path: "dragdrop",
        component: DragAndDropComponent
      },
      {
        path: "bulma",
        component: BulmaComponent
      },
      {
        path: "excel",
        component: ExcelComponent
      },
      {
        path: "socket-io",
        component: SocketIoComponent
      },
      {
        path: "er-wei-ma",
        component: ErWeiMaComponent
      },
      {
        path: "other-chajian",
        component: OtherChajianComponent
      }

    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class module4RoutingModule {}
