import {
    NgModule
  } from '@angular/core';
  import {
    RouterModule,
    Routes
  } from '@angular/router';
  import {
    CommonModule
  } from '@angular/common';
  
  import {
    Module3Component
  } from './module3.component'
  import { SomeCss3Component } from './some-css3/some-css3.component';
  import { JsLearnComponent } from './js-learn/js-learn.component';
  
  const routes: Routes = [{
    path: '',
    component: Module3Component,
    children: [{
      path: 'Css3',
      component: SomeCss3Component
    },
    {
      path: 'jsLearn',
      component: JsLearnComponent
    }
  ]
  }];
  
  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class module3RoutingModule {}
  