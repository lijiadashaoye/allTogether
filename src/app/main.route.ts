import {
  Routes,
  RouterModule,
  PreloadAllModules
} from "@angular/router";
import {
  NgModule,
} from "@angular/core";
import {
  LoginComponent
} from "./login/login.component";
import {
  SignupComponent
} from "./signup/signup.component";
import {
  ForgetComponent
} from "./forget/forget.component";
import {
  A404PageComponent
} from "./a404-page/a404-page.component";
import {
  InitComponent
} from './init/init.component';
import {
  resolveService,
  ResolveGuard,
  canLoadGuard
} from "./main.guard";

const routes: Routes = [{
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "init",
    component: InitComponent
  },
  {
    path: "signup",
    component: SignupComponent,
    resolve: {
      resolveData: ResolveGuard
    }
  },
  {
    path: "forget",
    component: ForgetComponent
  },
  {
    path: "module1",
    loadChildren: "./module1/module1.module#Module1Module",
    canLoad: [canLoadGuard]
  },
  {
    path: "module2",
    loadChildren: "./module2/module2.module#Module2Module"
  },
  {
    path: "module3",
    loadChildren: "./module3/module3.module#Module3Module"
  },
  {
    path: "module4",
    loadChildren: "./module4/module4.module#Module4Module"
  },
  {
    path: "**",
    component: A404PageComponent
  }
];
// 路由相关的，就写到路由模块里
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // angular懒加载中的预加载策略
    // Angular在第一个页面显示后，才陆续的將其他lazyLoading的modul下载到本机上
    preloadingStrategy: PreloadAllModules
  })],
  providers: [resolveService, ResolveGuard, canLoadGuard],
  exports: [RouterModule]
})
export class MainRoutingModule {}
