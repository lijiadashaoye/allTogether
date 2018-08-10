import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  NgModule
} from '@angular/core';
import {
  LoginComponent
} from './login/login.component';
import {
  SignupComponent
} from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component'

import {
  ResolveGuard
} from './main.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: {
      resolveData: ResolveGuard
    }
  },
  {
    path: 'forget',
    component: ForgetComponent
  },
  {
    path: 'module1',
    loadChildren: './module1/module1.module#Module1Module',
    
  },
  {
    path: 'module2',
    loadChildren: './module2/module2.module#Module2Module',
  },
  {
    path: 'module3',
    loadChildren: './module3/module3.module#Module3Module',
  },
  {
    path: 'module4',
    loadChildren: './module4/module4.module#Module4Module',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
