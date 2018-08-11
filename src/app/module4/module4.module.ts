import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  GaodeComponent
} from './gaode/gaode.component';
import {
  Module4Component
} from './module4.component';

import {
  module4RoutingModule
} from './module4.route'
@NgModule({
  imports: [
    CommonModule,
    module4RoutingModule
  ],
  declarations: [
    Module4Component,
    GaodeComponent
  ]
})
export class Module4Module {}
