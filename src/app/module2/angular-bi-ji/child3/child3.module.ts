import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3OneComponent } from './child3-one/child3-one.component';
import { Child3TwoComponent } from './child3-two/child3-two.component';
import {Child3Component} from './child3.component';
import {Child3RoutingModule} from './child3.route'
@NgModule({
  imports: [
    CommonModule,
    Child3RoutingModule
  ],
  declarations: [Child3Component,Child3OneComponent, Child3TwoComponent]
})
export class Child3Module { }
