import {
    CommonModule
  } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularBiJiComponent } from './angular-bi-ji.component';
import { Child1Component } from './child1/child1.component'
import { Child2Component } from './child2/child2.component'
import { BiJiRouteModule } from './biji.router'
@NgModule({
    declarations: [
        Child1Component,
        Child2Component,
        AngularBiJiComponent
    ],
    imports: [
        CommonModule,
        BiJiRouteModule
    ],
    providers: [],
})
export class BiJiModule { }
