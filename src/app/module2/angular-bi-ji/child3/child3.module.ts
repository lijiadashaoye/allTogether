import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3OneComponent } from './child3-one/child3-one.component';
import { Child3TwoComponent } from './child3-two/child3-two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Child3OneComponent, Child3TwoComponent]
})
export class Child3Module { }
