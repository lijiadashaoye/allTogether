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
    Module2Component
  } from './module2.component'

  
  
  const routes: Routes = [{
    path: '',
    component: Module2Component,
    // children: [{
    //   path: 'gaode',
    //   component: GaodeComponent
    // }]
  }];
  
  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class module2RoutingModule {}
  