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
  AnimateMainComponent
} from './animate/animate.component';
import {
  UseAnimateListComponent
} from './animate/use-animate-list/use-animate-list.component';
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
    AnimateMainComponent,
    UseAnimateListComponent
  ]
})
export class Module2Module {}
