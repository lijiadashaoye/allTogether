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
import { JsLearnComponent } from './js-learn/js-learn.component';

@NgModule({
  imports: [
    CommonModule,
    module3RoutingModule
  ],
  declarations: [
    Module3Component,
    SomeCss3Component,
    JsLearnComponent,

  ]
})
export class Module3Module {}
