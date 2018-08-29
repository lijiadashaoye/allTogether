import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
/***************************************************************************/
import {
  Module1HttpService,
  Module1BASE_URL,
  urlText
} from "./module1-http";
import { IndexDBLearnComponent } from "./index-dblearn/index-dblearn.component";
import { IndexDBService } from "./index-dblearn/indexDB.service";

/***************************************************************************/
import { ObservablesComponent } from "./observables/observables.component";
import { Module1Component } from "./module1.component";
import { Module1RoutingModule } from "./module1.route";
import { JsonServerComponent } from "./jsonServer/jsonServer.component";
import { ScssLearnComponent } from "./scss-learn/scss-learn.component";

@NgModule({
  imports: [CommonModule, Module1RoutingModule],
  declarations: [
    ObservablesComponent,
    Module1Component,
    JsonServerComponent,
    IndexDBLearnComponent,
    ScssLearnComponent
  ],
  providers: [
    IndexDBService,
    Module1HttpService,
    {
      provide: Module1BASE_URL,
      useValue: urlText
    }
  ]
})
export class Module1Module {}
