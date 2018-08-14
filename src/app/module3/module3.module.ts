import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  Module3Component
} from './module3.component';
import { SomeCss3Component } from './some-css3/some-css3.component';


import {
  module3RoutingModule
} from './module3.route';

@NgModule({
  imports: [
    CommonModule,
    module3RoutingModule
  ],
  declarations: [
    Module3Component,
    SomeCss3Component,

  ]
})
export class Module3Module {}
