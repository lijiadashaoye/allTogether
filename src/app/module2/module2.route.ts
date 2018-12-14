import {
  NgModule
} from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  Module2Component
} from "./module2.component";
import {
  AnimateMainComponent
} from './animate/animate.component';
import { AngularBiJiComponent } from './angular-bi-ji/angular-bi-ji.component';

const routes: Routes = [{
  path: "",
  component: Module2Component,
  children: [{
      path: "ngxs",
      loadChildren: "./ngxs/ngxs.module#NgxsPartModule"
    },
    {
      path: "animate",
      component: AnimateMainComponent
    },
    {
      path: "angular-biji",
      loadChildren: "./angular-bi-ji/biji.module#BiJiModule"
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class module2RoutingModule {}
