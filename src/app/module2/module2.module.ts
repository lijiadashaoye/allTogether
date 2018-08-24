import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  Module2Component
} from './module2.component';
import {NgxsComponent} from './ngxs/ngxs.component';
import {
  module2RoutingModule
} from './module2.route';


@NgModule({
  imports: [
    CommonModule,
    module2RoutingModule
  ],
  declarations: [
    Module2Component,
    NgxsComponent
  ]
})
export class Module2Module { }
