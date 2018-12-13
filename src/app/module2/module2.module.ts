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
import { AngularBiJiComponent } from './angular-bi-ji/angular-bi-ji.component';

@NgModule({
  imports: [
    CommonModule,
    module2RoutingModule
  ],
  declarations: [
    Module2Component,
    AnimateMainComponent,
    UseAnimateListComponent,
    AngularBiJiComponent
  ]
})
export class Module2Module {}
