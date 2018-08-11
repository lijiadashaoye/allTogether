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
  Module4Component
} from './module4.component'
import {
  GaodeComponent
} from './gaode/gaode.component';


const routes: Routes = [{
  path: '',
  component: Module4Component,
  children: [{
    path: 'gaode',
    component: GaodeComponent
  }]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class module4RoutingModule {}
