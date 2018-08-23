import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { Module4Component } from "./module4.component";
import { GaodeComponent } from "./gaode/gaode.component";
import { AnimateCssComponent } from "./animate-css/animate-css.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class module4RoutingModule {}
