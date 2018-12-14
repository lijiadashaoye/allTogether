import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Child1Component } from './child1/child1.component'
import { Child2Component } from './child2/child2.component'
import { AngularBiJiComponent } from './angular-bi-ji.component';
const routes: Routes = [
    {
        path: '', component: AngularBiJiComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BiJiRouteModule { }
