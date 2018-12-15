import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Child3OneComponent } from './child3-one/child3-one.component';
import { Child3TwoComponent } from './child3-two/child3-two.component';
import { Child3Component } from './child3.component';
const routes: Routes = [
    {
        path: '', component: Child3Component,
        children: [
            { path: 'Child3One', component: Child3OneComponent },
            { path: 'Child3Two', component: Child3TwoComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Child3RoutingModule { }
