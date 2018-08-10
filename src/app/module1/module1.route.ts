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

import {
  Module1Component
} from './module1.component';
import {
  ObservablesComponent
} from './observables/observables.component';

const routes: Routes = [{
  path: '',
  component: Module1Component,
  children: [{
    path: 'observables',
    component: ObservablesComponent
  }]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}
