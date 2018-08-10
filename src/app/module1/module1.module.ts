import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ObservablesComponent
} from './observables/observables.component';
import {
  Module1Component
} from './module1.component';

import {
  Module1RoutingModule
} from './module1.route'

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [
    ObservablesComponent,
    Module1Component
  ]
})
export class Module1Module {}
