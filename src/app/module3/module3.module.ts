import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Module3Component } from "./module3.component";
import { SomeCss3Component } from "./some-css3/some-css3.component";
import { FormsModule } from "@angular/forms";

import { module3RoutingModule } from "./module3.route";
import { JsLearnComponent } from "./js-learn/js-learn.component";
import { ZaxiangComponent } from "./zaxiang/zaxiang.component";
import { MyLibraryModule } from "my-library";
import { CanvasLearnComponent } from './canvas-learn/canvas-learn.component';
import { TransformComponent } from './js-learn/transform/transform.component';

@NgModule({
  imports: [CommonModule, module3RoutingModule, FormsModule,MyLibraryModule],
  declarations: [
    Module3Component,
    SomeCss3Component,
    JsLearnComponent,
    ZaxiangComponent,
    CanvasLearnComponent,
    TransformComponent,
  ]
})
export class Module3Module {}
