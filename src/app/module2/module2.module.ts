import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  Module2Component
} from '@IM/module2/module2.component';
import {
  AnimateMainComponent
} from '@IM/module2/animate/animate.component';
import {
  UseAnimateListComponent
} from '@IM/module2/animate/use-animate-list/use-animate-list.component';
import {
  module2RoutingModule
} from '@IM/module2/module2.route';

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
