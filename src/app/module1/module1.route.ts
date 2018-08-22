import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
/****************************************************************************/
import {
  Module1Component
} from './module1.component';
import {
  ObservablesComponent
} from './observables/observables.component';
import {
  JsonServerComponent
} from './jsonServer/jsonServer.component';
import { IndexDBLearnComponent } from './index-dblearn/index-dblearn.component';
import { ScssLearnComponent } from "./scss-learn/scss-learn.component";

/****************************************************************************/
const routes: Routes = [{
  path: '',
  component: Module1Component,
  children: [{
      path: 'observables',
      component: ObservablesComponent
    },
    {
      path: 'jsonServer',
      component: JsonServerComponent
    },
    {
      path: 'indexDB',
      component: IndexDBLearnComponent
    },
    {
      path: 'scssLearn',
      component: ScssLearnComponent
    }
  ]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}
