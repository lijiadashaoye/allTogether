import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

/****************************************************************************/
import { Module1Component } from "./module1.component";
import { ObservablesComponent } from "./observables/observables.component";
import { JsonServerComponent } from "./jsonServer/jsonServer.component";
import { IndexDBLearnComponent } from "./index-dblearn/index-dblearn.component";
import { ScssLearnComponent } from "./scss-learn/scss-learn.component";

/****************************************************************************/
const routes: Routes = [
  {
    path: "",
    component: Module1Component,
    children: [
      {
        path: "observables",
        data: { title: "动态修改title：observables" },
        component: ObservablesComponent,
      },
      {
        path: "jsonServer",
        component: JsonServerComponent,
        data: { title: "动态修改title：jsonServer" }
      },
      {
        path: "indexDB",
        component: IndexDBLearnComponent,
        data: { title: "动态修改title：indexDB" }
      },
      {
        path: "scssLearn",
        component: ScssLearnComponent,
        data: { title: "动态修改title：scssLearn" }
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
