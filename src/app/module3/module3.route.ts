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
  
  
  
  const routes: Routes = [{
    path: '',
    component: Module3Component,
    // children: [{
    //   path: 'gaode',
    //   component: GaodeComponent
    // }]
  }];
  
  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class module3RoutingModule {}
  