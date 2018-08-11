import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  Module2Component
} from './module2.component';

import {
  module2RoutingModule
} from './module2.route'
@NgModule({
  imports: [
    CommonModule,
    module2RoutingModule
  ],
  declarations: [
    Module2Component,
    
  ]
})
export class Module2Module { }
